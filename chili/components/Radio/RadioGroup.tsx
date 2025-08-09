import React from 'react';
import { isFunction, isBoolean } from 'lodash';
import { RadioButton } from './RadioButton';
import {
  getClassNames, useTheme, useElement, useProps, useValue,
} from '../../utils';
import { Div } from '../Div';
import { COMPONENTS_NAMESPACES } from '../../constants';
import type {
  ChangeEvent,
  RadioButtonProps,
  PropsFromParent,
  RadioGroupProps,
  WrapperProps,
} from './types';
import { createResetHandler, createSetValueHandler } from './handlers';
import { useValidation } from '../Validation';

export const RadioGroup = React.forwardRef((props: RadioGroupProps, ref?: React.Ref<HTMLElement>): React.ReactElement => {
  const {
    children,
    className,
    defaultValue,
    name,
    onChange,
    value: valueProp,
    wrapperRender,
    isDisabled,
  } = useProps(props);

  const theme = useTheme(props.theme, COMPONENTS_NAMESPACES.radio);

  const [value, setValueState] = useValue<string | number | null | undefined>(
    valueProp,
    defaultValue ?? null,
  );

  const { isValid, InvalidMessage } = useValidation(props, {
    value,
  }, {
    reset: createResetHandler(props, setValueState, defaultValue),
    setValue: createSetValueHandler(props, setValueState),
  });

  const combinedClassNames = getClassNames(
    theme.wrapper,
    className,
  );

  const handleChange = React.useCallback((ev: ChangeEvent) => {
    if (isFunction(onChange)) onChange(ev);

    return setValueState(ev.component.value);
  }, [onChange]);

  const Wrapper = useElement<RadioGroupProps, { value?: string | number | null }, WrapperProps>(
    'Wrapper',
    Div,
    wrapperRender,
    props,
    { value },
  );

  return (
    <Wrapper
      className={combinedClassNames}
      ref={ref}
    >
      {React.Children.toArray(children).map((child) => {
        if (
          child
          && React.isValidElement(child)
          && (child.type === RadioButton || (child.type as { name?: string }).name === 'RadioButton')
        ) {
          const radioButtonChild = child as React.ReactElement<RadioButtonProps & PropsFromParent>;
          return React.cloneElement(radioButtonChild, {
            name,
            onChange: handleChange,
            isDisabled: isBoolean(isDisabled) ? isDisabled : radioButtonChild.props.isDisabled,
            isChecked: radioButtonChild.props.value === value,
            theme: { ...theme, ...radioButtonChild.props.theme },
          });
        }
        return child;
      })}
      {!isValid && <InvalidMessage />}
    </Wrapper>
  );
}) as React.FC<RadioGroupProps>;

RadioGroup.displayName = 'RadioGroup';
