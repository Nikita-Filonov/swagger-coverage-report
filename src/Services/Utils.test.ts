import { dateTimeValueFormatter } from './Charts/Utils';
import { getCoverageColor } from './Coverage/Utils';
import { getStatusCodeColor } from './Http/Utils';
import { SettingsManager } from './Config';

describe('coverage colors', () => {
  it.each([
    [0, 'error'],
    [29, 'error'],
    [30, 'warning'],
    [59, 'warning'],
    [60, 'success'],
    [100, 'success']
  ])('maps %s percent to %s', (coverage, color) => expect(getCoverageColor(Number(coverage))).toBe(color));
});

describe('HTTP status colors', () => {
  it.each([
    [99, 'success'],
    [100, 'success'],
    [199, 'success'],
    [200, 'success'],
    [299, 'success'],
    [300, 'warning'],
    [399, 'warning'],
    [400, 'error'],
    [499, 'error'],
    [500, 'error'],
    [599, 'error'],
    [600, 'success']
  ])('maps status %s to %s', (code, color) => expect(getStatusCodeColor(Number(code))).toBe(color));
});

it('formats report dates using the configured date and time formats', () => {
  vi.spyOn(SettingsManager, 'apiDateTimeFormat', 'get').mockReturnValue('YYYY-MM-DD HH:mm');
  expect(dateTimeValueFormatter(new Date(2026, 8, 26, 10, 30))).toBe('2026-09-26 10:30');
});
