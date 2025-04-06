import * as React from 'react';
import { FC } from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { OverridableStringUnion } from '@mui/types';
import { LinearProgressPropsColorOverrides } from '@mui/material/LinearProgress/LinearProgress';

export type ProgressColor = OverridableStringUnion<
  'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning' | 'inherit',
  LinearProgressPropsColorOverrides
>;

type BaseProgressProps = {
  value: number;
  color?: ProgressColor;
};

export const BaseProgress: FC<BaseProgressProps> = ({ value, color }) => {
  return (
    <Box sx={{ width: 250 }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ width: '100%', mr: 1 }}>
          <LinearProgress sx={{ height: 10, borderRadius: 2 }} color={color} variant="determinate" value={value} />
        </Box>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>{`${Math.round(value)}%`}</Typography>
      </Box>
    </Box>
  );
};
