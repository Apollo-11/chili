'use client';

/* eslint-disable react/prop-types */
import * as React from 'react';
import { DateTimeInputRange } from '../../src/DateTimeInputRange';
import { COMPONENT_TYPES } from '../../src/DateTimeInput/constants';
import { useProps, useValue } from '../../utils';
import type { DateTimeRangeProps } from './types';
import { createChangeHandler } from './handlers';

export const DateTimeRange = React.forwardRef((rawProps: DateTimeRangeProps, ref: React.Ref<HTMLElement>) => {
  const props = useProps(rawProps);

  const {
    defaultValue = [null, null],
    value: valueProp,
    ...restProps
  } = props;

  const [value, setUncontrolledValue] = useValue<DateTimeRangeProps['value']>(valueProp, defaultValue);

  const handleChange = createChangeHandler(props, setUncontrolledValue);

  return (
    <DateTimeInputRange
      {...restProps}
      type={COMPONENT_TYPES.DATE_TIME}
      format={props.format || 'dd.MM.yyyy hh:mm'}
      defaultValue={defaultValue}
      value={value}
      onChange={handleChange}
      ref={ref}
    />
  );
}) as React.FC<DateTimeRangeProps>;

DateTimeRange.displayName = 'DateTimeRange';
