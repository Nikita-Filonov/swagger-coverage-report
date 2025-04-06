import CircleIcon from '@mui/icons-material/Circle';
import { getStatusCodeColor } from '../../../Services/Http/Utils';
import { FC } from 'react';

type Props = {
  code: number;
};

export const HTTPStatusCodeIcon: FC<Props> = ({ code }) => {
  return <CircleIcon color={getStatusCodeColor(code)} />;
};
