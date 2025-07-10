import * as L from '@chili';
import { DatesLive } from '@/components/live/DatesLive';
import { log } from '@/utils';

export const Uncontrolled = () => (
  <div>
    <DatesLive scope={{ L, log }}>
      {
          `
() => {
  return (
    <L.DateRange
      onChange={({ component }) => {
        log(component.value)
      }}
      _w-96
    />
  )
}
  `
        }
    </DatesLive>
  </div>
);
