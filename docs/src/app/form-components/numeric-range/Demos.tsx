'use client';

import * as L from '@chili';
import * as React from 'react';
import { Live } from '@/components/live';
import { Section } from '@/components/typography';

export const Demos = () => {
  const [selected, setSelected] = React.useState<string | number>(0);

  return (
    <Section>
      <L.Tabs
        activeTabKey={selected}
        onChange={(ev) => setSelected(ev.component.value)}
        _my-6
      >
        <L.Tab title="Uncontrolled" tabKey={0}>
          <Live scope={{ L }}>
            {`
<L.NumericRange
  defaultValue={[1, 10]}
  format='#.# robots'
  hasStepper
  onBlur={({ component }) => console.log('blur', component.value)}
  onChange={({ component }) => console.log('change', component.value)}
  onEnterPress={({ component }) => console.log('enter', component.value)}
  onFocus={({ component }) => console.log('focus', component.value)}
  _w-96
/>
`}
          </Live>
        </L.Tab>
        <L.Tab title="Controlled" tabKey={1}>
          <Live scope={{ L, React }}>
            {`
() => {
  const [value, setValue] = React.useState([1, 10]);

  return (
    <L.NumericRange
      value={value}
      format='#.# robots'
      hasStepper
      onBlur={({ component }) => console.log('blur', component.value)}
      onChange={({ component }) => {
        console.log('change', component.value);
        setValue(component.value);
      }}
      onEnterPress={({ component }) => console.log('enter', component.value)}
      onFocus={({ component }) => console.log('focus', component.value)}
      _w-96
    />
  );
}
`}
          </Live>
        </L.Tab>
      </L.Tabs>
    </Section>
  );
};
