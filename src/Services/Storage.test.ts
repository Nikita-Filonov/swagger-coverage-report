import { loadFromStorage, saveIntoStorage, StorageKey } from './Storage';

describe('coverage report storage', () => {
  beforeEach(() => localStorage.clear());

  it('uses the fallback for missing or invalid saved data', () => {
    const fallback = { actions: ['CLICK'] };

    expect(loadFromStorage({ key: StorageKey.ThemeMode, fallback })).toEqual(fallback);

    localStorage.setItem(StorageKey.ThemeMode, '{invalid');
    expect(loadFromStorage({ key: StorageKey.ThemeMode, fallback })).toEqual(fallback);
  });

  it('round trips saved settings', () => {
    const settings = { badgeContentType: 'COUNT', enabled: true };

    saveIntoStorage({ key: StorageKey.ThemeMode, data: settings });

    expect(loadFromStorage({ key: StorageKey.ThemeMode, fallback: null })).toEqual(settings);
  });
});
