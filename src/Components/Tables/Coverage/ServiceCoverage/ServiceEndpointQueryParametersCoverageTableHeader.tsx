import { BaseTableHeader } from '../../BaseTableHeader';
import { FC } from 'react';
import { OrderDirection } from '../../../../Services/Tables/Sorting';

type Props = {
  orderBy: string | null;
  setOrderBy: (orderBy: string | null) => void;
  orderDirection: OrderDirection;
  setOrderDirection: (direction: OrderDirection) => void;
};

export const ServiceEndpointQueryParametersCoverageTableHeader: FC<Props> = (props) => {
  const { orderBy, setOrderBy, orderDirection, setOrderDirection } = props;

  return (
    <BaseTableHeader
      cells={[
        { value: 'Name', orderKey: 'name' },
        { value: 'Covered?', orderKey: 'coverage' }
      ]}
      orderBy={orderBy}
      setOrderBy={setOrderBy}
      orderDirection={orderDirection}
      setOrderDirection={setOrderDirection}
    />
  );
};
