import CircleIcon from '@mui/icons-material/Circle';
import { getStatusCodeColor } from '../../../Services/Http/Utils';
import { FC } from 'react';
import { SxProps, Theme } from '@mui/material';

type Props = {
  sx?: SxProps<Theme>;
  code: number;
};

export const HTTPStatusCodeIcon: FC<Props> = ({ sx, code }) => {
  return <CircleIcon sx={sx} color={getStatusCodeColor(code)} />;
};
