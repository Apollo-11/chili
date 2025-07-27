import { isFunction } from 'lodash';
import type { SetState } from '../../commonTypes';
import type { DateRangeProps } from './types';
import type {
  CustomRangeEvent,
} from '../../src/DateTimeInputRange/types';
import { stringToDate, formatDateTime } from '../../src/DateTimeInput/helpers';

export const createChangeHandler = (
  props: DateRangeProps,
  setUncontrolledValue: SetState<DateRangeProps['value']>,
) => (ev: CustomRangeEvent): void => {
  const { onChange, value } = props;

  if (value === undefined) {
    setUncontrolledValue(ev.component.date);
  }

  if (isFunction(onChange)) onChange(ev);
};

export const createResetHandler = (
  props: DateRangeProps,
  setUncontrolledValue: SetState<DateRangeProps['value']>,
) => () => {
  const {
    defaultValue = [null, null],
    format = 'dd.MM.yyyy',
    name,
    onChange,
    value,
  } = props;

  const date: [Date | null, Date | null] = [
    typeof defaultValue[0] === 'string'
      ? stringToDate(defaultValue[0], format)
      : defaultValue[0],
    typeof defaultValue[1] === 'string'
      ? stringToDate(defaultValue[1], format)
      : defaultValue[1],
  ];

  if (value === undefined) {
    setUncontrolledValue(date);
  }

  if (isFunction(onChange)) {
    const stringValue: [string, string] = [
      typeof defaultValue[0] === 'string'
        ? defaultValue[0]
        : formatDateTime(defaultValue[0], format),
      typeof defaultValue[1] === 'string'
        ? defaultValue[1]
        : formatDateTime(defaultValue[1], format),
    ];

    onChange({
      component: {
        date,
        value: stringValue,
        name,
      },
    });
  }
};
