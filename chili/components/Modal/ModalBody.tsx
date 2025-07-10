'use client';

import React from 'react';
import { getClassNames, useElement, useProps } from '../../utils';
import { Div } from '../Div';
import { ChiliContext } from '../ChiliProvider';
import { ModalContext } from './ModalContext';
import type { ModalElementsProps } from './types';

export const ModalBody: React.FC<ModalElementsProps> = (props: ModalElementsProps): React.ReactElement => {
  const {
    className, children, wrapperRender, ...restProps
  } = useProps(props);

  const modalContext = React.useContext(ModalContext);

  const { renders: { modalBody: modalBodyRenders } } = React.useContext(ChiliContext);

  const Wrapper = useElement(
    'Wrapper',
    Div,
    wrapperRender || modalBodyRenders.wrapperRender,
    props,
  );

  return (
    <Wrapper
      className={getClassNames(className, modalContext.bodyClassName)}
      {...restProps}
    >
      {children}
    </Wrapper>
  );
};

ModalBody.displayName = 'ModalBody';
