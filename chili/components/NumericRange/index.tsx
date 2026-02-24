'use client';

import * as React from 'react';
import { isNil } from 'lodash';
import { COMPONENTS_NAMESPACES } from '../../constants';
import {
  getClassNames, useElement, useProps, useTheme, useValue,
} from '../../utils';
import { Div } from '../Div';
import { NumericTextBox } from '../NumericTextBox';
import {
  createNumericBlurHandler,
  createNumericChangeHandler,
  createNumericEnterPressHandler,
  createNumericFocusHandler,
} from './handlers';
import {
  getPlaceholder, getRequired, getDisabled, getControlledValue, getInputNames, getDefaultValue,
} from './helpers';
import type { NumericRangeProps, NumericRangeState } from './types';

export const NumericRange = React.forwardRef((props: NumericRangeProps, ref?: React.Ref<HTMLElement>): React.ReactElement => {
  const {
    className,
    defaultValue: defaultValueProp,
    form,
    format,
    inputsRender,
    isDisabled,
    isRequired: isRequiredProp,
    isValid,
    max,
    min,
    name: nameProp,
    onBlur,
    onChange,
    onEnterPress,
    onFocus,
    placeholder: placeholderProp,
    shouldTrimTrailingZeros,
    step,
    theme: themeProp,
    thousandsSeparator,
    value: valueProp,
    wrapperRender,
    ...restProps
  } = useProps(props);
  // returns value from props or from state, setUncontrolledState works only in uncontrolled mode
  const [value, setUncontrolledValue] = useValue<NumericRangeState['value']>(
    getControlledValue(valueProp),
    getDefaultValue(defaultValueProp) ?? [null, null],
  );

  const theme = useTheme(themeProp, COMPONENTS_NAMESPACES.numericRange);

  const placeholder = getPlaceholder(placeholderProp);

  const required = getRequired(isRequiredProp);

  const disabled = getDisabled(isDisabled);
  const inputNames = getInputNames(nameProp);

  const commonProps = {
    form,
    format,
    isValid,
    shouldTrimTrailingZeros,
    step,
    thousandsSeparator,
  };

  const handleChange = createNumericChangeHandler({
    name: nameProp,
    value,
    setValue: setUncontrolledValue,
    onChange,
    format,
    thousandsSeparator,
  });
  const handleBlur = createNumericBlurHandler({
    name: nameProp,
    value,
    onBlur,
    format,
    thousandsSeparator,
    shouldTrimTrailingZeros,
  });
  const handleEnterPress = createNumericEnterPressHandler({
    name: nameProp,
    value,
    onEnterPress,
  });
  const handleFocus = createNumericFocusHandler({
    name: nameProp,
    value,
    onFocus,
    format,
    thousandsSeparator,
    shouldTrimTrailingZeros,
  });

  const wrapperClassNames = getClassNames(
    theme.wrapper,
    className,
  );

  const Wrapper = useElement(
    'Wrapper',
    Div,
    wrapperRender,
    props,
    { value },
  );

  return (
    <Wrapper
      {...restProps}
      className={wrapperClassNames}
      ref={ref}
    >
      <NumericTextBox
        inputRender={Array.isArray(inputsRender) ? inputsRender[0] : undefined}
        isDisabled={disabled[0]}
        isRequired={required[0]}
        max={isNil(value[1]) ? max : value[1]}
        min={min}
        name={inputNames[0]}
        onBlur={handleBlur('from')}
        onChange={handleChange('from')}
        onEnterPress={handleEnterPress('from')}
        onFocus={handleFocus('from')}
        placeholder={placeholder[0]}
        theme={theme.to}
        value={value[0]}
        {...commonProps}
      />
      <Div className={theme.delimiter}>&mdash;</Div>
      <NumericTextBox
        inputRender={Array.isArray(inputsRender) ? inputsRender[1] : undefined}
        isDisabled={disabled[1]}
        isRequired={required[1]}
        max={max}
        min={isNil(value[0]) ? min : value[0]}
        name={inputNames[1]}
        onBlur={handleBlur('to')}
        onChange={handleChange('to')}
        onEnterPress={handleEnterPress('to')}
        onFocus={handleFocus('to')}
        placeholder={placeholder[1]}
        theme={theme.from}
        value={value[1]}
        {...commonProps}
      />
    </Wrapper>
  );
}) as React.FC<NumericRangeProps>;

NumericRange.displayName = 'NumericRange';
