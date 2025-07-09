import * as L from '@chili';
import { Live } from '@/components/live';
import { log } from '@/utils';

export const Uncontrolled = () => (
  <div>
    <Live scope={{ L, log }}>
      {
          `
() => {
  return (
    <L.TimeRange
      onChange={({ component }) => {
        log(component.value)
      }}
      _w-96
    />
  )
}
  `
        }
    </Live>
  </div>
);
