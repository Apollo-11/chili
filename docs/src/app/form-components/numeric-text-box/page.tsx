'use client';

import * as L from '@chili';
import { ShouldRender, UnderscoreClasses } from '@/components/commonProps';
import { CodeBlock, H1, Td } from '@/components/typography';
import { Live } from '@/components/live';
import { CustomizationPropsTableSection, PropsTableSection, ValidationSection } from '@/sections';
import { Demos } from './Demos';

const NumericTextBoxPage = () => (
  <article>
    <H1>NumericTextBox</H1>
    <PropsTableSection>
      <tr>
        <Td>defaultValue</Td>
        <Td>number | null</Td>
        <Td>Default value</Td>
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
        <Td>isDisabled</Td>
        <Td>boolean</Td>
        <Td>Disable the component</Td>
      </tr>
      <tr>
        <Td>max</Td>
        <Td>number</Td>
        <Td>Max allowed number</Td>
      </tr>
      <tr>
        <Td>min</Td>
        <Td>number</Td>
        <Td>Min allowed number</Td>
      </tr>
      <tr>
        <Td>onBlur</Td>
        <Td>
          (event: BlurEvent) ={'>'} void
        </Td>
        <Td>Blur handler</Td>
      </tr>
      <tr>
        <Td>onChange</Td>
        <Td>(event: ChangeEvent{'<'}T{'>'}) ={'>'} void</Td>
        <Td>Value change handler</Td>
      </tr>
      <tr>
        <Td>onEnterPress</Td>
        <Td>
          (event: EnterPressEvent) ={'>'} void
        </Td>
        <Td>Enter press handler</Td>
      </tr>
      <tr>
        <Td>onFocus</Td>
        <Td>(event: FocusEvent) ={'>'} void</Td>
        <Td>Focus handler</Td>
      </tr>
      <tr>
        <Td>placeholder</Td>
        <Td>string</Td>
        <Td>Placeholder</Td>
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
        <Td>number | null</Td>
        <Td>Component value</Td>
      </tr>
      <UnderscoreClasses />
    </PropsTableSection>

    <Demos />

    <ValidationSection
      form
      isValid
      isRequired
      invalidMessage
      name
      requiredMessage
      shouldValidateUnmounted
      validator
    />

    <Live scope={{ L }}>
      {`<>
<L.NumericTextBox
  onChange={({ component }) => console.log(component.value)}
  form='numeric_form'
  name='numeric'
  isRequired
  requiredMessage='Please enter something'
  validator={(val) => val === 42}
  invalidMessage='The number should be 42'
  _w-48
/>
<br />
<L.Button
  form='numeric_form'
  onClick={({ form }) => console.log(form)}
>
  Click me
</Button>
</>`}
    </Live>

    <CustomizationPropsTableSection>
      <tr>
        <Td>
          arrowButtonsRender <br />
          inputRender <br />
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
<L.NumericTextBox
  onChange={({ component }) => console.log(component.value)}
  _w-48
/>
          `}
    </Live>
  </article>
);

export default NumericTextBoxPage;
