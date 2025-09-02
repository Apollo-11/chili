import { Persistence } from '../components/Validation/types';
import { FORM_STORAGE_PREFIX } from '../constants';

interface GetPersistedFormParams {
  form: string,
  persistence: Persistence,
  field?: string,
}

const getStorage = (persistence: Persistence) => (
  persistence === Persistence.localStorage ? window.localStorage : window.sessionStorage
);

export const getPersistedForm = ({ form, persistence, field }: GetPersistedFormParams) => {
  const storage = getStorage(persistence);
  const key = `${FORM_STORAGE_PREFIX}${form}`;
  const storedValue = storage.getItem(key);

  if (!storedValue) {
    // eslint-disable-next-line no-console
    console.warn(`No data found for key: ${key}`);
    return null;
  }

  try {
    const parsed = JSON.parse(storedValue);
    if (field) {
      if (field in parsed) {
        return parsed[field];
      }
      // eslint-disable-next-line no-console
      console.warn(`Field "${field}" not found in data for key: ${key}`);
      return null;
    }
    return parsed;
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(`Error parsing JSON for key: ${key}`, err);
    return null;
  }
};
