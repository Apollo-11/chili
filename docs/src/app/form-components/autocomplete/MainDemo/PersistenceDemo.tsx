'use client';

import * as L from '@chili';
import { Live } from '@/components/live';

export const PersistenceDemo = () => (
  <Live scope={{ L }}>
    {`
() => (
  <L.AutoComplete
    data={['Argentina', 'Spain']}
    form='ac_persist'
    name='country'
    persistence={L.ValidationTypes.Persistence.localStorage}
    _w-48
  />
)
    `}
  </Live>
);
