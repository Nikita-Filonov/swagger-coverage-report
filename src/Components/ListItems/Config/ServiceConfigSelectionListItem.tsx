import { FC } from 'react';
import { BaseListItem } from '../BaseListItem';
import CodeIcon from '@mui/icons-material/Code';
import { ServiceConfig } from '../../../Models/Config/Config';
import { ServiceConfigTagsLabel } from '../../Labels/Config/ServiceConfigTagsLabel';

type Props = {
  service: ServiceConfig;
  selected: boolean;
  onSelectServiceConfig: (service: ServiceConfig) => void;
};

export const ServiceConfigSelectionListItem: FC<Props> = ({ service, selected, onSelectServiceConfig }) => {
  const onSelect = () => onSelectServiceConfig(service);

  return (
    <BaseListItem
      dense
      icon={<CodeIcon fontSize={'small'} />}
      label={<ServiceConfigTagsLabel service={service} />}
      title={service.name}
      subtitle={service.swaggerUrl || service.swaggerFile || ''}
      onClick={onSelect}
      selected={selected}
    />
  );
};
