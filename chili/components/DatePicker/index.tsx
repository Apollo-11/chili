'use client';

import * as React from 'react';
import { DateTimeInput } from '../../src/DateTimeInput';
import { COMPONENT_TYPES } from '../../src/DateTimeInput/constants';
import type { DatePickerProps } from './types';
import { useValue, useProps } from '../../utils';
import { createChangeHandler } from './handlers';

export const DatePicker = React.forwardRef((rawProps: DatePickerProps, ref: React.Ref<HTMLElement>) => {
  const props = useProps(rawProps);

  const {
    defaultValue = null,
    value: valueProp,
    ...restProps
  } = props;

  const [value, setUncontrolledValue] = useValue<string | Date | null>(valueProp, defaultValue);

  const handleChange = createChangeHandler(props, setUncontrolledValue);

  return (
    <DateTimeInput
      {...restProps}
      value={value}
      onChange={handleChange}
      format={props.format || 'dd.MM.yyyy'}
      type={COMPONENT_TYPES.DATE_ONLY}
      ref={ref}
    />
  );
}) as React.FC<DatePickerProps>;

DatePicker.displayName = 'DatePicker';
