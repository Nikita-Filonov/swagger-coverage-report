import { FC } from 'react';
import { BaseTable } from '../../BaseTable';
import { useTableSorting } from '../../../../Services/Tables/Sorting';
import { ServiceEndpointStatusCodeCoverage } from '../../../../Models/Coverage/ServiceCoverage';
import { ServiceEndpointStatusCodeCoverageTableHeader } from './ServiceEndpointStatusCodeCoverageTableHeader';
import { ServiceEndpointStatusCodeCoverageTableRow } from './ServiceEndpointStatusCodeCoverageTableRow';

type Props = {
  codes: ServiceEndpointStatusCodeCoverage[];
};

export const ServiceEndpointStatusCodeCoverageTable: FC<Props> = ({ codes }) => {
  const { sortedItems, orderBy, setOrderBy, orderDirection, setOrderDirection } = useTableSorting({ items: codes });

  return (
    <BaseTable
      containerSx={{ mt: 3 }}
      header={
        <ServiceEndpointStatusCodeCoverageTableHeader
          orderBy={orderBy}
          setOrderBy={setOrderBy}
          orderDirection={orderDirection}
          setOrderDirection={setOrderDirection}
        />
      }>
      {sortedItems.map((code, index) => (
        <ServiceEndpointStatusCodeCoverageTableRow key={index} code={code} />
      ))}
    </BaseTable>
  );
};
