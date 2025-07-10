'use client';

import React from 'react';
import { ChiliContext } from './ChiliContext';
import { globalDefaultTheme } from './globalDefaultTheme';
import type { PartialGlobalDefaultTheme } from '../../utils/useTheme';
import type { GlobalDefaultRenders } from './globalDefaultRenders';
import { globalDefaultRenders } from './globalDefaultRenders';
import type { PartialGlobalDefaultMessages } from './globalDefaultMessages';
import { globalDefaultMessages } from './globalDefaultMessages';

export interface ChiliProps {
  children: React.ReactNode,
  theme?: PartialGlobalDefaultTheme,
  messages?: PartialGlobalDefaultMessages,
  renders?: GlobalDefaultRenders,
}

export const Chili = ((props: ChiliProps): React.ReactElement => {
  const {
    theme = globalDefaultTheme,
    renders = globalDefaultRenders,
    messages = globalDefaultMessages,
    children,
  } = props;

  const context = { messages, theme, renders };

  return (
    <ChiliContext.Provider value={context}>
      {children}
    </ChiliContext.Provider>
  );
}) as React.FC<ChiliProps>;

export { ChiliContext } from './ChiliContext';
export { globalDefaultTheme } from './globalDefaultTheme';
