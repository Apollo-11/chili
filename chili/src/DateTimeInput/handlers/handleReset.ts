import type * as React from 'react';
import { isFunction, isDate } from 'lodash';
import type { DateTimeInputProps, AllActions } from '../types';
import { setDate, setValue } from '../actions';
import { stringToDate, formatDateTime } from '../helpers';

export const createResetHandler = ({
  props,
  dispatch,
}: {
  props: DateTimeInputProps,
  dispatch: React.Dispatch<AllActions>,
}) => (newVal?: unknown) => {
  const {
    defaultValue, format = 'dd.MM.yyyy', name, onChange,
  } = props;

  const sourceValue = newVal !== undefined ? newVal as string | Date | null : defaultValue;

  const date = (() => {
    if (isDate(sourceValue)) return sourceValue;
    if (typeof sourceValue === 'string') return stringToDate(sourceValue, format);
    return null;
  })();

  const value = (() => {
    if (isDate(sourceValue)) return formatDateTime(sourceValue, format);
    if (typeof sourceValue === 'string') return sourceValue;
    return '';
  })();
  dispatch(setValue(value));
  dispatch(setDate(date));
  if (isFunction(onChange)) {
    onChange({
      component: {
        name,
        date,
        value,
      },
    });
  }
};
