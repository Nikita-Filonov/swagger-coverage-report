import { FC } from 'react';
import { BaseTable } from '../../BaseTable';
import { useTableSorting } from '../../../../Services/Tables/Sorting';
import { ServiceEndpointQueryParametersCoverage } from '../../../../Models/Coverage/ServiceCoverage';
import { ServiceEndpointQueryParametersCoverageTableRow } from './ServiceEndpointQueryParametersCoverageTableRow';
import { ServiceEndpointQueryParametersCoverageTableHeader } from './ServiceEndpointQueryParametersCoverageTableHeader';

type Props = {
  parameters: ServiceEndpointQueryParametersCoverage[];
};

export const ServiceEndpointQueryParametersCoverageTable: FC<Props> = ({ parameters }) => {
  const { sortedItems, orderBy, setOrderBy, orderDirection, setOrderDirection } = useTableSorting({
    items: parameters
  });

  return (
    <BaseTable
      containerSx={{ mt: 3 }}
      header={
        <ServiceEndpointQueryParametersCoverageTableHeader
          orderBy={orderBy}
          setOrderBy={setOrderBy}
          orderDirection={orderDirection}
          setOrderDirection={setOrderDirection}
        />
      }>
      {sortedItems.map((parameter, index) => (
        <ServiceEndpointQueryParametersCoverageTableRow key={index} parameter={parameter} />
      ))}
    </BaseTable>
  );
};
