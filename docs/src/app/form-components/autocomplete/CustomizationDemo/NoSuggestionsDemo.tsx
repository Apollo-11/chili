'use client';

import * as L from '@chili';
import { Live } from '@/components/live';

export const NoSuggestionsDemo = () => (
  <Live scope={{ L }}>
    {`
<L.AutoComplete
  noSuggestionsRender={({ elementProps }) => (
    <div {...elementProps}>
      <div className='text-amber-400 font-bold'>
        no suggestions found
      </div>
    </div>
  )}
  data={['Argentina', 'Spain']}
  onChange={({ component }) => console.log(component.value)}
  _w-48
/>
    `}
  </Live>
);
