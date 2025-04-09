import { BaseTableRow } from '../../BaseTableRow';
import { FC } from 'react';
import { ServiceEndpointStatusCodeCoverage } from '../../../../Models/Coverage/ServiceCoverage';
import { StatusCodeCell } from './StatusCodeCell';
import { CoverageIcons } from '../../../Icons/Coverage/CoverageIcons';

type Props = {
  code: ServiceEndpointStatusCodeCoverage;
};

export const ServiceEndpointStatusCodeCoverageTableRow: FC<Props> = ({ code }) => {
  return (
    <BaseTableRow
      cells={[
        { value: <StatusCodeCell code={code.value} /> },
        { value: <CoverageIcons coverage={code.responseCoverage} /> },
        { value: <CoverageIcons coverage={code.statusCodeCoverage} /> },
        { value: code.totalCases },
        { value: code.description }
      ]}
    />
  );
};
