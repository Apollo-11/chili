import * as L from '@chili';
import { Live } from '@/components/live';
import { Section } from '@/components/typography';

export const Demos = () => (
  <Section>
    <Live scope={{ L }}>
      {`
<L.NumericRange
  format='#.# robots'
  onBlur={({ component }) => console.log('blur', component.value)}
  onChange={({ component }) => console.log('change', component.value)}
  onEnterPress={({ component }) => console.log('enter', component.value)}
  onFocus={({ component }) => console.log('focus', component.value)}
  _w-96
/>
`}
    </Live>
  </Section>
);
