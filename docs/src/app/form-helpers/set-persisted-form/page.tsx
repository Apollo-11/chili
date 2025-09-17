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

const SetPersistedFormPage = () => (
  <article>
    <H1>setPersistedForm</H1>

    <P>
      <b>setPersistedForm</b> updates a single persisted field value for a form stored in{' '}
      <Code>localStorage</Code> or <Code>sessionStorage</Code> without mounting the original
      form component.
    </P>

    <Section>
      <H2>Import</H2>
      <P>
        <Code>{"import { setPersistedForm } from '@chili'"}</Code>
      </P>
      <P>
        Or, when using the namespace pattern shown across the docs, call{' '}
        <Code>L.setPersistedForm</Code>.
      </P>
      <CodeBlock>
{`setPersistedForm({
  form: string,
  persistence: Persistence,
  field: string,
  value: unknown,
}): void`}
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
              <Code>L.Persistence.localStorage</Code> or{' '}
              <Code>L.Persistence.sessionStorage</Code>).
            </Td>
          </tr>
          <tr>
            <Td>field</Td>
            <Td>
              <Code>string</Code>
            </Td>
            <Td>Field name whose value should be updated.</Td>
          </tr>
          <tr>
            <Td>value</Td>
            <Td>
              <Code>unknown</Code>
            </Td>
            <Td>New value that will be stored for the provided field.</Td>
          </tr>
        </tbody>
      </Table>
      <P>
        The helper throws an error when no persisted form exists for the supplied key or when
        the stored value cannot be parsed as JSON, so make sure the form was persisted before
        calling it.
      </P>
    </Section>

    <Section>
      <H2>Example</H2>
      <P>
        The example below persists a form into <Code>localStorage</Code> and provides a
        button that updates the stored email without touching the underlying input.
      </P>

      <Live scope={{ L }}>
        {`() => {
  const formName = 'set-persisted-form-helper';
  const persistence = L.Persistence.localStorage;

  const updateEmail = () => {
    try {
      L.setPersistedForm({ form: formName, persistence, field: 'email', value: 'persisted@example.com' });
      alert('Persisted email updated to "persisted@example.com"');
    } catch (error) {
      alert('Persisted form not found yet. Type something in the form first.');
    }
  };

  const showPersistedData = () => {
    const data = L.getPersistedForm({ form: formName, persistence });
    alert(data ? JSON.stringify(data, null, 2) : 'No data saved yet');
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
        <L.Button onClick={updateEmail}>
          Persist demo email
        </L.Button>

        <L.Button onClick={showPersistedData}>
          Show persisted data
        </L.Button>
      </div>
    </>
  );
}`}
      </Live>

      <P className="mt-4">
        Swap the <Code>persistence</Code> value to{' '}
        <Code>L.Persistence.sessionStorage</Code> if the form was stored in
        session storage instead.
      </P>
    </Section>
  </article>
);

export default SetPersistedFormPage;
