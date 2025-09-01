'use client';

import * as L from '@chili';
import { Live } from '@/components/live';
import {
  H1,
  P,
  Ul,
  Li,
  A,
} from '@/components/typography';

const PersistencePage = () => (
  <article>
    <H1>Persistence</H1>
    <P>
      The persistence prop is supported by the following components:
    </P>
    <Ul>
      <Li><A href="/form-components/autocomplete">AutoComplete</A></Li>
      <Li><A href="/form-components/button-group">ButtonGroup</A></Li>
      <Li><A href="/form-components/calendar">Calendar</A></Li>
      <Li><A href="/form-components/check-box">CheckBox</A></Li>
      <Li><A href="/form-components/date-picker">DatePicker</A></Li>
      <Li><A href="/form-components/date-range">DateRange</A></Li>
      <Li><A href="/form-components/date-time-picker">DateTimePicker</A></Li>
      <Li><A href="/form-components/date-time-range">DateTimeRange</A></Li>
      <Li><A href="/form-components/dropdown-select">DropDownSelect</A></Li>
      <Li><A href="/form-components/input">Input</A></Li>
      <Li><A href="/form-components/masked-input">MaskedInput</A></Li>
      <Li><A href="/form-components/multi-select">MultiSelect</A></Li>
      <Li><A href="/form-components/numeric-text-box">NumericTextBox</A></Li>
      <Li><A href="/form-components/numeric-range">NumericRange</A></Li>
      <Li><A href="/form-components/password">Password</A></Li>
      <Li><A href="/form-components/radio">Radio</A></Li>
      <Li><A href="/form-components/rating">Rating</A></Li>
      <Li><A href="/form-components/switcher">Switcher</A></Li>
      <Li><A href="/form-components/textarea">Textarea</A></Li>
      <Li><A href="/form-components/time-picker">TimePicker</A></Li>
      <Li><A href="/form-components/time-range">TimeRange</A></Li>
    </Ul>
    <Live scope={{ L }}>
      {`
() => {
  return (
    <>
      <L.AutoComplete
        form='persist'
        name='auto'
        data={['Argentina', 'Spain']}
        persistence={L.ValidationTypes.Persistence.localStorage}
        _mb-4
        _w-48
      />
      <L.ButtonGroup
        form='persist'
        name='buttonGroup'
        data={['One', 'Two']}
        persistence={L.ValidationTypes.Persistence.localStorage}
        _mb-4
      />
      <L.Calendar
        form='persist'
        name='calendar'
        persistence={L.ValidationTypes.Persistence.localStorage}
        _mb-4
      />
      <L.CheckBox
        form='persist'
        name='check'
        persistence={L.ValidationTypes.Persistence.localStorage}
        _mb-4
        _w-48
      >
        Agree
      </L.CheckBox>
      <L.DatePicker
        form='persist'
        name='datePicker'
        persistence={L.ValidationTypes.Persistence.localStorage}
        _mb-4
        _w-48
      />
      <L.DateRange
        form='persist'
        name='dateRange'
        persistence={L.ValidationTypes.Persistence.localStorage}
        _mb-4
        _w-96
      />
      <L.DateTimePicker
        form='persist'
        name='dateTimePicker'
        persistence={L.ValidationTypes.Persistence.localStorage}
        _mb-4
        _w-48
      />
      <L.DateTimeRange
        form='persist'
        name='dateTimeRange'
        persistence={L.ValidationTypes.Persistence.localStorage}
        _mb-4
        _w-96
      />
      <L.DropDownSelect
        form='persist'
        name='select'
        data={['One', 'Two']}
        persistence={L.ValidationTypes.Persistence.localStorage}
        _mb-4
        _w-48
      />
      <L.Input
        form='persist'
        name='input'
        persistence={L.ValidationTypes.Persistence.localStorage}
        _mb-4
        _w-48
      />
      <L.MaskedInput
        form='persist'
        name='maskedInput'
        mask='9999'
        persistence={L.ValidationTypes.Persistence.localStorage}
        _mb-4
        _w-48
      />
      <L.MultiSelect
        form='persist'
        name='multi'
        data={['Argentina', 'Spain']}
        persistence={L.ValidationTypes.Persistence.localStorage}
        _mb-4
        _w-48
      />
      <L.NumericTextBox
        form='persist'
        name='numeric'
        persistence={L.ValidationTypes.Persistence.localStorage}
        _mb-4
        _w-48
      />
      <L.NumericRange
        form='persist'
        name='numericRange'
        persistence={L.ValidationTypes.Persistence.localStorage}
        _mb-4
        _w-96
      />
      <L.Password
        form='persist'
        name='password'
        persistence={L.ValidationTypes.Persistence.localStorage}
        _mb-4
        _w-48
      />
      <L.RadioGroup
        form='persist'
        name='radio'
        persistence={L.ValidationTypes.Persistence.localStorage}
        _mb-4
      >
        <L.RadioButton value='one'>One</L.RadioButton>
        <L.RadioButton value='two'>Two</L.RadioButton>
      </L.RadioGroup>
      <L.Rating
        form='persist'
        name='rating'
        persistence={L.ValidationTypes.Persistence.localStorage}
        _mb-4
      >
        Rate
      </L.Rating>
      <L.Switcher
        form='persist'
        name='switcher'
        persistence={L.ValidationTypes.Persistence.localStorage}
        _mb-4
      >
        Toggle
      </L.Switcher>
      <L.Textarea
        form='persist'
        name='textarea'
        persistence={L.ValidationTypes.Persistence.localStorage}
        _mb-4
        _w-48
      />
      <L.TimePicker
        form='persist'
        name='timePicker'
        persistence={L.ValidationTypes.Persistence.localStorage}
        _mb-4
        _w-48
      />
      <L.TimeRange
        form='persist'
        name='timeRange'
        persistence={L.ValidationTypes.Persistence.localStorage}
        _mb-4
        _w-96
      />
      <L.Button
        form='persist'
        _mb-4
        onClick={({ form }) => console.log(form)}
      >
        Log form
      </L.Button>
    </>
  );
}
      `}
    </Live>
  </article>
);

export default PersistencePage;
