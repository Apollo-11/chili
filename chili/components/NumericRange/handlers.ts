import { isFunction } from 'lodash';
import type { SetState } from '../../commonTypes';
import type {
  BlurEvent as NumericTextBoxBlurEvent,
  ChangeEvent,
  EnterPressEvent as NumericTextBoxEnterPressEvent,
  FocusEvent as NumericTextBoxFocusEvent,
} from '../NumericTextBox/types';
import { formatValue } from '../NumericTextBox/helpers';
import type { NumericRangeProps, NumericRangeState } from './types';

const getRangeValue = (
  type: 'from' | 'to',
  fieldValue: number | null,
  value: NumericRangeState['value'],
): [number | null, number | null] => {
  if (type === 'from') return [fieldValue, value[1]];
  if (type === 'to') return [value[0], fieldValue];
  return [null, null];
};

const getRangeFormattedValue = ({
  format,
  shouldTrimTrailingZeros,
  thousandsSeparator,
  value,
}: {
  format: string,
  shouldTrimTrailingZeros?: boolean,
  thousandsSeparator: string,
  value: NumericRangeState['value'],
}): [string, string] => [formatValue(
  {
    value: value[0],
    format,
    shouldTrimTrailingZeros,
    thousandsSeparator,
  },
),
formatValue(
  {
    value: value[1],
    format,
    shouldTrimTrailingZeros,
    thousandsSeparator,
  },
)];

export const createNumericChangeHandler = ({
  name,
  value,
  setValue,
  format = '#',
  thousandsSeparator = ' ',
  onChange,
}: {
  name?: string,
  value: NumericRangeState['value'],
  setValue: SetState<NumericRangeState['value']>,
  onChange: NumericRangeProps['onChange'],
  format?: string,
  thousandsSeparator?: string,
}) => (type: 'from' | 'to') => (ev: ChangeEvent) => {
  const newValue = getRangeValue(type, ev.component.value, value);

  setValue(newValue); // won't cause any effects if props.value is present

  const customEvent = {
    ...ev,
    component: {
      formattedValue: getRangeFormattedValue({
        value: newValue,
        format,
        thousandsSeparator,
      }),
      name,
      value: newValue,
    },
  };

  if (isFunction(onChange)) {
    onChange(customEvent);
  }
};

export const createNumericBlurHandler = ({
  format = '#',
  name,
  onBlur,
  shouldTrimTrailingZeros,
  thousandsSeparator = ' ',
  value,
}: {
  format?: string,
  name?: string,
  onBlur?: NumericRangeProps['onBlur'],
  shouldTrimTrailingZeros?: boolean,
  thousandsSeparator?: string,
  value: NumericRangeState['value'],
}) => (type: 'from' | 'to') => (event: NumericTextBoxBlurEvent) => {
  const newValue = getRangeValue(type, event.component.value, value);

  onBlur?.({
    ...event,
    component: {
      formattedValue: getRangeFormattedValue({
        value: newValue,
        format,
        shouldTrimTrailingZeros,
        thousandsSeparator,
      }),
      isValid: event.component.isValid,
      name,
      value: newValue,
    },
  });
};

export const createNumericEnterPressHandler = ({
  name,
  onEnterPress,
  value,
}: {
  name?: string,
  onEnterPress?: NumericRangeProps['onEnterPress'],
  value: NumericRangeState['value'],
}) => (type: 'from' | 'to') => (event: NumericTextBoxEnterPressEvent) => {
  const newValue = getRangeValue(type, event.component.value, value);

  onEnterPress?.({
    ...event,
    component: {
      name,
      value: newValue,
    },
  });
};

export const createNumericFocusHandler = ({
  format = '#',
  name,
  onFocus,
  shouldTrimTrailingZeros,
  thousandsSeparator = ' ',
  value,
}: {
  format?: string,
  name?: string,
  onFocus?: NumericRangeProps['onFocus'],
  shouldTrimTrailingZeros?: boolean,
  thousandsSeparator?: string,
  value: NumericRangeState['value'],
}) => (type: 'from' | 'to') => (event: NumericTextBoxFocusEvent) => {
  const newValue = getRangeValue(type, event.component.value, value);

  onFocus?.({
    ...event,
    component: {
      formattedValue: getRangeFormattedValue({
        value: newValue,
        format,
        shouldTrimTrailingZeros,
        thousandsSeparator,
      }),
      name,
      value: newValue,
    },
  });
};
