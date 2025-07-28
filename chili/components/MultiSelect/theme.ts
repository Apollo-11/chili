/* eslint-disable key-spacing */
import { defaultSuggestionListTheme } from '../../src/SuggestionList/theme';

export const defaultMultiSelectTheme = {
  checkBoxWrapper:           'chili-multiselect-checkbox-wrapper',
  checkBoxContainer:         'chili-multiselect-checkbox-container',
  checkBoxLabel:             'chili-multiselect-checkbox-label',
  clearIcon:                 'chili-multiselect-clear-icon',
  input:                     'chili-multiselect-input',
  inputWrapper:              'chili-multiselect-input-wrapper',
  inputWrapperDisabled:      'chili-disabled',
  inputWrapperFocused:       'chili-focused',
  inputWrapperInvalid:       'chili-danger',
  inputWrapperRequired:      'chili-required',
  placeholder:               'chili-multiselect-placeholder',
  tagsContainer:             'chili-multiselect-tags-container',
  tagsUnion:                 'chili-multiselect-tags-union',
  wrapper:                   'chili-multiselect-wrapper',
  /** SuggestionList theme */
  ...defaultSuggestionListTheme,
};
