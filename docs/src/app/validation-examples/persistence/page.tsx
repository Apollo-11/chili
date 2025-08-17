'use client';

import * as L from '@chili';
import { H1, P } from '@/components/typography';
import { Live } from '@/components/live';
import React from 'react';

const PersistencePage = () => (
  <article>
    <H1>Persistence</H1>

    <P>
      Use the <code>persistIn</code> prop to keep field values when components unmount.
      Values can be stored in inner storage, sessionStorage or localStorage and
      will be restored on remount.
    </P>

    <L.Section>
      <L.Tabs>
        <L.Tab title="innerStorage" tabKey={0}>
          <Live scope={{ L, React }}>
            {`
() => {
  const [isVisible, setVisible] = React.useState(true);
  return (
    <>
      <L.Button onClick={() => setVisible(!isVisible)} _mb-3>
        Toggle
      </L.Button>
      {isVisible && (
        <L.Input
          form='innerPersistence'
          name='field'
          persistIn='innerStorage'
          placeholder='type something'
          _w-48
          _mb-3
        />
      )}
    </>
  );
}
            `}
          </Live>
        </L.Tab>
        <L.Tab title="sessionStorage" tabKey={1}>
          <Live scope={{ L, React }}>
            {`
() => {
  const [isVisible, setVisible] = React.useState(true);
  return (
    <>
      <L.Button onClick={() => setVisible(!isVisible)} _mb-3>
        Toggle
      </L.Button>
      {isVisible && (
        <L.Input
          form='sessionPersistence'
          name='field'
          persistIn='sessionStorage'
          placeholder='type something'
          _w-48
          _mb-3
        />
      )}
    </>
  );
}
            `}
          </Live>
        </L.Tab>
        <L.Tab title="localStorage" tabKey={2}>
          <Live scope={{ L, React }}>
            {`
() => {
  const [isVisible, setVisible] = React.useState(true);
  return (
    <>
      <L.Button onClick={() => setVisible(!isVisible)} _mb-3>
        Toggle
      </L.Button>
      {isVisible && (
        <L.Input
          form='localPersistence'
          name='field'
          persistIn='localStorage'
          placeholder='type something'
          _w-48
          _mb-3
        />
      )}
    </>
  );
}
            `}
          </Live>
        </L.Tab>
      </L.Tabs>
    </L.Section>
  </article>
);

export default PersistencePage;

