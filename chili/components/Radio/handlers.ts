import type { SetState } from '../../commonTypes';
import type { RadioGroupProps } from './types';

export const createResetHandler = (
  props: RadioGroupProps,
  setValue: SetState<string | number | null | undefined>,
  defaultValue?: string | number | null,
) => (value?: unknown) => {
  const newValue = value !== undefined ? value as string | number | null : (defaultValue ?? null);
  if (props.value === undefined) {
    setValue(newValue);
  }

  props.onChange?.({
    component: {
      name: props.name,
      value: newValue,
    },
  });
};
