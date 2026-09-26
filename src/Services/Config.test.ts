import { SettingsManager } from './Config';

describe('SettingsManager', () => {
  afterEach(() => {
    vi.unstubAllEnvs();
    SettingsManager.setup();
  });

  it('uses working defaults when no Vite settings are provided', () => {
    vi.stubEnv('VITE_REPOSITORY_URL', '');
    vi.stubEnv('VITE_API_DATE_FORMAT', '');
    vi.stubEnv('VITE_API_TIME_FORMAT', '');

    SettingsManager.setup();

    expect(SettingsManager.getStaticFileUrl('logo.png')).toBe(
      'https://raw.githubusercontent.com/Nikita-Filonov/swagger-coverage-report/main/static/logo.png'
    );
    expect(SettingsManager.apiDateTimeFormat).toBe('YYYY-MM-DD HH:mm');
  });
});
