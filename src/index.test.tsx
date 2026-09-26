import { render, screen } from '@testing-library/react';
import { createRoot, Root } from 'react-dom/client';
import { embedState, makeState } from './TestUtils/State';

vi.mock('react-dom/client', async (importOriginal) => ({
  ...(await importOriginal<typeof import('react-dom/client')>()),
  createRoot: vi.fn()
}));
vi.mock('./Components/Charts/BaseBarChart', () => ({ BaseBarChart: () => <div>History bars</div> }));

it('mounts the standalone Swagger report with its embedded backend state', async () => {
  const container = document.createElement('div');
  container.id = 'root';
  document.body.appendChild(container);
  embedState(makeState());
  const root = { render: vi.fn() };
  vi.mocked(createRoot).mockReturnValue(root as unknown as Root);
  try {
    await import('./index');
    expect(createRoot).toHaveBeenCalledWith(container);
    render(root.render.mock.calls[0][0]);
    expect(screen.getByText('Swagger coverage report')).toBeInTheDocument();
    expect(screen.getByText('Config')).toBeInTheDocument();
    expect(screen.getByText('Total service coverage history')).toBeInTheDocument();
    expect(screen.getByText('50% / 100%')).toBeInTheDocument();
    expect(screen.getByText('/users')).toBeInTheDocument();
  } finally {
    document.getElementById('state')?.remove();
    container.remove();
  }
});
