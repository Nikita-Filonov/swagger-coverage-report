import { BaseTableRow } from '../../BaseTableRow';
import { FC } from 'react';
import { ServiceEndpointStatusCodeCoverage } from '../../../../Models/Coverage/ServiceCoverage';
import { CoveredIcons } from '../../../Icons/Coverage/CoveredIcons';
import { StatusCodeCell } from './StatusCodeCell';

type Props = {
  code: ServiceEndpointStatusCodeCoverage;
};

export const ServiceEndpointStatusCodeCoverageTableRow: FC<Props> = ({ code }) => {
  return (
    <BaseTableRow
      cells={[
        { value: <StatusCodeCell code={code.value} /> },
        { value: <CoveredIcons covered={code.covered} /> },
        { value: code.totalCases },
        { value: code.description }
      ]}
    />
  );
};
