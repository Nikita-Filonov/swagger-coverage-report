import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { FC } from 'react';

type TotalCoverageIconsProps = {
  totalCoverage: number;
};

export const TotalCoverageIcons: FC<TotalCoverageIconsProps> = ({ totalCoverage }) => {
  return totalCoverage > 90 ? (
    <CheckCircleOutlineOutlinedIcon sx={{ ml: 1.5 }} fontSize={'small'} color={'success'} />
  ) : (
    <CancelOutlinedIcon sx={{ ml: 1.5 }} fontSize={'small'} color={'error'} />
  );
};
