import { FC } from 'react';
import { BaseListItem } from '../BaseListItem';
import CodeIcon from '@mui/icons-material/Code';
import { ServiceConfig } from '../../../Models/Config/Config';

type Props = {
  service: ServiceConfig;
  selected: boolean;
  onSelectService: (service: ServiceConfig) => void;
};

export const ServiceConfigListItem: FC<Props> = ({ service, selected, onSelectService }) => {
  const onSelect = () => onSelectService(service);

  return (
    <BaseListItem
      icon={<CodeIcon fontSize={'small'} />}
      title={service.name}
      subtitle={service.swaggerUrl || service.swaggerFile || ''}
      onClick={onSelect}
      selected={selected}
    />
  );
};
