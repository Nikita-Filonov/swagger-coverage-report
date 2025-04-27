export enum StorageKey {
  ThemeMode = 'SWAGGER_COVERAGE_THEME_MODE'
}

type LoadFromStorageProps<T> = {
  key: StorageKey;
  fallback: T;
};

export const loadFromStorage = <T>({ key, fallback }: LoadFromStorageProps<T>): T => {
  const result = localStorage.getItem(key);
  if (result === null) return fallback;

  try {
    return JSON.parse(result);
  } catch {
    return fallback;
  }
};

type SaveIntoStorageProps<T> = {
  key: StorageKey;
  data: T;
};

export const saveIntoStorage = <T>({ key, data }: SaveIntoStorageProps<T>) => {
  localStorage.setItem(key, JSON.stringify(data));
};
