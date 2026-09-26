import { render, screen } from '@testing-library/react';
import { BaseBarChart } from './BaseBarChart';
import { BaseGaugeChart } from './BaseGaugeChart';
import { CoverageHistoryChartView } from '../../Views/History/CoverageHistoryChartView';

describe('charts', () => {
  it('renders the history bars and legend from report data', () => {
    render(
      <CoverageHistoryChartView
        title="Coverage history"
        history={[
          { createdAt: '2026-09-25T10:30:00', totalCoverage: 25 },
          { createdAt: '2026-09-26T10:30:00', totalCoverage: 75 }
        ]}
      />
    );
    expect(screen.getByText('Coverage history')).toBeInTheDocument();
    expect(screen.getByText('Total coverage')).toBeInTheDocument();
  });

  it('renders empty history without errors', () => {
    render(<BaseBarChart xAxis={[{ data: [], scaleType: 'band' }]} yAxis={[{ data: [], label: 'Coverage' }]} />);
    expect(screen.getByText('Coverage')).toBeInTheDocument();
  });

  it.each(['error', 'warning', 'success'] as const)('renders a %s gauge with the current percent', (color) => {
    render(<BaseGaugeChart value={50} color={color} height={200} maxValue={100} />);
    expect(screen.getByText('50% / 100%')).toBeInTheDocument();
  });

  it('allows a custom gauge text size', () => {
    render(<BaseGaugeChart value={90} color="success" height={200} maxValue={100} fontSize={24} />);
    expect(screen.getByText('90% / 100%')).toBeInTheDocument();
  });
});
