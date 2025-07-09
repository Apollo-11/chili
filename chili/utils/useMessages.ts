import * as React from 'react';
import { ChiliContext } from '../components/ChiliProvider';
import { globalDefaultMessages } from '../components/ChiliProvider/globalDefaultMessages';

export const useMessages = <T extends keyof typeof globalDefaultMessages>({
  fieldName,
  messages: componentMessages,
}: {
  fieldName: T,
  messages?: typeof globalDefaultMessages[T],
}): typeof globalDefaultMessages[T] => {
  const {
    messages: globalMessages,
  } = React.useContext(ChiliContext);

  return {
    ...globalDefaultMessages[fieldName], ...globalMessages[fieldName], ...componentMessages,
  };
};
