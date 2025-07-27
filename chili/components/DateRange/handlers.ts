import { isFunction } from 'lodash';
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
