'use client';

import * as L from '@chili';
import React from 'react';
import { Live } from '@/components/live';

export const CasingDemo = () => (
  <Live scope={{ L }}>
    {`
() => {
  return (
    <L.AutoComplete
      data={['Argentina', 'chile', 'spain']}
      letterCase='lower'
      capitalizeFirstLetter
      onChange={({ component }) => console.log(component.value)}
      _w-56
    />
  )
}`}
  </Live>
);

