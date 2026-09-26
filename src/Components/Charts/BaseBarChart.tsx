import { BarPlot } from '@mui/x-charts/BarChart';
import {
  ChartsAxisHighlight,
  ChartsGrid,
  ChartsTooltip,
  ChartsXAxis,
  ChartsYAxis,
  ChartsContainer
} from '@mui/x-charts';
import { AxisValueFormatterContext } from '@mui/x-charts/models';
import { Box } from '@mui/material';
import { ComponentProps, Fragment } from 'react';
import { BaseBarChartLegend } from './BaseBarChartLegend';

// Preserve the 168px drawing area, with 8px for the top tick label and 32px for the x-axis.
const CHART_HEIGHT = 208;

export interface BarChartYAxis {
  data?: (null | number)[];
  label: string;
  color?: string;
  stack?: 'total';
  dataKey?: string;
}

interface BarChartXAxis<T> {
  data?: T[];
  dataKey?: string;
  scaleType: 'time' | 'band';
  valueFormatter?: (value: T, context: AxisValueFormatterContext) => string;
}

type BaseLineChartProps<T> = {
  xAxis: BarChartXAxis<T>[];
  yAxis: BarChartYAxis[];
  dataset?: ComponentProps<typeof ChartsContainer>['dataset'];
};

export const BaseBarChart = <T,>({ xAxis, yAxis, dataset }: BaseLineChartProps<T>) => {
  return (
    <Fragment>
      <BaseBarChartLegend yAxis={yAxis} />
      <Box sx={{ height: CHART_HEIGHT }}>
        <ChartsContainer
          height={CHART_HEIGHT}
          xAxis={xAxis.map((axis) => ({ ...axis, height: 32 }))}
          yAxis={[{ width: 50 }]}
          margin={{ top: 8, left: 0, right: 50, bottom: 0 }}
          series={yAxis.map((axis) => ({ ...axis, type: 'bar' }))}
          dataset={dataset}>
          <BarPlot />
          <ChartsGrid vertical={true} horizontal={true} />
          <ChartsXAxis />
          <ChartsYAxis />
          <ChartsTooltip sx={{ zIndex: 2000 }} />
          <ChartsAxisHighlight x={'band'} />
        </ChartsContainer>
      </Box>
    </Fragment>
  );
};
