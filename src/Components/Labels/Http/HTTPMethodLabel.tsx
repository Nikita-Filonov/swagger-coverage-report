import { HTTPMethod } from '../../../Models/Http';
import { FC } from 'react';
import { BaseLabel, LabelColor } from '../BaseLabel';
import { SxProps, Theme } from '@mui/material';

type Props = {
  sx?: SxProps<Theme>;
  method: HTTPMethod;
};

const MAP_HTTP_METHOD_COLOR: Record<HTTPMethod, LabelColor> = {
  [HTTPMethod.GET]: 'primary',
  [HTTPMethod.PUT]: 'warning',
  [HTTPMethod.POST]: 'success',
  [HTTPMethod.HEAD]: 'default',
  [HTTPMethod.PATCH]: 'secondary',
  [HTTPMethod.DELETE]: 'error',
  [HTTPMethod.OPTIONS]: 'default'
};

export const HTTPMethodLabel: FC<Props> = ({ sx, method }) => {
  return <BaseLabel sx={sx} label={method} color={MAP_HTTP_METHOD_COLOR[method]} />;
};
