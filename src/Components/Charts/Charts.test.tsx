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

  it.each([{ data: [] }, { data: [25, 75] }])(
    'preserves the drawing area below the legend for data $data',
    ({ data }) => {
      const { container } = render(
        <BaseBarChart
          xAxis={[{ data: data.map((_, index) => index), scaleType: 'band' }]}
          yAxis={[{ data, label: 'Coverage' }]}
        />
      );
      const legend = container.firstElementChild!;
      const plot = legend.nextElementSibling!;
      expect(legend).toContainElement(screen.getByText('Coverage'));
      expect(plot).toHaveStyle({ height: '208px' });
      const verticalAxis = plot.querySelector('.MuiChartsAxis-directionY .MuiChartsAxis-line')!;
      expect(verticalAxis).toBeInTheDocument();
      expect(Number(verticalAxis.getAttribute('y1'))).toBeGreaterThanOrEqual(8);
      expect(Math.abs(Number(verticalAxis.getAttribute('y2')) - Number(verticalAxis.getAttribute('y1')))).toBe(168);
    }
  );

  it.each(['error', 'warning', 'success'] as const)('renders a %s gauge with the current percent', (color) => {
    render(<BaseGaugeChart value={50} color={color} height={200} maxValue={100} />);
    expect(screen.getByText('50% / 100%')).toBeInTheDocument();
  });

  it('allows a custom gauge text size', () => {
    render(<BaseGaugeChart value={90} color="success" height={200} maxValue={100} fontSize={24} />);
    expect(screen.getByText('90% / 100%')).toBeInTheDocument();
  });

  it('does not add vertical margins that offset the gauge inside a centered container', () => {
    const { container } = render(<BaseGaugeChart value={65} color="success" height={200} maxValue={100} />);
    const gauge = container.querySelector('.MuiGauge-root')!;
    const styles = getComputedStyle(gauge);
    expect(styles.marginTop).toMatch(/^(0(px)?|)$/);
    expect(styles.marginBottom).toMatch(/^(0(px)?|)$/);
  });
});
