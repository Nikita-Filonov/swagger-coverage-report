import { BaseTableRow } from '../../BaseTableRow';
import { FC } from 'react';
import { ServiceEndpointQueryParametersCoverage } from '../../../../Models/Coverage/ServiceCoverage';
import { CoverageIcons } from '../../../Icons/Coverage/CoverageIcons';

type Props = {
  parameter: ServiceEndpointQueryParametersCoverage;
};

export const ServiceEndpointQueryParametersCoverageTableRow: FC<Props> = ({ parameter }) => {
  return (
    <BaseTableRow cells={[{ value: parameter.name }, { value: <CoverageIcons coverage={parameter.coverage} /> }]} />
  );
};
