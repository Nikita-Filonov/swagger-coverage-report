import { BarPlot } from '@mui/x-charts/BarChart';
import {
  ChartsAxisHighlight,
  ChartsGrid,
  ChartsLegend,
  ChartsTooltip,
  ChartsXAxis,
  ChartsYAxis,
  ResponsiveChartContainer
} from '@mui/x-charts';
import { AxisValueFormatterContext } from '@mui/x-charts/internals';

interface BarChartYAxis {
  data: (null | number)[];
  label: string;
  color?: string;
}

interface BarChartXAxis<T> {
  data: T[];
  scaleType: 'time' | 'band';
  valueFormatter?: (value: T, context: AxisValueFormatterContext) => string;
}

type BaseLineChartProps<T> = {
  xAxis: BarChartXAxis<T>[];
  yAxis: BarChartYAxis[];
};

export const BaseBarChart = <T,>({ xAxis, yAxis }: BaseLineChartProps<T>) => {
  return (
    <ResponsiveChartContainer xAxis={xAxis} series={yAxis.map((axis) => ({ ...axis, type: 'bar' }))}>
      <BarPlot />
      <ChartsGrid vertical={true} horizontal={true} />
      <ChartsXAxis />
      <ChartsYAxis />
      <ChartsLegend />
      <ChartsTooltip />
      <ChartsAxisHighlight x={'band'} />
    </ResponsiveChartContainer>
  );
};
