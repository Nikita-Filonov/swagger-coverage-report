import { HTTPStatusCodeIcon } from '../../Icons/Http/HTTPStatusCodeIcon';
import { CoveredIcons } from '../../Icons/Coverage/CoveredIcons';
import { BaseListItem } from '../BaseListItem';
import { ServiceEndpointStatusCodeCoverage } from '../../../Models/Coverage/ServiceCoverage';
import { FC } from 'react';

type Props = {
  code: ServiceEndpointStatusCodeCoverage;
};

export const ServiceEndpointStatusCodeCoverageListItem: FC<Props> = ({ code }) => {
  return (
    <BaseListItem
      dense
      icon={<HTTPStatusCodeIcon code={code.value} />}
      title={`${code.value}`}
      subtitle={code.description || 'No description'}
      label={<CoveredIcons covered={code.covered} />}
    />
  );
};
