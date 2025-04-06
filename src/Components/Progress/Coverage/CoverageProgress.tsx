import { BaseProgress } from '../BaseProgress';
import { FC } from 'react';
import { getCoverageColor } from '../../../Services/Coverage/Utils';

type Props = {
  value: number;
};

export const CoverageProgress: FC<Props> = (props) => {
  const { value } = props;

  return <BaseProgress value={value} color={getCoverageColor(value)} />;
};
