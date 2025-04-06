import { BoxView } from '../../../Components/Views/BoxView';
import { ServiceEndpointStatusCodeCoverage } from '../../../Models/Coverage/ServiceCoverage';
import { FC } from 'react';
import { EmptyView } from '../../../Components/Views/EmptyView';
import { ServiceEndpointStatusCodeCoverageListItem } from '../../../Components/ListItems/ServiceCoverage/ServiceEndpointStatusCodeCoverageListItem';

type Props = {
  codes: ServiceEndpointStatusCodeCoverage[];
};

export const ServiceEndpointStatusCodeCoverageView: FC<Props> = ({ codes }) => {
  return (
    <BoxView title={'Status codes'}>
      {codes.length === 0 && (
        <EmptyView title={'Empty status codes'} description={'This endpoint has no status codes to be covered'} />
      )}
      {codes.map((code, index) => (
        <ServiceEndpointStatusCodeCoverageListItem key={index} code={code} />
      ))}
    </BoxView>
  );
};
