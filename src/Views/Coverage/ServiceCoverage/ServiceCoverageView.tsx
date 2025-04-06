import { useInitialState } from '../../../Providers/InitialStateProvider';
import { BaseGaugeChart } from '../../../Components/Charts/BaseGaugeChart';
import { getCoverageColor } from '../../../Services/Coverage/Utils';
import { BaseChartView } from '../../../Components/Charts/BaseChartView';

export const ServiceCoverageView = () => {
  const { serviceCoverage } = useInitialState();

  return (
    <BaseChartView title={'Total service coverage'}>
      <BaseGaugeChart
        value={serviceCoverage.totalCoverage}
        color={getCoverageColor(serviceCoverage.totalCoverage)}
        height={200}
        maxValue={100}
      />
    </BaseChartView>
  );
};
