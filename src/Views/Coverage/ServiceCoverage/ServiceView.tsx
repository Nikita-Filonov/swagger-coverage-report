import { Grid } from '@mui/material';
import { ServiceCoverageHistoryView } from './ServiceCoverageHistoryView';
import { ServiceCoverageView } from './ServiceCoverageView';

export const ServiceView = () => {
  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 12, md: 6 }} sx={{ display: 'flex', minWidth: 0 }}>
        <ServiceCoverageHistoryView />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }} sx={{ display: 'flex', minWidth: 0 }}>
        <ServiceCoverageView />
      </Grid>
    </Grid>
  );
};
