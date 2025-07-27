import * as React from 'react';
import { isNil, isDate } from 'lodash';
import { Div } from '../../components/Div';
import { ChiliContext } from '../../components/ChiliProvider';
import { useElement } from '../../utils';
import { VIEW_TYPES } from '../CalendarBase/constants';
import { MaskedInputBase } from '../MaskedInputBase';
import { setDate, setViewDate } from './actions';
import {
  stringToDate, formatDateTime,
} from './helpers';
import { stateReducer } from './reducer';
import type {
  AllActions, CustomElements, DateTimeInputProps, DateTimeInputState, EffectData,
} from './types';
import { Icon } from '../../components/Icon';

export const useDateTimeInputEffects = ({
  conditions,
  dispatch,
  props,
  state,
}: EffectData): void => {
  const {
    value: valueProp, format = 'dd.MM.yyyy', min, max,
  } = props;

  const {
    date: dateState, isFocused,
  } = state;

  React.useEffect(() => {
    const dateValue = isDate(valueProp) || valueProp == null ? valueProp : null;

    if (dateValue && !isFocused) {
      dispatch(setDate(dateValue));
    }
  }, [valueProp, dispatch, isFocused]);

  React.useEffect(() => {
    // sync calendar display with current value
    if (dateState && conditions.isValueInRange) dispatch(setViewDate(dateState));
  }, [conditions.isValueInRange, dispatch, dateState]);

  React.useEffect(() => {
    // if value is an empty string we have to set the date to null for validation
    if (isDate(valueProp) || isNil(valueProp) || isFocused) return;

    if (valueProp.length === 0) {
      dispatch(setDate(null));
    }

    const newDate = stringToDate(valueProp, format);
    // if the date is correct - set to the date, otherwise - set to null
    if (newDate && newDate.getDate()) dispatch(setDate(newDate));
    else dispatch(setDate(null));
  }, [dispatch, format, isFocused, max, min, valueProp]);
};

export const useDateTimeInputState = (props: DateTimeInputProps): [DateTimeInputState, React.Dispatch<AllActions>] => {
  const {
    value: valueProp, defaultValue, format = 'dd.MM.yyyy', min, max,
  } = props;

  // if today's date is out of min/max range - open the calendar with the min/max date instead
  const todayIsMin = (min && new Date() < min) ? min : null;

  const todayIsMax = (max && new Date() > max) ? max : null;
  // today's date, the time is 00:00
  const today = new Date();

  const initialPropValue = valueProp === undefined ? defaultValue : valueProp;

  const initialDate = (() => {
    if (isDate(initialPropValue)) return initialPropValue;
    if (typeof initialPropValue === 'string') return stringToDate(initialPropValue, format);
    return null;
  })();

  const initialValue = (() => {
    if (isDate(initialPropValue)) return formatDateTime(initialPropValue, format);
    if (typeof initialPropValue === 'string') return initialPropValue;
    return '';
  })();

  const stringValue = isDate(initialPropValue) || initialPropValue === null || initialPropValue === undefined ? '' : initialPropValue as string;

  const initialState = {
    date: initialDate,
    value: initialValue,
    isValid: true,
    isFocused: false,
    isOpen: false,
    viewDate: todayIsMin
    || todayIsMax
    || stringToDate(stringValue, format)
    || today,
    viewType: VIEW_TYPES.DATES,
  };
  const [state, dispatch] = React.useReducer(stateReducer, initialState);

  return [state, dispatch];
};

export const useCustomElements = (props: DateTimeInputProps, state: DateTimeInputState): CustomElements => {
  const { wrapperRender, iconRender, inputRender } = props;

  const { renders: { dateTimeInput: dateTimeInputRenders } } = React.useContext(ChiliContext);

  const Wrapper = useElement(
    'Wrapper',
    Div,
    wrapperRender || dateTimeInputRenders.wrapperRender,
    props,
    state,
  );

  const IconElement = useElement(
    'Icon',
    Icon,
    iconRender || dateTimeInputRenders.iconRender,
    props,
    state,
  );

  const Input = useElement(
    'Input',
    MaskedInputBase,
    inputRender || dateTimeInputRenders.inputRender,
    props,
    state,
  );

  return {
    Wrapper,
    Input,
    Icon: IconElement,
  };
};
