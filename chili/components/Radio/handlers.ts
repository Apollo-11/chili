import type { SetState } from '../../commonTypes';
import type { RadioGroupProps } from './types';

export const createResetHandler = (
  props: RadioGroupProps,
  setValue: SetState<string | number | null | undefined>,
  defaultValue?: string | number | null,
) => () => {
  const newValue = defaultValue ?? null;
  setValue(newValue);

  props.onChange?.({
    component: {
      name: props.name,
      value: newValue,
    },
  });
};

export const createSetValueHandler = (
  props: RadioGroupProps,
  setValue: SetState<string | number | null | undefined>,
) => (value: unknown) => {
  const newValue = value as string | number | null;
  setValue(newValue);

  props.onChange?.({
    component: {
      name: props.name,
      value: newValue,
    },
  });
};
