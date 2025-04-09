import { BaseTableHeader } from '../../BaseTableHeader';
import { FC } from 'react';
import { OrderDirection } from '../../../../Services/Tables/Sorting';

type Props = {
  orderBy: string | null;
  setOrderBy: (orderBy: string | null) => void;
  orderDirection: OrderDirection;
  setOrderDirection: (direction: OrderDirection) => void;
};

export const ServiceEndpointCoverageTableHeader: FC<Props> = (props) => {
  const { orderBy, setOrderBy, orderDirection, setOrderDirection } = props;

  return (
    <BaseTableHeader
      cells={[
        { value: 'Method', orderKey: 'method' },
        { value: 'Endpoint', orderKey: 'name' },
        { value: 'Covered?', orderKey: 'coverage' },
        { value: 'Total cases', orderKey: 'totalCases' },
        { value: 'Total coverage', orderKey: 'totalCoverage' },
        { value: undefined, align: 'right' }
      ]}
      orderBy={orderBy}
      setOrderBy={setOrderBy}
      orderDirection={orderDirection}
      setOrderDirection={setOrderDirection}
    />
  );
};
