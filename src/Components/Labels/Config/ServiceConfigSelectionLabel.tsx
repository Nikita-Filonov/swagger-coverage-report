import { FC, MouseEvent } from 'react';
import { BaseLabel } from '../BaseLabel';
import CodeIcon from '@mui/icons-material/Code';
import { useInitialState } from '../../../Providers/InitialStateProvider';

type Props = {
  onSelectServiceConfig: (event: MouseEvent<HTMLDivElement>) => void;
};

export const ServiceConfigSelectionLabel: FC<Props> = ({ onSelectServiceConfig }) => {
  const { service } = useInitialState();

  return (
    <BaseLabel
      icon={<CodeIcon />}
      color={service.key ? 'success' : 'warning'}
      label={service.key ? service.name : 'Service not selected'}
      onClick={onSelectServiceConfig}
    />
  );
};
