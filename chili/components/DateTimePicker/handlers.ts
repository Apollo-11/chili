import { isFunction } from 'lodash';
import type { SetState } from '../../commonTypes';
import type { DateTimePickerProps } from './types';
import type {
  ChangeEvent,
} from '../../src/DateTimeInput/types';

export const createChangeHandler = (
  props: DateTimePickerProps,
  setUncontrolledValue: SetState<string | Date | null>,
) => (ev: ChangeEvent): void => {
  const { onChange, value } = props;

  if (value === undefined) {
    setUncontrolledValue(ev.component.date ?? ev.component.value);
  }

  if (isFunction(onChange)) onChange(ev);
};
