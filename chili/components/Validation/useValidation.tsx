'use client';

import * as React from 'react';
import { isString, isNil } from 'lodash';
import { useElement } from '../../utils';
import {
  addField, getValidators, removeField, updateField, validate, getPersistedValue, setPersistedValue,
} from './helpers';
import { InvalidMessage as DefaultInvalidMessage } from './InvalidMessage';
import type {
  ValidationProps, ValidationState, ValidationExtra, ValidationResult,
} from './types';
import { defaultValidationTheme } from './theme';

export const useValidation = <P extends ValidationProps, S extends ValidationState>(
  props: P, state: S, extra: ValidationExtra,
): ValidationResult => {
  const {
    form,
    name,
    isRequired = false,
    isValid: isValidProp,
    shouldValidateUnmounted,
    persistIn,
    validator,
    invalidMessage,
    requiredMessage,
    invalidMessageRender,
  } = props;

  const uncontrolled = props.value === undefined;

  const value = uncontrolled && state
    ? state.value
    : props.value;

  const [isValid, setIsValid] = React.useState<boolean>(true);

  const [messages, setMessages] = React.useState<string[] | undefined>([]);

  // add/remove the field using mount/unmount
  React.useEffect((): (() => void) | void => {
    if (isString(form) && name) {
      const validators = getValidators(validator, invalidMessage);

      addField({
        formName: form,
        fieldName: name,
        value,
        setIsValid,
        setMessages,
        shouldValidateUnmounted,
        persistIn,
        validators,
        isRequired,
        requiredMessage,
        reset: extra.reset,
        setValue: extra.setValue,
        suggestion: state.suggestion,
      });

      return (): void => {
        removeField(form, name);

        setIsValid(true);
      };
    }

    return undefined;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form, name]);

  // update forms on every props change
  // required for correct validation
  React.useEffect(() => {
    if (form && name) {
      const validators = getValidators(validator, invalidMessage);

      updateField({
        formName: form,
        fieldName: name,
        value,
        isValidProp,
        isRequired,
        validators,
        shouldValidateUnmounted,
        persistIn,
        requiredMessage,
        suggestion: state.suggestion,
      });
    }
  }, [form, isRequired, name, value, isValidProp, validator, invalidMessage, shouldValidateUnmounted, persistIn, requiredMessage, state.suggestion]);

  React.useEffect(() => {
    console.log('HI THERE')
    
    if (form && name && persistIn) {
      setPersistedValue(form, name, persistIn, value);
    }
  }, [form, name, persistIn, value]);

  React.useEffect(() => {
    const persistedValue = form && name && persistIn ? getPersistedValue(form, name, persistIn) : undefined;

    if (uncontrolled && persistedValue !== undefined) {
      extra.setValue(persistedValue);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // user gets this function to validate the current field
  // it can be called in a handler, e.g. in onBlur
  const validateCurrent = React.useCallback((val?: unknown) => (isNil(isValidProp) ? validate(form, name, val) : isValidProp), [form, isValidProp, name]);

  const InvalidMessage = useElement(
    'InvalidMessage',
    DefaultInvalidMessage,
    invalidMessageRender,
    props,
    state,
  );

  const invalidMessageComponent = React.useMemo(() => {
    const message: React.FC<Record<string, never>> = () => <InvalidMessage theme={defaultValidationTheme} isValid={isValid} messages={messages} />;
    message.displayName = 'InvalidMessageWrapper';

    return message;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isValid, messages]);

  // return a dummy if there is no form
  // this line cannot be moved higher in the file because of hooks rules
  if (!form) return { isValid: true, validateCurrent: () => true, InvalidMessage: invalidMessageComponent };

  return {
    isValid,
    validateCurrent,
    InvalidMessage: invalidMessageComponent,
  };
};
