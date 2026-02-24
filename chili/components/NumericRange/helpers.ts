/* eslint-disable react/prop-types */

import { isString, isBoolean } from 'lodash';
import type { NumericRangeProps } from './types';

export const getInputNames = (name?: string): [string | undefined, string | undefined] => {
  if (isString(name)) return [`${name}-from`, `${name}-to`];
  return [undefined, undefined];
};

export const getPlaceholder = (placeholder?: string | [string | undefined, string | undefined]): [string | undefined, string | undefined] => {
  if (Array.isArray(placeholder)) return placeholder;
  if (isString(placeholder)) return [placeholder, placeholder];
  return [undefined, undefined];
};

export const getRequired = (isRequired?: boolean | [boolean, boolean]): [boolean, boolean] => {
  if (Array.isArray(isRequired)) return isRequired;
  if (isBoolean(isRequired)) return [isRequired, isRequired];
  return [false, false];
};

export const getDisabled = (isDisabled?: boolean | [boolean, boolean]): [boolean, boolean] => {
  if (Array.isArray(isDisabled)) return isDisabled;
  if (isBoolean(isDisabled)) return [isDisabled, isDisabled];
  return [false, false];
};

export const getControlledValue = (value: NumericRangeProps['value']): [number | null, number | null] | undefined => {
  if (value === undefined) return undefined;

  if (value === null) return [null, null];

  return value;
};

export const getDefaultValue = (value: NumericRangeProps['defaultValue']): [number | null, number | null] | undefined => {
  if (value === undefined) return undefined;

  if (value === null) return [null, null];

  return value;
};
