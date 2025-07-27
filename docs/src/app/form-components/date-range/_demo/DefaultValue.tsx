import * as L from '@chili';
import { DatesLive } from '@/components/live/DatesLive';
import { log } from '@/utils';

export const DefaultValue = () => (
  <div>
    <DatesLive scope={{ L, log }}>
      {`
() => {
  return (
    <>
    <L.DateRange
      defaultValue={[new Date(), new Date()]}
      onChange={({ component }) => {
        log(component.value);
      }}
      form="date-range-default-value"
      name="date-range"
      _w-96
      _mb-4
    />
    <L.Button
      onClick={() => console.log(L.form('date-range-default-value', 'date-range').reset())}
    >
      reset
    </L.Button>
    </>
  )
}
        `}
    </DatesLive>
  </div>
);
