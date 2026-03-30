'use client';

import * as L from '@chili';
import React from 'react';
import { NoSuggestionsDemo } from './NoSuggestionsDemo';
import { ItemRenderDemo } from './ItemRenderDemo';

export const CustomizationDemo = () => {
  const [selected, setSelected] = React.useState<string | number>(0);

  return (
    <L.Tabs
      activeTabKey={selected}
      onChange={(ev) => setSelected(ev.component.value)}
      _my-6
    >
      <L.Tab title="No suggestions" tabKey={0}>
        <NoSuggestionsDemo />
      </L.Tab>
      <L.Tab title="Item render" tabKey={1}>
        <ItemRenderDemo />
      </L.Tab>
    </L.Tabs>
  );
};
