import * as React from 'react';
import { ChiliContext } from '../../components/ChiliProvider';
import { Li } from '../../components/Li';
import { COMPONENTS_NAMESPACES } from '../../constants';
import { getClassNames, useElement } from '../../utils';
import { createClickHandler } from './handlers';
import type { SuggestionItemProps } from './types';

export const SuggestionItem = (props: SuggestionItemProps): React.ReactElement => {
  const {
    itemRender,
    isScrollTarget,
    isPlaceholder,
    isHighlighted,
    isSelected,
    suggestionRef,
    text,
    theme,
  } = props;

  const {
    renders: { [COMPONENTS_NAMESPACES.suggestionList]: suggestionRenders },
  } = React.useContext(ChiliContext);

  const Suggestion = useElement(
    'Suggestion',
    Li,
    itemRender || suggestionRenders.itemRender,
    props,
  );

  const handleClick = createClickHandler(props);

  const suggestionClassNames = getClassNames(
    theme.item,
    {
      [theme.itemPlaceholder]: isPlaceholder,
      [theme.itemHighlighted]: isHighlighted,
      [theme.itemSelected]: isSelected,
    },
  );

  return (
    <Suggestion
      className={suggestionClassNames}
      onClick={handleClick}
      ref={(component) => {
        if (isScrollTarget) {
          suggestionRef.current = component;
        }
      }}
    >
      {text}
    </Suggestion>
  );
};

SuggestionItem.displayName = 'SuggestionItem';
