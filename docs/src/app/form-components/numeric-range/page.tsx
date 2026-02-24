'use client';

import * as L from '@chili';
import { ShouldRender, UnderscoreClasses } from '@/components/commonProps';
import { CodeBlock, H1, Td } from '@/components/typography';
import { Live } from '@/components/live';
import { CustomizationPropsTableSection, PropsTableSection, ValidationSection } from '@/sections';
import { Demos } from './Demos';

const NumericRangePage = () => (
  <article>
    <H1>NumericRange</H1>
    <PropsTableSection>
      <tr>
        <Td>defaultValue</Td>
        <Td>[number | null, number | null] | null</Td>
        <Td>Default value for the uncontrolled mode</Td>
      </tr>
      <tr>
        <Td>format</Td>
        <Td>string</Td>
        <Td>
          <p># is a placeholder for your numbers.</p>
          <p>. or , is a fractional pert separator, use either of them.</p>
          <p>The number of # after a fractional separator corresponds to the number of fractional digits.</p>
          <p># {'=>'} 1000 (any whole number)</p>
          <p>#. {'=>'} 1000</p>
          <p>#.# {'=>'} 1000.0</p>
          <p>#.### {'=>'} 1000.000</p>
          <p className="mt-4">
            You can use prefixes and suffixes alongside with numbers, they must be separated by a space.
          </p>
          <p># min {'=>'} 1000 min</p>
          <p>from # days {'=>'} from 1000 days</p>
          <p className="mt-4"># is the default format</p>
        </Td>
      </tr>
      <tr>
        <Td>hasStepper</Td>
        <Td>boolean</Td>
        <Td>Whether or not to show stepper buttons</Td>
      </tr>
      <tr>
        <Td>isDisabled</Td>
        <Td>boolean | [boolean, boolean]</Td>
        <Td>Disable the component</Td>
      </tr>
      <tr>
        <Td>max</Td>
        <Td>number</Td>
        <Td>Max value of the whole range</Td>
      </tr>
      <tr>
        <Td>min</Td>
        <Td>number</Td>
        <Td>Min value of the whole range</Td>
      </tr>
      <tr>
        <Td>onBlur</Td>
        <Td>
          <CodeBlock>
            {`(event: NumericRangeBlurEvent) => void

interface NumericRangeBlurEvent extends React.FocusEvent<HTMLInputElement> {
  component: {
    formattedValue: [string, string],
    isValid?: boolean,
    name?: string,
    value: [number | null, number | null],
  },
}
`}
          </CodeBlock>
        </Td>
        <Td>Blur handler</Td>
      </tr>
      <tr>
        <Td>onChange</Td>
        <Td>
          <CodeBlock>
            {`(event: NumericRangeChangeEvent) => void

interface NumericRangeChangeEvent {
  component: {
    formattedValue: [string, string],
    name?: string,
    value: [number | null, number | null],
  },
}
`}
          </CodeBlock>
        </Td>
        <Td>Value change handler</Td>
      </tr>
      <tr>
        <Td>onEnterPress</Td>
        <Td>
          <CodeBlock>
            {`(event: NumericRangeEnterPressEvent) => void

interface NumericRangeEnterPressEvent extends React.KeyboardEvent<HTMLInputElement> {
  component: {
    name?: string,
    value: [number | null, number | null],
  },
}
`}
          </CodeBlock>
        </Td>
        <Td>Enter press handler</Td>
      </tr>
      <tr>
        <Td>onFocus</Td>
        <Td>
          <CodeBlock>
            {`(event: NumericRangeFocusEvent) => void

interface NumericRangeFocusEvent extends React.FocusEvent<HTMLInputElement> {
  component: {
    formattedValue: [string, string],
    name?: string,
    value: [number | null, number | null],
  },
}
`}
          </CodeBlock>
        </Td>
        <Td>Focus handler</Td>
      </tr>
      <tr>
        <Td>placeholder</Td>
        <Td>[string | undefined, string | undefined] | string</Td>
        <Td>placeholder</Td>
      </tr>
      <tr>
        <Td>shouldTrimTrailingZeros</Td>
        <Td>boolean</Td>
        <Td>To trim or not to trim</Td>
      </tr>
      <ShouldRender />
      <tr>
        <Td>step</Td>
        <Td>number</Td>
        <Td>How much the value is increased/decreased on mouse events</Td>
      </tr>
      <tr>
        <Td>thousandsSeparator</Td>
        <Td>string</Td>
        <Td>A space by default (1 000 000.00)</Td>
      </tr>
      <tr>
        <Td>value</Td>
        <Td>[number | null, number | null] | null</Td>
        <Td>Component value</Td>
      </tr>
      <UnderscoreClasses />
    </PropsTableSection>

    <Demos />

    <ValidationSection
      form
      isValid
      invalidMessage
      name
      requiredMessage
      shouldValidateUnmounted
      validator
    />

    <Live scope={{ L }}>
      {`<>
<L.NumericRange
  hasStepper
  onBlur={({ component }) => console.log('blur', component.value)}
  onChange={({ component }) => console.log('change', component.value)}
  onEnterPress={({ component }) => console.log('enter', component.value)}
  onFocus={({ component }) => console.log('focus', component.value)}
  form='numeric-range-form'
  name='numeric-range'
  _w-96
/>
<br />
<L.Button
  form='numeric-range-form'
  onClick={({ form }) => console.log(form)}
>
  Click me
</Button>
</>`}
    </Live>

    <CustomizationPropsTableSection>
      <tr>
        <Td>
          inputsRender <br />
          invalidMessageRender <br />
          wrapperRender
        </Td>
        <Td>
          <CodeBlock>
            {`({
  Element,
  elementprops,
  componentProps,
  componentState
}): React.ReactNode`}
          </CodeBlock>
        </Td>
        <Td>Customization</Td>
      </tr>
    </CustomizationPropsTableSection>

    <Live scope={{ L }}>
      {`
<L.NumericRange
  hasStepper
  onChange={({ component }) => console.log('change', component.value)}
  _w-96
/>
        `}
    </Live>
  </article>
);

export default NumericRangePage;
