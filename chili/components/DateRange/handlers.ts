import { isFunction } from 'lodash';
import { stringToDate, formatDateTime } from '../../src/DateTimeInput/helpers';
import type { SetState } from '../../commonTypes';
import type { DateRangeProps } from './types';
import type {
  CustomRangeEvent,
} from '../../src/DateTimeInputRange/types';

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
) => (): void => {
  const { defaultValue = [null, null], format = 'dd.MM.yyyy', onChange, value, name } = props;

  const date: [Date | null, Date | null] = [
    typeof defaultValue[0] === 'string' ? stringToDate(defaultValue[0], format) : defaultValue[0],
    typeof defaultValue[1] === 'string' ? stringToDate(defaultValue[1], format) : defaultValue[1],
  ];

  const stringValue: [string, string] = [
    formatDateTime(date[0], format),
    formatDateTime(date[1], format),
  ];

  if (value === undefined) {
    setUncontrolledValue(date as DateRangeProps['value']);
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
