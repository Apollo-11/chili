import type {
  PredefinedValidator, FormGetField, Form, Field,
} from '../components/Validation/types';

export {
  Form, Field,
};

export interface FunctionalValidator {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (value: any): boolean,
}

export type Validator = FunctionalValidator | PredefinedValidator | RegExp;

export type InvalidMessage = string;

export interface SingleFunctionValidator {
  validate: FunctionalValidator,
  invalidMessage?: InvalidMessage,
}

export interface ExternalValidator {
  validator: Validator | Validator[],
  invalidMessage?: string,
}

export interface FormFieldHelpers {
  get: () => FormGetField | undefined,
  remove: () => void,
  reset: () => boolean,
  set: (value: unknown) => boolean,
  validate: (warpedValidator?: ExternalValidator | ExternalValidator[]) => Field | undefined,
}

export interface FormFieldsHelpers {
  get: () => FormGetField[],
  remove: () => void,
  reset: () => boolean,
  validate: () => Field[],
}
