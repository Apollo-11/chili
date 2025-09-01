'use client';

import * as L from '@chili';
import { Live } from '@/components/live';
import { H1 } from '@/components/typography';

const PersistencePage = () => (
  <article>
    <H1>Persistence</H1>
    <Live scope={{ L }}>
      {`
() => {
  return (
    <>
      <L.Input
        form='persist'
        name='input'
        persistence={L.ValidationTypes.Persistence.localStorage}
        _mb-4
        _w-48
      />
      <L.AutoComplete
        form='persist'
        name='auto'
        data={['Argentina', 'Spain']}
        persistence={L.ValidationTypes.Persistence.localStorage}
        _mb-4
        _w-48
      />
      <L.DropDownSelect
        form='persist'
        name='select'
        data={['One', 'Two']}
        persistence={L.ValidationTypes.Persistence.localStorage}
        _mb-4
        _w-48
      />
      <L.CheckBox
        form='persist'
        name='check'
        persistence={L.ValidationTypes.Persistence.localStorage}
        _w-48
        _mb-4
      >
        Agree
      </L.CheckBox>
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
