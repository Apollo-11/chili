import type * as React from 'react';
import { isFunction, isNil } from 'lodash';
import type {
  BlurData,
  ClearData,
  FocusData,
  KeyDownData,
  MouseDownData,
  MultiSelectProps,
  SelectData,
  Value,
} from './types';
import type { CustomEventHandler, SetState, SomeObject } from '../../commonTypes';
import type { SuggestionTarget } from '../../src/SuggestionList/types';
import { filterData, getShouldUniteTags } from './helpers';
import { selectAllSuggestion } from './constants';

export const createFocusHandler = (props: MultiSelectProps, extraData: FocusData): React.FocusEventHandler<HTMLInputElement> => (ev) => {
  const { onFocus, name } = props;

  const { value, setFocused } = extraData;

  if (isFunction(onFocus)) {
    const customEvent = {
      ...ev,
      component: {
        name,
        value,
      },
    };

    onFocus(customEvent);
  }

  setFocused(true);
};

export const createBlurHandler = (props: MultiSelectProps, extraData: BlurData): React.FocusEventHandler<HTMLInputElement> => (ev) => {
  const { onBlur, name } = props;

  const {
    setFocused, value, validateCurrent, setFilterValue,
  } = extraData;

  const isValid = validateCurrent();

  if (isFunction(onBlur)) {
    const customEvent = {
      ...ev,
      component: {
        value,
        name,
        isValid,
      },
    };

    onBlur(customEvent);
  }

  setFocused(false);

  setFilterValue('');
};

export const createSelectHandler = (props: MultiSelectProps, extraData: SelectData): CustomEventHandler<React.MouseEvent<HTMLElement | SVGElement> & SuggestionTarget> => (ev) => {
  const {
    data, onChange, name, value: valueProp, isDisabled, maxSelected,
  } = props;

  if (isDisabled) return;

  const {
    setValue, value, setFilterValue,
  } = extraData;

  const shouldRemoveValue = (value as (string | number | SomeObject)[]).includes(ev.target.value);

  const isSelectAllClicked = ev.target.value === selectAllSuggestion;

  const newValue = (() => {
    if (isSelectAllClicked) {
      // todo investigate if throwing an error is better
      if (data === undefined) return [];
      if (data?.length === value.length) return [];
      return [...data];
    }

    if (shouldRemoveValue) {
      return (value as (string | number | SomeObject)[]).filter((item) => (item !== ev.target.value));
    }

    return [...value, ev.target.value];
  })() as (string[] | number[] | SomeObject[]);

  const selectedValue = (() => {
    if (isSelectAllClicked) return undefined; // todo: return correct selected value
    return shouldRemoveValue ? undefined : ev.target.value;
  })();

  const deselectedValues = (() => {
    if (isSelectAllClicked) {
      return value.length === data?.length ? data : [];
    }
    return shouldRemoveValue ? [ev.target.value] as string[] | number[] | SomeObject[] : undefined;
  })();

  if (!isNil(maxSelected) && newValue.length === maxSelected) {
    setFilterValue('');
  }

  if (valueProp === undefined) setValue(newValue);

  if (isFunction(onChange)) {
    const customEvent = {
      ...ev,
      component: {
        value: newValue,
        name,
        selectedValue,
        deselectedValues,
      },
    };

    onChange(customEvent);
  }
};

export const createClearHandler = (props: MultiSelectProps, extraData: ClearData): React.MouseEventHandler<SVGElement> => (ev) => {
  const {
    onChange, name, value: valueProp, isDisabled,
  } = props;

  if (isDisabled) return;

  const { setValue, value } = extraData;

  if (valueProp === undefined) setValue([]);

  if (isFunction(onChange)) {
    const customEvent = {
      ...ev,
      component: {
        value: [] as string[] | number[] | SomeObject[],
        name,
        deselectedValues: value,
      },
    };

    onChange(customEvent);
  }
};

export const createMouseDownHandler = (props: MultiSelectProps, extraData: MouseDownData): React.MouseEventHandler<HTMLElement> => (ev) => {
  ev.preventDefault();

  const { inputRef: { current: input } } = extraData;

  if (input) input.focus();
};

export const createKeyDownHandler = (props: MultiSelectProps, extraData: KeyDownData): React.KeyboardEventHandler<HTMLInputElement> => (ev) => {
  const {
    data, textField, filterRule, compareObjectsBy, maxTags,
  } = props;

  const {
    filterValue, highlightedSuggestion, setHighlightedSuggestion, handleSelect, value,
  } = extraData;

  if (!data) return;

  const filteredData = filterData({
    data,
    filterValue,
    textField,
    filterRule,
    value,
    compareObjectsBy,
  }) || [];

  const highlightedItem = (filteredData as (string | number | SomeObject)[]).find((item) => item === highlightedSuggestion);

  const currentIndex = (filteredData as (string | number | SomeObject)[]).indexOf(highlightedItem || '');

  if (ev.key === 'ArrowDown' || ev.key === 'Down') {
    // prevent page scroll
    ev.preventDefault();
    // new index, suggestion list is cyclic
    const nextIndex = (currentIndex + 1) % filteredData.length;

    const newHighlightedSuggestion = filteredData[nextIndex];

    setHighlightedSuggestion(newHighlightedSuggestion);

    return;
  }

  if (ev.key === 'ArrowUp' || ev.key === 'Up') {
    // prevent page scroll
    ev.preventDefault();
    // new index, suggestion list is cyclic
    const nextIndex = (() => {
      if (currentIndex <= 0) return filteredData.length - 1;

      return currentIndex - 1;
    })();

    const newHighlightedSuggestion = filteredData[nextIndex];

    setHighlightedSuggestion(newHighlightedSuggestion);

    return;
  }

  if (ev.key === 'Enter') {
    if (!highlightedSuggestion) return;

    setHighlightedSuggestion(null);

    handleSelect({
      ...ev,
      target: {
        ...ev.target,
        value: highlightedSuggestion,
      },
    } as unknown as React.MouseEvent<HTMLElement> & SuggestionTarget);

    return;
  }

  if (ev.key === 'Backspace' && !filterValue && value.length !== 0) {
    const shouldUniteTags = getShouldUniteTags({ maxTags, value });
    if (shouldUniteTags) return;

    handleSelect({
      ...ev,
      target: {
        ...ev.target,
        value: value[value.length - 1],
      },
    } as unknown as React.MouseEvent<HTMLElement> & SuggestionTarget);
  }
};

export const createResetHandler = ({
  props,
  setValue,
  value,
}: {
  props: MultiSelectProps,
  setValue: SetState<Value[]>,
  value: Value[],
}) => () => {
  setValue(value);
  if (isFunction(props.onChange)) {
    const customEvent = {
      component: {
        name: props.name,
        value,
        deselectedValues: undefined,
        selectedValue: undefined,
      },
    } as any;
    props.onChange(customEvent);
  }
};

export const createSetValueHandler = ({
  props,
  setValue,
}: {
  props: MultiSelectProps,
  setValue: SetState<Value[]>,
}) => (value: unknown) => {
  const newValue = value as Value[];
  setValue(newValue);
  if (isFunction(props.onChange)) {
    const customEvent = {
      component: {
        name: props.name,
        value: newValue,
        deselectedValues: undefined,
        selectedValue: undefined,
      },
    };
    props.onChange(customEvent);
  }
};
