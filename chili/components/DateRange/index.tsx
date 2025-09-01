'use client';

import * as React from 'react';
import { COMPONENT_TYPES } from '../../src/DateTimeInput/constants';
import { DateTimeInputRange } from '../../src/DateTimeInputRange';
import { useProps, useValue } from '../../utils';
import type { DateRangeProps } from './types';
import { createChangeHandler } from './handlers';

export const DateRange = React.forwardRef((rawProps: DateRangeProps, ref: React.Ref<HTMLElement>) => {
  const props = useProps(rawProps);

  const {
    defaultValue = [null, null],
    value: valueProp,
    ...restProps
  } = props;

  const [value, setUncontrolledValue] = useValue<DateRangeProps['value']>(valueProp, defaultValue);

  const handleChange = createChangeHandler(props, setUncontrolledValue);

  return (
    <DateTimeInputRange
      {...restProps}
      type={COMPONENT_TYPES.DATE_ONLY}
      format={props.format || 'dd.MM.yyyy'}
      defaultValue={defaultValue}
      onChange={handleChange}
      ref={ref}
      {...(valueProp !== undefined ? { value } : {})}
    />
  );
}) as React.FC<DateRangeProps>;

DateRange.displayName = 'DateRange';
