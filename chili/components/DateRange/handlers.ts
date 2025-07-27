import { isFunction } from 'lodash';
import type { SetState } from '../../commonTypes';
import type { DateRangeProps, CustomRangeEvent } from './types';

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
