import { isFunction } from 'lodash';
import type { SetState } from '../../commonTypes';
import type { BlurEvent as NumericTextBoxBlurEvent, ChangeEvent } from '../NumericTextBox/types';
import { formatValue } from '../NumericTextBox/helpers';
import type { NumericRangeProps, NumericRangeState } from './types';

export const createNumericChangeHandler = ({
  value,
  setValue,
  name,
  format = '#',
  thousandsSeparator = ' ',
  onChange,
}: {
  value: NumericRangeState['value'],
  setValue: SetState<NumericRangeState['value']>,
  name?: string | [string | undefined, string | undefined],
  onChange: NumericRangeProps['onChange'],
  format?: string,
  thousandsSeparator?: string,
}) => (type: 'from' | 'to') => (ev: ChangeEvent) => {
  const newValue = (() => {
    if (type === 'from') return [ev.component.value, value[1]] as [number | null, number | null];
    if (type === 'to') return [value[0], ev.component.value] as [number | null, number | null];
    return [null, null] as [number | null, number | null];
  })();

  setValue(newValue); // won't cause any effects if props.value is present

  const customEvent = {
    ...ev,
    component: {
      value: newValue,
      name,
      formattedValue: [formatValue(
        {
          value: newValue[0],
          format,
          thousandsSeparator,
        },
      ),
      formatValue({
        value: newValue[1],
        format,
        thousandsSeparator,
      })] as [string, string],
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
  name?: string | [string | undefined, string | undefined],
  onBlur?: NumericRangeProps['onBlur'],
  shouldTrimTrailingZeros?: boolean,
  thousandsSeparator?: string,
  value: NumericRangeState['value'],
}) => (type: 'from' | 'to') => (event: NumericTextBoxBlurEvent) => {
  const newValue = (() => {
    if (type === 'from') return [event.component.value, value[1]] as [number | null, number | null];
    if (type === 'to') return [value[0], event.component.value] as [number | null, number | null];
    return [null, null] as [number | null, number | null];
  })();

  onBlur?.({
    ...event,
    component: {
      formattedValue: [formatValue(
        {
          value: newValue[0],
          format,
          shouldTrimTrailingZeros,
          thousandsSeparator,
        },
      ),
      formatValue(
        {
          value: newValue[1],
          format,
          shouldTrimTrailingZeros,
          thousandsSeparator,
        },
      )] as [string, string],
      isValid: event.component.isValid,
      name,
      value: newValue,
    },
  });
};
