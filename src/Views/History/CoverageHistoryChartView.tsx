import { BaseChartView } from '../../Components/Charts/BaseChartView';
import { FC, useMemo } from 'react';
import dayjs from 'dayjs';
import { dateTimeValueFormatter } from '../../Services/Charts/Utils';
import { CoverageHistory } from '../../Models/History/CoverageHistory';
import { green } from '@mui/material/colors';
import { BaseBarChart } from '../../Components/Charts/BaseBarChart';

type CoverageHistoryChartViewProps = {
  title: string;
  history: CoverageHistory[];
};

export const CoverageHistoryChartView: FC<CoverageHistoryChartViewProps> = ({ title, history }) => {
  const datetimeData = useMemo(() => history.map((item) => dayjs(item.createdAt).toDate()), [history]);

  return (
    <BaseChartView title={title}>
      <BaseBarChart
        xAxis={[{ data: datetimeData, scaleType: 'band', valueFormatter: dateTimeValueFormatter }]}
        yAxis={[
          {
            data: history.map((item) => item.totalCoverage),
            label: 'Total coverage',
            color: green['500']
          }
        ]}
      />
    </BaseChartView>
  );
};
