import { render, screen, within } from '@testing-library/react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { InitialStateProvider } from '../../../Providers/InitialStateProvider';
import { embedState, makeState } from '../../../TestUtils/State';
import { ServiceView } from './ServiceView';

describe('service chart layout', () => {
  afterEach(() => document.getElementById('state')?.remove());

  for (const mode of ['light', 'dark'] as const) {
    it.each([false, true])(`stretches chart cards in ${mode} mode with empty history: %s`, (emptyHistory) => {
      const state = makeState();
      if (emptyHistory) state.servicesCoverage.alpha.totalCoverageHistory = [];
      embedState(state);
      render(
        <ThemeProvider theme={createTheme({ palette: { mode } })}>
          <InitialStateProvider>
            <ServiceView />
          </InitialStateProvider>
        </ThemeProvider>
      );

      const historyCard = screen.getByText('Total service coverage history').closest<HTMLElement>('.MuiPaper-root')!;
      const gaugeCard = screen.getByText('Total service coverage').closest<HTMLElement>('.MuiPaper-root')!;
      const row = historyCard.parentElement!.parentElement!;

      expect(row).toHaveStyle({ flexWrap: 'wrap' });
      for (const card of [historyCard, gaugeCard]) {
        expect(card.parentElement).toHaveStyle({ display: 'flex' });
        expect(card).toHaveStyle({ display: 'flex', flexDirection: 'column', flexGrow: '1' });
        expect(card.lastElementChild).toHaveStyle({ flexGrow: '1' });
      }
      expect(gaugeCard.lastElementChild).toHaveStyle({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      });
      expect(within(gaugeCard).getByText('50% / 100%')).toBeInTheDocument();
      expect(within(historyCard).getByText('Total coverage')).toBeInTheDocument();
    });
  }
});
