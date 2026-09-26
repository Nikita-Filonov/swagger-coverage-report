import { fireEvent, render, screen } from '@testing-library/react';
import { InitialStateProvider, useInitialState } from '../../Providers/InitialStateProvider';
import { embedState, makeState } from '../../TestUtils/State';
import { ServiceConfigSelectionListView } from './ServiceConfigSelectionListView';

const SelectedService = () => <output>{useInitialState().service.name}</output>;

describe('service selection', () => {
  afterEach(() => document.getElementById('state')?.remove());

  it.each([true, false])('filters services and selects one with an optional callback: %s', (withCallback) => {
    embedState(makeState());
    const onSelect = withCallback ? vi.fn() : undefined;
    render(
      <InitialStateProvider>
        <ServiceConfigSelectionListView onSelectServiceConfigCallback={onSelect} />
        <SelectedService />
      </InitialStateProvider>
    );
    expect(screen.getByRole('status')).toHaveTextContent('Alpha');
    fireEvent.change(screen.getByPlaceholderText('Search by name'), { target: { value: 'BETA' } });
    expect(screen.queryByRole('button', { name: /Alpha/ })).not.toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: /Beta/ }));
    expect(screen.getByRole('status')).toHaveTextContent('Beta');
    if (onSelect) expect(onSelect).toHaveBeenCalledOnce();
  });

  it('shows an empty selection list when no services are configured', () => {
    render(
      <InitialStateProvider>
        <ServiceConfigSelectionListView />
      </InitialStateProvider>
    );
    expect(screen.getByText('Empty services')).toBeInTheDocument();
    expect(screen.queryByPlaceholderText('Search by name')).not.toBeInTheDocument();
  });
});
