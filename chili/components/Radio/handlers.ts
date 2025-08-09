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
) => (value: string | number | null | undefined) => {
  setValue(value);

  props.onChange?.({
    component: {
      name: props.name,
      value,
    },
  } as any);
};
