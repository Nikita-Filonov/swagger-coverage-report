import { fireEvent, render, screen, waitForElementToBeRemoved, within } from '@testing-library/react';
import { InitialStateProvider } from '../../../Providers/InitialStateProvider';
import { embedState, makeState } from '../../../TestUtils/State';
import { ServiceEndpointsCoverageView } from './ServiceEndpointsCoverageView';

vi.mock('../../../Components/Charts/BaseBarChart', () => ({
  BaseBarChart: ({ yAxis }: { yAxis: { data: number[] }[] }) => (
    <output data-testid="history-values">{yAxis[0].data.join(',')}</output>
  )
}));

describe('endpoint coverage', () => {
  afterEach(() => document.getElementById('state')?.remove());

  it('filters endpoints by name or method, sorts rows and shows detailed coverage and history', async () => {
    embedState(makeState());
    render(
      <InitialStateProvider>
        <ServiceEndpointsCoverageView />
      </InitialStateProvider>
    );
    const search = screen.getByPlaceholderText('Search by method or endpoint name');
    expect(screen.getByText('Total results: 2')).toBeInTheDocument();
    fireEvent.change(search, { target: { value: 'USERS' } });
    expect(screen.getByText('Total results: 1')).toBeInTheDocument();
    expect(screen.queryByText('/health')).not.toBeInTheDocument();
    fireEvent.change(search, { target: { value: 'get' } });
    expect(screen.getByText('Total results: 2')).toBeInTheDocument();
    fireEvent.change(search, { target: { value: 'missing' } });
    expect(screen.getByText('Total results: 0')).toBeInTheDocument();
    fireEvent.change(search, { target: { value: '' } });

    fireEvent.click(screen.getByText('Total cases'));
    expect(screen.getAllByRole('row')[1]).toHaveTextContent('/users');
    fireEvent.click(screen.getByText('Total cases'));
    expect(screen.getAllByRole('row')[1]).toHaveTextContent('/health');
    const userRow = screen.getByText('/users').closest('tr')!;
    fireEvent.click(within(userRow).getByRole('button'));
    const dialog = screen.getByRole('dialog', { name: 'Endpoint coverage details' });
    expect(within(dialog).getByText('List users')).toBeInTheDocument();
    expect(within(dialog).getByText('limit')).toBeInTheDocument();
    expect(within(dialog).getByText('offset')).toBeInTheDocument();
    expect(within(dialog).getByText('200')).toBeInTheDocument();
    expect(within(dialog).getByText('404')).toBeInTheDocument();
    expect(within(dialog).getByText('Users returned')).toBeInTheDocument();
    fireEvent.click(within(dialog).getByText('Name'));
    fireEvent.click(within(dialog).getByText('Status code'));
    fireEvent.click(within(dialog).getByRole('tab', { name: 'History' }));
    expect(within(dialog).getByTestId('history-values')).toHaveTextContent('75');
    fireEvent.click(within(dialog).getByRole('button', { name: 'Cancel' }));
    await waitForElementToBeRemoved(dialog);

    fireEvent.click(within(screen.getByText('/health').closest('tr')!).getByRole('button'));
    const emptyDialog = screen.getByRole('dialog', { name: 'Endpoint coverage details' });
    expect(within(emptyDialog).queryByText('Query parameters')).not.toBeInTheDocument();
    expect(within(emptyDialog).queryByText('Status codes')).not.toBeInTheDocument();
    fireEvent.click(within(emptyDialog).getByRole('tab', { name: 'History' }));
    expect(within(emptyDialog).getByTestId('history-values')).toBeEmptyDOMElement();
    fireEvent.keyDown(emptyDialog, { key: 'Escape' });
    await waitForElementToBeRemoved(emptyDialog);
  });
});
