import { getPersistedForm } from './getPersistedForm';
import { Persistence } from '../components/Validation/types';
import { FORM_STORAGE_PREFIX } from '../constants';

describe('getPersistedForm', () => {
  const formName = 'test-form';
  const fieldName = 'field';

  beforeEach(() => {
    window.localStorage.clear();
    window.sessionStorage.clear();
  });

  test('returns field value when field provided', () => {
    const data = { [fieldName]: 'value' };
    window.localStorage.setItem(`${FORM_STORAGE_PREFIX}${formName}`, JSON.stringify(data));
    expect(getPersistedForm({ form: formName, persistence: Persistence.localStorage, field: fieldName })).toBe('value');
  });

  test('returns whole form when field is not provided', () => {
    const data = { [fieldName]: 'value', another: 1 };
    window.sessionStorage.setItem(`${FORM_STORAGE_PREFIX}${formName}`, JSON.stringify(data));
    expect(getPersistedForm({ form: formName, persistence: Persistence.sessionStorage })).toEqual(data);
  });
});
