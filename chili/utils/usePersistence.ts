'use client';

import * as React from 'react';
import { Persistence } from '../components/Validation/types';
import { FORM_STORAGE_PREFIX } from '../constants';

export interface UsePersistenceParams<V> {
  form?: string,
  name?: string,
  valueProp?: V,
  value: V,
  persistence?: Persistence,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setValue: (value: any) => void,
}

const getStorage = (persistence: Persistence) => (
  persistence === Persistence.localStorage ? window.localStorage : window.sessionStorage
);

const getFormKey = (form: string) => `${FORM_STORAGE_PREFIX}${form}`;

export const usePersistence = <V>({
  form,
  name,
  valueProp,
  value,
  persistence,
  setValue,
}: UsePersistenceParams<V>): void => {
  React.useEffect(() => {
    if (!persistence) return;
    if (!form || !name) {
      // eslint-disable-next-line no-console
      console.error('Persistence prop requires form and name props');
      return;
    }
    if (
      valueProp !== undefined
    ) {
      // eslint-disable-next-line no-console
      console.error('Persistence prop is for uncontrolled state only');
      return;
    }
    try {
      const storage = getStorage(persistence);
      const key = getFormKey(form);
      const stored = storage.getItem(key);
      if (stored) {
        const data = JSON.parse(stored);
        if (data[name] !== undefined) {
          setValue(data[name]);
        }
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    if (!persistence) return;
    if (!form || !name) return;
    if (valueProp !== undefined) return;
    try {
      const storage = getStorage(persistence);
      const key = getFormKey(form);
      const stored = storage.getItem(key);
      const data = stored ? JSON.parse(stored) : {};
      data[name] = value;

      const isFormEmpty = Object.values(data).every((v) => v === '' || v === null);
      if (isFormEmpty) {
        storage.removeItem(key);
      } else {
        storage.setItem(key, JSON.stringify(data));
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
  }, [persistence, form, name, value, valueProp]);
};
