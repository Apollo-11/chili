/* eslint-disable key-spacing */
import { defaultSuggestionListTheme } from '../../src/SuggestionList/theme';

export const defaultAutoCompleteTheme = {
  ...defaultSuggestionListTheme,
  closeIcon:                  'chili-input-icon',
  input:                      'chili-input-element',
  inputWrapper:               'chili-input-element-wrapper',
  inputWrapperDisabled:       'chili-disabled',
  inputWrapperFocused:        'chili-focused',
  inputWrapperInvalid:        'chili-danger',
  inputWrapperRequired:       'chili-required',
  wrapper:                    'chili-autocomplete-wrapper',
};
