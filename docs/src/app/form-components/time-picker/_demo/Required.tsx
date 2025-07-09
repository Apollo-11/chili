import * as L from '@chili';
import { Live } from '@/components/live';
import { log } from '@/utils';

export const Required = () => (
  <div>
    <Live scope={{ L, log }}>
      {
          `
() => {
  return (
    <>
      <L.TimePicker
        form="time-picker-form"
        name="time-picker"
        isRequired
        requiredMessage="Please set time"
        _mb-6
        _w-48
      />

      <L.Button
        form="time-picker-form"
        onClick={({ form }) => {
          const formData = form['time-picker-form']
          log(formData)
        }}
      >
        Submit
      </L.Button>
    </>
  )
}
  `
        }
    </Live>
  </div>
);
