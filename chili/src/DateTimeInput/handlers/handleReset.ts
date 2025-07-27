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
}) => () => {
  const { defaultValue, format = 'dd.MM.yyyy', name, onChange } = props;

  const date = (() => {
    if (isDate(defaultValue)) return defaultValue;
    if (typeof defaultValue === 'string') return stringToDate(defaultValue, format);
    return null;
  })();

  const value = (() => {
    if (isDate(defaultValue)) return formatDateTime(defaultValue, format);
    if (typeof defaultValue === 'string') return defaultValue;
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
