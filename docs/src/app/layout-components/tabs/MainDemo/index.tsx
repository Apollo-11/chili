'use client';

import * as L from '@chili';
import React from 'react';
import { ControlledDemo } from './ControlledDemo';
import { UncontrolledDemo } from './UncontrolledDemo';

export const MainDemo = () => {
  const [selected, setSelected] = React.useState<string | number>(0);

  return (
    <L.Tabs
      activeTabKey={selected}
      onChange={(ev) => setSelected(ev.component.value)}
      _my-6
    >
      <L.Tab title="Controlled" tabKey={0}>
        <ControlledDemo />
      </L.Tab>
      <L.Tab title="Uncontrolled" tabKey={1}>
        <UncontrolledDemo />
      </L.Tab>
    </L.Tabs>
  );
};
