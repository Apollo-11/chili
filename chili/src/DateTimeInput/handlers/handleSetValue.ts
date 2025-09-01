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
  const {
    format = 'dd.MM.yyyy',
    name,
    onChange,
    type = COMPONENT_TYPES.DATE_ONLY,
  } = props;

  let newDate: Date | null = null;
  let preparedValue = newValueInput;

  if (typeof newValueInput === 'string' && /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z/.test(newValueInput)) {
    const dateFromISO = new Date(newValueInput);
    if (!Number.isNaN(dateFromISO.getTime())) newDate = dateFromISO;
  }

  if (!newDate) {
    const mask = createMask(format, type);
    preparedValue = maskValue(newValueInput, mask);
    newDate = stringToDate(preparedValue, format);
  }

  const newValue = newDate ? formatDateTime(newDate, format) : preparedValue;

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
    });
  }
};
