import * as L from '@chili';
import { DatesLive } from '@/components/live/DatesLive';
import { log } from '@/utils';

export const Controlled = () => (
  <div>
    <DatesLive scope={{ L, log }}>
      {
          `
() => {

  const [value, setValue] = React.useState()

  return (
    <L.DateRange
      value={value}
      onChange={({ component }) => {
        setValue(value)
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
