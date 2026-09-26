import { render, screen } from '@testing-library/react';
import { BaseChartView } from './BaseChartView';

describe('BaseChartView', () => {
  it('fills its grid cell and gives spare height to the chart content', () => {
    const { container } = render(
      <BaseChartView title="Coverage">
        <span>Chart</span>
      </BaseChartView>
    );
    expect(container.firstElementChild).toHaveStyle({
      display: 'flex',
      flexDirection: 'column',
      flexGrow: '1'
    });
    expect(screen.getByText('Chart').parentElement).toHaveStyle({ flexGrow: '1', marginTop: '16px' });
    expect(screen.getByText('Coverage')).toBeInTheDocument();
  });

  it('preserves custom container and content styles for individual charts', () => {
    const { container } = render(
      <BaseChartView
        title="Custom chart"
        containerSx={{ mt: 0 }}
        childrenSx={{ display: 'flex', alignItems: 'center' }}>
        <span>Custom content</span>
      </BaseChartView>
    );
    expect(container.firstElementChild).toHaveStyle({ marginTop: '0px', flexGrow: '1' });
    expect(screen.getByText('Custom content').parentElement).toHaveStyle({
      flexGrow: '1',
      display: 'flex',
      alignItems: 'center'
    });
  });
});
