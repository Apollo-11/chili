'use client';

import * as React from 'react';
import { DateTimeInput } from '../../src/DateTimeInput';
import { COMPONENT_TYPES } from '../../src/DateTimeInput/constants';
import { useProps, useValue } from '../../utils';
import type { DateTimePickerProps } from './types';
import { createChangeHandler } from './handlers';

export const DateTimePicker = React.forwardRef((rawProps: DateTimePickerProps, ref: React.Ref<HTMLElement>) => {
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
      format={props.format || 'dd.MM.yyyy hh:mm'}
      defaultValue={defaultValue}
      onChange={handleChange}
      ref={ref}
      type={COMPONENT_TYPES.DATE_TIME}
      {...(valueProp !== undefined ? { value } : {})}
    />
  );
}) as React.FC<DateTimePickerProps>;

DateTimePicker.displayName = 'DateTimePicker';
