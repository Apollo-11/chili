import * as React from 'react';
import type { CustomElements, TextareaProps } from './types';
import { useElement } from '../../utils';
import { Div } from '../Div';
import { ChiliContext } from '../ChiliProvider';
import { COMPONENTS_NAMESPACES } from '../../constants';

export const useCustomElements = (props: TextareaProps): CustomElements => {
  const { wrapperRender } = props;

  const context = React.useContext(ChiliContext);

  const Wrapper = useElement(
    'Wrapper',
    Div,
    wrapperRender || context.renders[COMPONENTS_NAMESPACES.textarea].wrapperRender,
    props,
  );

  return {
    Wrapper,
  };
};
