import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { FC } from 'react';
import { SxProps } from '@mui/system';
import { Theme } from '@mui/material';

type CoveredIconsProps = {
  sx?: SxProps<Theme>;
  covered?: boolean;
};

export const CoveredIcons: FC<CoveredIconsProps> = ({ sx, covered }) => {
  return covered ? (
    <CheckCircleOutlineOutlinedIcon sx={sx} fontSize={'small'} color={'success'} />
  ) : (
    <CancelOutlinedIcon sx={sx} fontSize={'small'} color={'error'} />
  );
};
