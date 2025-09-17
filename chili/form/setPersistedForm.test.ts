import { setPersistedForm } from './setPersistedForm';
import { Persistence } from '../components/Validation/types';
import { FORM_STORAGE_PREFIX } from '../constants';

describe('setPersistedForm', () => {
  const formName = 'test-form';
  const fieldName = 'field';

  beforeEach(() => {
    window.localStorage.clear();
    window.sessionStorage.clear();
  });

  test('updates persisted field value', () => {
    const key = `${FORM_STORAGE_PREFIX}${formName}`;
    window.localStorage.setItem(key, JSON.stringify({ [fieldName]: 'old', another: 1 }));

    setPersistedForm({ form: formName, persistence: Persistence.localStorage, field: fieldName, value: 'new' });

    expect(JSON.parse(window.localStorage.getItem(key) as string)).toEqual({ [fieldName]: 'new', another: 1 });
  });

  test('throws when persisted data does not exist', () => {
    expect(() => setPersistedForm({
      form: formName,
      persistence: Persistence.sessionStorage,
      field: fieldName,
      value: 'value',
    })).toThrowError(`No data found for key: ${FORM_STORAGE_PREFIX}${formName}`);
  });

  test('throws when persisted data is not valid JSON', () => {
    const key = `${FORM_STORAGE_PREFIX}${formName}`;
    window.sessionStorage.setItem(key, 'invalid json');

    expect(() => setPersistedForm({
      form: formName,
      persistence: Persistence.sessionStorage,
      field: fieldName,
      value: 'value',
    })).toThrowError(`Error parsing JSON for key: ${key}`);
  });
});
