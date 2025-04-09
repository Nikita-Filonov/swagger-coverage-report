import { ServiceEndpointCoverage } from '../../../Models/Coverage/ServiceCoverage';
import { FC } from 'react';
import { WidgetInfoRowsView } from '../../../Components/Views/WidgetInfoRowsView';
import { BaseInfoRowView } from '../../../Components/Views/BaseInfoRowView';
import { HTTPMethodLabel } from '../../../Components/Labels/Http/HTTPMethodLabel';
import { TotalCoverageIcons } from '../../../Components/Icons/Coverage/TotalCoverageIcons';
import { BaseTabs } from '../../../Components/Tabs/BaseTabs';
import { CoverageHistoryChartView } from '../../History/CoverageHistoryChartView';
import { BoxView } from '../../../Components/Views/BoxView';
import { ServiceEndpointCoverageView } from './ServiceEndpointCoverageView';
import { CoverageIcons } from '../../../Components/Icons/Coverage/CoverageIcons';

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
          name={'Covered?'}
          value={<CoverageIcons sx={{ ml: 1 }} coverage={endpoint.coverage} />}
          allowCopy={false}
        />
        <BaseInfoRowView
          name={'Request covered?'}
          value={<CoverageIcons sx={{ ml: 1 }} coverage={endpoint.requestCoverage} />}
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
            content: <ServiceEndpointCoverageView endpoint={endpoint} />
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
