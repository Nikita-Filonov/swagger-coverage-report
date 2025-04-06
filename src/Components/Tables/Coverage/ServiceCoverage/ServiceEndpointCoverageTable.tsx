import { FC } from 'react';
import { BaseTable } from '../../BaseTable';
import { useTableSorting } from '../../../../Services/Tables/Sorting';
import { ServiceEndpointCoverageTableHeader } from './ServiceEndpointCoverageTableHeader';
import { ServiceEndpointCoverageTableRow } from './ServiceEndpointCoverageTableRow';
import { ServiceEndpointCoverage } from '../../../../Models/Coverage/ServiceCoverage';

type Props = {
  endpoints: ServiceEndpointCoverage[];
  onServiceEndpointCoverageDetails: (endpoint: ServiceEndpointCoverage) => void;
};

export const ServiceEndpointCoverageTable: FC<Props> = (props) => {
  const { endpoints, onServiceEndpointCoverageDetails } = props;
  const { sortedItems, orderBy, setOrderBy, orderDirection, setOrderDirection } = useTableSorting({ items: endpoints });

  return (
    <BaseTable
      containerSx={{ mt: 3 }}
      header={
        <ServiceEndpointCoverageTableHeader
          orderBy={orderBy}
          setOrderBy={setOrderBy}
          orderDirection={orderDirection}
          setOrderDirection={setOrderDirection}
        />
      }>
      {sortedItems.map((endpoint, index) => (
        <ServiceEndpointCoverageTableRow
          key={index}
          endpoint={endpoint}
          onServiceEndpointCoverageDetails={onServiceEndpointCoverageDetails}
        />
      ))}
    </BaseTable>
  );
};
