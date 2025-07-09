import * as React from 'react';
import type { CustomElements, MaskedInputProps, MaskedInputState } from './types';
import { Div } from '../Div';
import { MaskedInputBase } from '../../src/MaskedInputBase';
import { useElement } from '../../utils';
import { ChiliContext } from '../ChiliProvider';
import { COMPONENTS_NAMESPACES } from '../../constants';

export const useCustomElements = (props: MaskedInputProps, state: MaskedInputState): CustomElements => {
  const { wrapperRender, inputRender } = props;

  const { renders: { [COMPONENTS_NAMESPACES.maskedInput]: maskedRender } } = React.useContext(ChiliContext);

  const Wrapper = useElement(
    'Wrapper',
    Div,
    wrapperRender || maskedRender.wrapperRender,
    props,
    state,
  );

  const Input = useElement(
    'Input',
    MaskedInputBase,
    inputRender || maskedRender.inputRender,
    props,
    state,
  );

  return {
    Wrapper,
    Input,
  };
};
