import { isFunction } from 'lodash';
import type { SetState } from '../../commonTypes';
import type { DatePickerProps, ChangeEvent } from './types';

export const createChangeHandler = (
  props: DatePickerProps,
  setUncontrolledValue: SetState<string | Date | null>,
) => (ev: ChangeEvent): void => {
  const { onChange, value } = props;

  if (value === undefined) {
    setUncontrolledValue(ev.component.date ?? ev.component.value);
  }

  if (isFunction(onChange)) onChange(ev);
};
