'use client';

import React from 'react';
import { globalDefaultTheme } from './globalDefaultTheme';
import type { PartialGlobalDefaultTheme } from '../../utils/useTheme';
import { globalDefaultRenders } from './globalDefaultRenders';
import type { GlobalDefaultRenders } from './globalDefaultRenders';
import type { PartialGlobalDefaultMessages } from './globalDefaultMessages';
import { globalDefaultMessages } from './globalDefaultMessages';

export interface ChiliContextType {
  theme: PartialGlobalDefaultTheme,
  messages: PartialGlobalDefaultMessages,
  renders: GlobalDefaultRenders,
}

export const ChiliContext = React.createContext<ChiliContextType>({
  theme: globalDefaultTheme,
  messages: globalDefaultMessages,
  renders: globalDefaultRenders as GlobalDefaultRenders,
});
