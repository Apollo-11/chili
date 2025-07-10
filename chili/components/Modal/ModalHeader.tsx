'use client';

import React from 'react';
import { ChiliContext } from '../ChiliProvider';
import { ModalContext } from './ModalContext';
import { Div } from '../Div';
import { getClassNames, useElement, useProps } from '../../utils';
import type { ModalElementsProps } from './types';

export const ModalHeader: React.FC<ModalElementsProps> = (props: ModalElementsProps): React.ReactElement => {
  const {
    className, children, wrapperRender, ...restProps
  } = useProps(props);

  const modalContext = React.useContext(ModalContext);

  const { renders: { modalHeader: modalHeaderRenders } } = React.useContext(ChiliContext);

  const Wrapper = useElement(
    'Wrapper',
    Div,
    wrapperRender || modalHeaderRenders.wrapperRender,
    props,
  );

  return (
    <Wrapper
      className={getClassNames(className, modalContext.headerClassName)}
      {...restProps}
    >
      {children}
    </Wrapper>
  );
};

ModalHeader.displayName = 'ModalHeader';
