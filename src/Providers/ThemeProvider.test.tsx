import { act, renderHook } from '@testing-library/react';
import { useTheme as useMuiTheme } from '@mui/material';
import { ThemeMode } from '../Models/Core/Theme';
import { StorageKey } from '../Services/Storage';
import { ThemeProvider, useTheme } from './ThemeProvider';

describe('ThemeProvider', () => {
  beforeEach(() => localStorage.clear());

  it('starts in light mode and persists toggles in both directions', () => {
    const { result } = renderHook(() => ({ controls: useTheme(), theme: useMuiTheme() }), {
      wrapper: ThemeProvider
    });

    expect(result.current.theme.palette.mode).toBe('light');
    act(() => result.current.controls.onThemeMode());
    expect(result.current.controls.themeMode).toBe(ThemeMode.Dark);
    expect(result.current.theme.palette.mode).toBe('dark');
    expect(JSON.parse(localStorage.getItem(StorageKey.ThemeMode) || '')).toBe('dark');

    act(() => result.current.controls.onThemeMode());
    expect(result.current.theme.palette.mode).toBe('light');
    expect(JSON.parse(localStorage.getItem(StorageKey.ThemeMode) || '')).toBe('light');
  });

  it('restores the previously selected theme', () => {
    localStorage.setItem(StorageKey.ThemeMode, JSON.stringify(ThemeMode.Dark));
    const { result } = renderHook(useTheme, { wrapper: ThemeProvider });

    expect(result.current.themeMode).toBe(ThemeMode.Dark);
  });
});
