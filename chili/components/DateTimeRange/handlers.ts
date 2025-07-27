import { isFunction } from 'lodash';
import type { SetState } from '../../commonTypes';
import type { DateTimeRangeProps } from './types';
import type {
  CustomRangeEvent,
} from '../../src/DateTimeInputRange/types';
import { stringToDate, formatDateTime } from '../../src/DateTimeInput/helpers';

export const createChangeHandler = (
  props: DateTimeRangeProps,
  setUncontrolledValue: SetState<DateTimeRangeProps['value']>,
) => (ev: CustomRangeEvent): void => {
  const { onChange, value } = props;

  if (value === undefined) {
    setUncontrolledValue(ev.component.date);
  }

  if (isFunction(onChange)) onChange(ev);
};

export const createResetHandler = (
  props: DateTimeRangeProps,
  setUncontrolledValue: SetState<DateTimeRangeProps['value']>,
) => (): void => {
  const { defaultValue = [null, null], format = 'dd.MM.yyyy hh:mm', onChange, value, name } = props;

  const date: [Date | null, Date | null] = [
    typeof defaultValue[0] === 'string' ? stringToDate(defaultValue[0], format) : defaultValue[0],
    typeof defaultValue[1] === 'string' ? stringToDate(defaultValue[1], format) : defaultValue[1],
  ];

  const stringValue: [string, string] = [
    formatDateTime(date[0], format),
    formatDateTime(date[1], format),
  ];

  if (value === undefined) {
    setUncontrolledValue(date as DateTimeRangeProps['value']);
  }

  if (isFunction(onChange)) {
    onChange({
      component: {
        date,
        value: stringValue,
        name,
      },
    } as unknown as CustomRangeEvent);
  }
};
