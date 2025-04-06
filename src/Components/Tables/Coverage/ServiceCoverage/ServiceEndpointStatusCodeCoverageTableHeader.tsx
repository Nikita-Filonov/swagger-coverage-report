import { BaseTableHeader } from '../../BaseTableHeader';
import { FC } from 'react';
import { OrderDirection } from '../../../../Services/Tables/Sorting';

type Props = {
  orderBy: string | null;
  setOrderBy: (orderBy: string | null) => void;
  orderDirection: OrderDirection;
  setOrderDirection: (direction: OrderDirection) => void;
};

export const ServiceEndpointStatusCodeCoverageTableHeader: FC<Props> = (props) => {
  const { orderBy, setOrderBy, orderDirection, setOrderDirection } = props;

  return (
    <BaseTableHeader
      cells={[
        { value: 'Status code', orderKey: 'value' },
        { value: 'Covered?', orderKey: 'covered' },
        { value: 'Total cases', orderKey: 'totalCases' },
        { value: 'Description', orderKey: 'description' }
      ]}
      orderBy={orderBy}
      setOrderBy={setOrderBy}
      orderDirection={orderDirection}
      setOrderDirection={setOrderDirection}
    />
  );
};
