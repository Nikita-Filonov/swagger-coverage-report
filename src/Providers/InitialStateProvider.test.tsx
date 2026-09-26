import { act, render, renderHook, screen } from '@testing-library/react';
import { embedState, makeState, services } from '../TestUtils/State';
import { InitialStateProvider, useInitialState } from './InitialStateProvider';
import { useTheme } from './ThemeProvider';

const StateSummary = () => {
  const { service, services, serviceCoverage, createdAt } = useInitialState();
  return (
    <output>
      {service.key}:{services.length}:{serviceCoverage.endpoints.length}:{createdAt}
    </output>
  );
};

describe('InitialStateProvider', () => {
  afterEach(() => document.getElementById('state')?.remove());

  it('selects the first service with coverage and supports selecting a service with no report', () => {
    const state = makeState();
    state.config.services = [services[1], services[0]];
    embedState(state);
    const { result } = renderHook(useInitialState, { wrapper: InitialStateProvider });

    expect(result.current.service.key).toBe('alpha');
    expect(result.current.serviceCoverage.totalCoverage).toBe(50);
    expect(result.current.createdAt).toBe(state.createdAt);
    act(() => result.current.setService(services[1]));
    expect(result.current.service.key).toBe('beta');
    expect(result.current.serviceCoverage).toEqual({ endpoints: [], totalCoverage: 0, totalCoverageHistory: [] });
  });

  it('starts with empty coverage when the embedded state is missing', () => {
    render(
      <InitialStateProvider>
        <StateSummary />
      </InitialStateProvider>
    );
    expect(screen.getByRole('status')).toHaveTextContent(':0:0:');
  });

  it.each(['', 'invalid json', JSON.stringify({ config: {}, createdAt: '', servicesCoverage: {} })])(
    'starts with empty coverage for incomplete or invalid JSON: %s',
    (json) => {
      embedState(json);
      render(
        <InitialStateProvider>
          <StateSummary />
        </InitialStateProvider>
      );
      expect(screen.getByRole('status')).toHaveTextContent(':0:0:');
    }
  );

  it('leaves the selection empty when all services have zero coverage', () => {
    const state = makeState();
    state.servicesCoverage.alpha.totalCoverage = 0;
    embedState(state);
    render(
      <InitialStateProvider>
        <StateSummary />
      </InitialStateProvider>
    );
    expect(screen.getByRole('status')).toHaveTextContent(':2:0:');
  });

  it.each([useInitialState, useTheme])('rejects hooks called outside their providers', (hook) => {
    vi.spyOn(console, 'error').mockImplementation(() => undefined);
    expect(() => renderHook<unknown, unknown>(hook)).toThrow(/called outside/);
  });
});
