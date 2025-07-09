import * as React from 'react';
import { useElement } from '../../utils';
import { Div } from '../Div';
import { ChiliContext } from '../ChiliProvider';
import type { CustomElements, ModalWindowProps } from './types';
import { Icon } from '../Icon';

export const useCustomElements = (props: ModalWindowProps): CustomElements => {
  const {
    wrapperRender, iconRender,
  } = props;

  const { renders: { modal: modalRenders } } = React.useContext(ChiliContext);

  const Wrapper = useElement(
    'Wrapper',
    Div,
    wrapperRender || modalRenders.wrapperRender,
    props,
  );

  const IconElement = useElement(
    'Icon',
    Icon,
    iconRender || modalRenders.iconRender,
    props,
  );

  return {
    Wrapper,
    Icon: IconElement,
  };
};
