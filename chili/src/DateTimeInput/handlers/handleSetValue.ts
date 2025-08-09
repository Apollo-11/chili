import { isFunction } from 'lodash';
import type * as React from 'react';
import type { DateTimeInputProps, AllActions } from '../types';
import { setDate, setValue } from '../actions';
import { createMask, formatDateTime, stringToDate } from '../helpers';
import { maskValue } from '../../MaskedInputBase/helpers';
import { COMPONENT_TYPES } from '../constants';

export const createSetValueHandler = ({
  props,
  dispatch,
}: {
  props: DateTimeInputProps,
  dispatch: React.Dispatch<AllActions>,
}) => (value: unknown) => {
  const newValueInput = value as string;
  const { format = 'dd.MM.yyyy', name, onChange, type = COMPONENT_TYPES.DATE_ONLY } = props;

  const mask = createMask(format, type);
  const maskedValue = maskValue(newValueInput, mask);
  const newDate = stringToDate(maskedValue, format);
  const newValue = newDate ? formatDateTime(newDate, format) : newValueInput;

  dispatch(setValue(newValue));
  if (newDate && newDate.getDate()) dispatch(setDate(newDate));
  else dispatch(setDate(null));

  if (isFunction(onChange)) {
    onChange({
      component: {
        name,
        date: newDate,
        value: newValueInput,
      },
    } as any);
  }
};
