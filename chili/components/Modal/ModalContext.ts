import React from 'react';
import { globalDefaultTheme } from '../ChiliProvider';
import type { ModalContextType } from './types';

export const ModalContext = React.createContext<ModalContextType>({
  headerClassName: globalDefaultTheme.modal.header,
  bodyClassName: globalDefaultTheme.modal.body,
  footerClassName: globalDefaultTheme.modal.footer,
});
