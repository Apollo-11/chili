import { isFunction } from 'lodash';
import type { SetState } from '../../commonTypes';
import type { DateTimeRangeProps, CustomRangeEvent } from './types';

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
