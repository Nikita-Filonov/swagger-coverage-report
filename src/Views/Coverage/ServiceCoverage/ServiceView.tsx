import { Grid2 } from '@mui/material';
import { ServiceCoverageHistoryView } from './ServiceCoverageHistoryView';
import { ServiceCoverageView } from './ServiceCoverageView';

export const ServiceView = () => {
  return (
    <Grid2 container spacing={2}>
      <Grid2 size={{ xs: 12, md: 6 }}>
        <ServiceCoverageHistoryView />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 6 }}>
        <ServiceCoverageView />
      </Grid2>
    </Grid2>
  );
};
