import { BaseTableCell } from '../../BaseTableCell';
import { FC } from 'react';
import { HTTPStatusCodeIcon } from '../../../Icons/Http/HTTPStatusCodeIcon';

type Props = {
  code: number;
};

export const StatusCodeCell: FC<Props> = ({ code }) => {
  return <BaseTableCell text={`${code}`} icon={<HTTPStatusCodeIcon sx={{ mr: 1.5 }} code={code} />} />;
};
