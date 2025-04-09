import { BaseTableRow } from '../../BaseTableRow';
import { FC } from 'react';
import { CoverageProgress } from '../../../Progress/Coverage/CoverageProgress';
import { ServiceEndpointCoverage } from '../../../../Models/Coverage/ServiceCoverage';
import { HTTPMethodLabel } from '../../../Labels/Http/HTTPMethodLabel';
import IconButton from '@mui/material/IconButton';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import { CoverageIcons } from '../../../Icons/Coverage/CoverageIcons';

type Props = {
  endpoint: ServiceEndpointCoverage;
  onServiceEndpointCoverageDetails: (endpoint: ServiceEndpointCoverage) => void;
};

export const ServiceEndpointCoverageTableRow: FC<Props> = (props) => {
  const { endpoint, onServiceEndpointCoverageDetails } = props;

  const onDetails = () => onServiceEndpointCoverageDetails(endpoint);

  return (
    <BaseTableRow
      cells={[
        { value: <HTTPMethodLabel method={endpoint.method} /> },
        { value: endpoint.name },
        { value: <CoverageIcons coverage={endpoint.coverage} /> },
        { value: endpoint.totalCases },
        { value: <CoverageProgress value={endpoint.totalCoverage || 0} /> },
        {
          align: 'right',
          value: (
            <IconButton size={'small'} onClick={onDetails}>
              <ArticleOutlinedIcon fontSize={'small'} />
            </IconButton>
          )
        }
      ]}
    />
  );
};
