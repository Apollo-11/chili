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
    <L.DateTimePicker
      defaultValue={new Date()}
      onChange={({ component }) => {
        log(component.value);
      }}
      form="date-time-picker-default-value"
      name="date-field"
      _w-48
      _mb-4
    />
    <L.Button
      onClick={() => console.log(L.form('date-time-picker-default-value', 'date-field').reset())}
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
