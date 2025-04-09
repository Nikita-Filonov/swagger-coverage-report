import { FC, Fragment } from 'react';
import { BoxView } from '../../../Components/Views/BoxView';
import { ServiceEndpointQueryParametersCoverageTable } from '../../../Components/Tables/Coverage/ServiceCoverage/ServiceEndpointQueryParametersCoverageTable';
import { ServiceEndpointStatusCodeCoverageTable } from '../../../Components/Tables/Coverage/ServiceCoverage/ServiceEndpointStatusCodeCoverageTable';
import { ServiceEndpointCoverage } from '../../../Models/Coverage/ServiceCoverage';

type Props = {
  endpoint: ServiceEndpointCoverage;
};

export const ServiceEndpointCoverageView: FC<Props> = ({ endpoint }) => {
  return (
    <Fragment>
      {endpoint?.queryParameters?.length > 0 && (
        <BoxView title={'Query parameters'}>
          <ServiceEndpointQueryParametersCoverageTable parameters={endpoint.queryParameters} />
        </BoxView>
      )}
      {endpoint?.statusCodes?.length > 0 && (
        <BoxView title={'Status codes'}>
          <ServiceEndpointStatusCodeCoverageTable codes={endpoint.statusCodes} />
        </BoxView>
      )}
    </Fragment>
  );
};
