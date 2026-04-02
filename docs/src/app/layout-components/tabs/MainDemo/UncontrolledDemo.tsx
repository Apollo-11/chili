'use client';

import * as L from '@chili';
import { Live } from '@/components/live';

export const UncontrolledDemo = () => (
  <Live scope={{ L }}>
    {`
<L.Tabs>
  <L.Tab title={'Tab 1'} tabKey={0}>
    <div className='p-4'>Tab 1 content</div>
  </L.Tab>
  <L.Tab title={'Tab 2'} tabKey={1}>
    <div className='p-4'>Tab 2 content</div>
  </L.Tab>
  <L.Tab title={'Tab 3'} tabKey={2}>
    <div className='p-4'>Tab 3 content</div>
  </L.Tab>
</L.Tabs>
    `}
  </Live>
);
