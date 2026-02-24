import type * as React from 'react';
import type { CustomRender } from '../../commonTypes';
import type { COMPONENTS_NAMESPACES } from '../../constants';
import type { PartialGlobalDefaultTheme } from '../../utils/useTheme';
import type { NumericTextBoxProps } from '../NumericTextBox/types';
import type { DivProps } from '../Div';

export interface LabelProps {
  className?: string,
  children?: React.ReactNode,
}

export interface NumericRangeState {
  value: [number | null, number | null],
}

export interface NumericRangeBlurEvent extends React.FocusEvent<HTMLInputElement> {
  component: {
    formattedValue: [string, string],
    isValid?: boolean,
    name?: string,
    value: [number | null, number | null],
  },
}

export interface NumericRangeChangeEvent {
  component: {
    formattedValue: [string, string],
    name?: string,
    value: [number | null, number | null],
  },
}

export interface NumericRangeEnterPressEvent extends React.KeyboardEvent<HTMLInputElement> {
  component: {
    name?: string,
    value: [number | null, number | null],
  },
}

export interface NumericRangeFocusEvent extends React.FocusEvent<HTMLInputElement> {
  component: {
    formattedValue: [string, string],
    name?: string,
    value: [number | null, number | null],
  },
}

export interface NumericRangeProps {
  /** CSS class names */
  className?: string,
  /** Format, see formatting.md */
  format?: string,
  /** Form name, is required for validation */
  form?: string,
  /** Input fields customizators, [render, render] */
  inputsRender?: [NumericTextBoxProps['inputRender'] | null, NumericTextBoxProps['inputRender'] | null],
  /** Disabled state */
  isDisabled?: boolean | [boolean, boolean],
  /** Shows if the field is required  */
  isRequired?: boolean | [boolean, boolean],
  /** Control valid state */
  isValid?: boolean,
  /** Max range value */
  max?: number,
  /** Min range value */
  min?: number,
  /** Numeric name */
  name?: string,
  /** Change handler */
  onChange?: (event: NumericRangeChangeEvent) => void,
  /** Blur handler */
  onBlur?: (event: NumericRangeBlurEvent) => void,
  /** Enter press handler */
  onEnterPress?: (event: NumericRangeEnterPressEvent) => void,
  /** Focus handler */
  onFocus?: (event: NumericRangeFocusEvent) => void,
  /** Placeholders */
  placeholder?: [string | undefined, string | undefined] | string,
  /** Ref */
  ref?: React.Ref<HTMLElement>,
  /** To trim or not to trim */
  shouldTrimTrailingZeros?: boolean,
  /** How much the value is increased/decreased on mouse events */
  step?: number,
  /** A space by default: 1 000 000.00 */
  thousandsSeparator?: string,
  /** Theme */
  theme?: PartialGlobalDefaultTheme[typeof COMPONENTS_NAMESPACES.numericRange],
  /** Values */
  value?: [number | null, number | null] | null,
  /** Wrapper customizator */
  wrapperRender?: CustomRender<NumericRangeProps, NumericRangeState, DivProps>,
  /** _css-class-names */
  [x: string]: unknown,
}
