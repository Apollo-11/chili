import * as L from '@chili';
import { DatesLive } from '@/components/live/DatesLive';
import { log } from '@/utils';

export const DefaultValue = () => (
  <div>
    <DatesLive scope={{ L, log }}>
      {
          `
() => {
  return (
    <>
    <L.DatePicker
      defaultValue={new Date()}
      onChange={({ component }) => {
        log(component.value)
      }}
      form="date-picker-default-value"
      name="date-field"
      _w-48
      _mb-4
    />
    <L.Button
      onClick={() => console.log(L.form('date-picker-default-value', 'date-field').reset())}
    >
      reset
    </L.Button>
    </>
  )
}
  `
        }
    </DatesLive>
  </div>
);
