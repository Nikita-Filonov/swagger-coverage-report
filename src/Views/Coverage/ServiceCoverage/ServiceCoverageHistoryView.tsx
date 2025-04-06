import { useInitialState } from '../../../Providers/InitialStateProvider';
import { CoverageHistoryChartView } from '../../History/CoverageHistoryChartView';

export const ServiceCoverageHistoryView = () => {
  const { serviceCoverage } = useInitialState();

  return (
    <CoverageHistoryChartView title={'Total service coverage history'} history={serviceCoverage.totalCoverageHistory} />
  );
};
