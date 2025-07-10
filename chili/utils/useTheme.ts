import * as React from 'react';
import { ChiliContext, globalDefaultTheme } from '../components/ChiliProvider';
import type { RecursivePartial, RecursiveRequired } from '../commonTypes';

export type GlobalDefaultTheme = typeof globalDefaultTheme;

export type PartialGlobalDefaultTheme = RecursivePartial<GlobalDefaultTheme>;

export const useTheme = <T extends PartialGlobalDefaultTheme[keyof PartialGlobalDefaultTheme]>(
  theme: T | undefined, fieldName: keyof GlobalDefaultTheme,
): RecursiveRequired<T> => {
  const {
    theme: globalTheme,
  } = React.useContext(ChiliContext);

  return React.useMemo(() => ({
    ...globalDefaultTheme[fieldName], ...globalTheme[fieldName], ...theme,
  }), [fieldName, globalTheme, theme]) as unknown as RecursiveRequired<T>;
};
