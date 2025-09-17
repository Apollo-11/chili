'use client';

import * as L from '@chili';
import { Live } from '@/components/live';
import {
  Code,
  CodeBlock,
  H1,
  H2,
  P,
  Section,
  Table,
  Td,
  THead,
} from '@/components/typography';

const GetPersistedFormPage = () => (
  <article>
    <H1>getPersistedForm</H1>

    <P>
      <b>getPersistedForm</b> reads persisted values for a form from <Code>localStorage</Code>{' '}
      or{' '}
      <Code>sessionStorage</Code> without mounting the original form components.
    </P>

    <Section>
      <H2>Import</H2>
      <P>
        <Code>{"import { getPersistedForm, ValidationTypes } from '@chili'"}</Code>
      </P>
      <P>
        or, when using the namespace pattern shown across the docs,
        call <Code>L.getPersistedForm</Code>.
      </P>
      <CodeBlock>
{`getPersistedForm({
  form: string,
  persistence: Persistence,
  field?: string,
}): Record<string, unknown> | unknown | null`}
      </CodeBlock>
    </Section>

    <Section>
      <H2>Parameters</H2>
      <Table>
        <THead headers={['Parameter', 'Type', 'Description']} />
        <tbody>
          <tr>
            <Td>form</Td>
            <Td>
              <Code>string</Code>
            </Td>
            <Td>Name of the form whose values were persisted.</Td>
          </tr>
          <tr>
            <Td>persistence</Td>
            <Td>
              <Code>Persistence</Code>
            </Td>
            <Td>
              Storage driver that was originally used to persist the form (for example{' '}
              <Code>L.ValidationTypes.Persistence.localStorage</Code> or{' '}
              <Code>L.ValidationTypes.Persistence.sessionStorage</Code>).
            </Td>
          </tr>
          <tr>
            <Td>field</Td>
            <Td>
              <Code>string</Code>
            </Td>
            <Td>Optional field name. When provided, only that field value is returned.</Td>
          </tr>
        </tbody>
      </Table>
      <P>
        The helper returns either the full form object, a field value, or <Code>null</Code> when nothing
        is stored for the supplied key.
      </P>
    </Section>

    <Section>
      <H2>Example</H2>
      <P>
        The snippet below persists a small form into <Code>localStorage</Code> and uses{' '}
        <Code>getPersistedForm</Code> to inspect the stored values.
      </P>

      <Live scope={{ L }}>
        {`() => {
  const formName = 'persisted-form-helper';
  const persistence = L.Persistence.localStorage;

  const showEntireForm = () => {
    const data = L.getPersistedForm({ form: formName, persistence });
    alert(data ? JSON.stringify(data, null, 2) : 'No data saved yet');
  };

  const showEmail = () => {
    const email = L.getPersistedForm({ form: formName, persistence, field: 'email' });
    alert(email != null ? email : 'Field "email" has not been stored yet');
  };

  return (
    <>
      <L.Input
        form={formName}
        name='email'
        placeholder='Email'
        persistence={persistence}
        _w-52
        _mb-4
      />

      <L.Switcher
        form={formName}
        name='newsletter'
        persistence={persistence}
        _mb-4
      >
        Subscribe to updates
      </L.Switcher>

      <div className='flex gap-4 flex-wrap'>
        <L.Button onClick={showEntireForm}>
          Show persisted form
        </L.Button>

        <L.Button onClick={showEmail}>
          Show only email field
        </L.Button>
      </div>
    </>
  );
}`}
      </Live>

      <P className="mt-4">
        Switch the <Code>persistence</Code> value to{' '}
        <Code>L.ValidationTypes.Persistence.sessionStorage</Code> if the form was stored in{' '}
        session storage instead.
      </P>
    </Section>
  </article>
);

export default GetPersistedFormPage;
