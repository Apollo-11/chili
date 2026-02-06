import * as L from '@chili';
import { Live } from '@/components/live';
import { log } from '@/utils';

export const Grouped = () => (
  <div>
    <Live scope={{ L, log }}>
      {
          `
() => {
  return (
    <L.RadioGroup
      onChange={({ component }) => {
        log(component.value)
      }}
      defaultValue={2}
      _flex
      _gap-4
    >
      <div>
        <L.RadioButton value={1} _mb-1>One</L.RadioButton>
        <L.RadioButton value={2}>Two</L.RadioButton>
      </div>
      <div>
        <L.RadioButton value={3} _mb-1>Three</L.RadioButton>
        <L.RadioButton value={4}>Four</L.RadioButton>
      </div>
    </L.RadioGroup>
  )
}
  `
        }
    </Live>
  </div>
);
