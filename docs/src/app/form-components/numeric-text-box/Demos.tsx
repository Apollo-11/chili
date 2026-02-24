import * as L from '@chili';
import { Live } from '@/components/live';
import { Section } from '@/components/typography';

export const Demos = () => (
  <Section>
    <Live scope={{ L }}>
      {`
<L.NumericTextBox
  format='#.# humans'
  hasStepper
  onChange={({ component }) => console.log(component.value)}
  _w-48
/>
`}
    </Live>
  </Section>
);
