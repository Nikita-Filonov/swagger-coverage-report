import { ServiceEndpointCoverage } from '../../../Models/Coverage/ServiceCoverage';
import { FC } from 'react';
import { WidgetInfoRowsView } from '../../../Components/Views/WidgetInfoRowsView';
import { BaseInfoRowView } from '../../../Components/Views/BaseInfoRowView';
import { HTTPMethodLabel } from '../../../Components/Labels/Http/HTTPMethodLabel';
import { CoveredIcons } from '../../../Components/Icons/Coverage/CoveredIcons';
import { TotalCoverageIcons } from '../../../Components/Icons/Coverage/TotalCoverageIcons';
import { BaseTabs } from '../../../Components/Tabs/BaseTabs';
import { ServiceEndpointStatusCodeCoverageView } from './ServiceEndpointStatusCodeCoverageView';
import { CoverageHistoryChartView } from '../../History/CoverageHistoryChartView';
import { BoxView } from '../../../Components/Views/BoxView';

type Props = {
  endpoint: ServiceEndpointCoverage;
};

export const ServiceEndpointCoverageDetailsView: FC<Props> = ({ endpoint }) => {
  return (
    <BoxView title={endpoint.summary || ''} containerSx={{ mt: 0 }}>
      <WidgetInfoRowsView>
        <BaseInfoRowView
          name={'Method'}
          value={<HTTPMethodLabel sx={{ ml: 1 }} method={endpoint.method} />}
          allowCopy={false}
        />
        <BaseInfoRowView name={'Endpoint'} value={endpoint.name} />
        <BaseInfoRowView
          name={'Covered'}
          value={<CoveredIcons sx={{ ml: 1 }} covered={endpoint.covered} />}
          allowCopy={false}
        />
        <BaseInfoRowView name={'Total cases'} value={endpoint.totalCases} />
        <BaseInfoRowView
          name={'Total coverage'}
          icon={<TotalCoverageIcons totalCoverage={endpoint.totalCoverage} />}
          value={`${endpoint.totalCoverage}%`}
          allowCopy={false}
        />
      </WidgetInfoRowsView>
      <BaseTabs
        tabs={[
          {
            label: 'Coverage',
            content: <ServiceEndpointStatusCodeCoverageView codes={endpoint.statusCodes} />
          },
          {
            label: 'History',
            content: (
              <CoverageHistoryChartView
                title={'Endpoint total coverage history'}
                history={endpoint?.totalCoverageHistory || []}
              />
            )
          }
        ]}
      />
    </BoxView>
  );
};
