import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import BlockIcon from '@mui/icons-material/Block';
import { FC } from 'react';
import { SxProps } from '@mui/system';
import { Theme } from '@mui/material';
import { ServiceEndpointCoverageStatus } from '../../../Models/Coverage/ServiceCoverage';

type Props = {
  sx?: SxProps<Theme>;
  coverage: ServiceEndpointCoverageStatus;
};

export const CoverageIcons: FC<Props> = ({ sx, coverage }) => {
  switch (coverage) {
    case ServiceEndpointCoverageStatus.Covered:
      return <CheckCircleOutlineOutlinedIcon sx={sx} fontSize={'small'} color={'success'} />;
    case ServiceEndpointCoverageStatus.Uncovered:
      return <CancelOutlinedIcon sx={sx} fontSize={'small'} color={'error'} />;
    case ServiceEndpointCoverageStatus.Missing:
      return <BlockIcon sx={sx} fontSize={'small'} color={'info'} />;
  }
};
