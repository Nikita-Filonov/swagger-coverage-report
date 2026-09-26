import { fireEvent, render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import { InitialStateProvider } from '../../Providers/InitialStateProvider';
import { ThemeProvider } from '../../Providers/ThemeProvider';
import { StorageKey } from '../../Services/Storage';
import { embedState, makeState } from '../../TestUtils/State';
import { ConfigView } from '../../Views/Config/ConfigView';
import { AppToolbarView } from './AppToolbarView';

const renderToolbar = () =>
  render(
    <ThemeProvider>
      <InitialStateProvider>
        <AppToolbarView />
        <ConfigView />
      </InitialStateProvider>
    </ThemeProvider>
  );

describe('AppToolbarView', () => {
  beforeEach(() => {
    localStorage.clear();
    vi.spyOn(HTMLElement.prototype, 'getBoundingClientRect').mockReturnValue(new DOMRect(10, 10, 100, 30));
  });
  afterEach(() => document.getElementById('state')?.remove());

  it('switches and persists both themes when no service is selected', () => {
    renderToolbar();
    expect(screen.getByText('Service not selected')).toBeInTheDocument();
    fireEvent.click(screen.getByTestId('DarkModeOutlinedIcon').closest('button')!);
    expect(JSON.parse(localStorage.getItem(StorageKey.ThemeMode) || '')).toBe('dark');
    fireEvent.click(screen.getByTestId('LightModeOutlinedIcon').closest('button')!);
    expect(JSON.parse(localStorage.getItem(StorageKey.ThemeMode) || '')).toBe('light');
  });

  it('opens, filters, selects and closes the service popover', async () => {
    embedState(makeState());
    renderToolbar();
    expect(screen.getByText('smoke')).toBeInTheDocument();
    expect(screen.getByText('Service repository: https://example.com/alpha')).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: 'Alpha' }));
    const search = screen.getByPlaceholderText('Search by name');
    fireEvent.click(screen.getByRole('button', { name: /Beta/ }));
    await waitForElementToBeRemoved(search);
    expect(screen.getByText('Service name: Beta')).toBeInTheDocument();
    expect(screen.queryByText('smoke')).not.toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: 'Beta' }));
    const reopened = screen.getByPlaceholderText('Search by name');
    fireEvent.keyDown(reopened, { key: 'Escape' });
    await waitForElementToBeRemoved(reopened);
  });
});
