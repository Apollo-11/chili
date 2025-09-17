import { Persistence } from '../components/Validation/types';
import { FORM_STORAGE_PREFIX } from '../constants';

interface SetPersistedFormParams {
  form: string,
  persistence: Persistence,
  field: string,
  value: unknown,
}

const getStorage = (persistence: Persistence) => (
  persistence === Persistence.localStorage ? window.localStorage : window.sessionStorage
);

export const setPersistedForm = ({ form, persistence, field, value }: SetPersistedFormParams): void => {
  const storage = getStorage(persistence);
  const key = `${FORM_STORAGE_PREFIX}${form}`;
  const storedValue = storage.getItem(key);

  if (!storedValue) {
    throw new Error(`No data found for key: ${key}`);
  }

  let parsed: Record<string, unknown>;

  try {
    parsed = JSON.parse(storedValue);
  } catch (err) {
    throw new Error(`Error parsing JSON for key: ${key}`);
  }

  const updated = {
    ...parsed,
    [field]: value,
  };

  storage.setItem(key, JSON.stringify(updated));
};
