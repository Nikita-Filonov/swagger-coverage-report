import { BoxView } from '../../Components/Views/BoxView';
import { List } from '@mui/material';
import { useInitialState } from '../../Providers/InitialStateProvider';
import { EmptyView } from '../../Components/Views/EmptyView';
import { SearchTextField } from '../../Components/TextFields/SearchTextField';
import { FC, useMemo, useState } from 'react';
import { ServiceConfig } from '../../Models/Config/Config';
import { ServiceConfigSelectionListItem } from '../../Components/ListItems/Config/ServiceConfigSelectionListItem';

type Props = {
  onSelectServiceConfigCallback?: () => void;
};

export const ServiceConfigSelectionListView: FC<Props> = ({ onSelectServiceConfigCallback }) => {
  const { service, services, setService } = useInitialState();
  const [search, setSearch] = useState('');

  const filteredServices = useMemo(
    () => services.filter((service) => service.name.toLowerCase().includes(search.toLowerCase())),
    [search, services]
  );

  const onSelectServiceConfig = (service: ServiceConfig) => {
    setService(service);

    if (onSelectServiceConfigCallback) {
      onSelectServiceConfigCallback();
    }
  };

  return (
    <BoxView title={'Services'} containerSx={{ mt: 0 }}>
      {services.length === 0 && <EmptyView title={'Empty services'} description={'There is no services to select'} />}
      {services.length > 0 && (
        <SearchTextField sx={{ mt: 2 }} search={search} setSearch={setSearch} placeholder={'Search by name'} />
      )}
      <List dense>
        {filteredServices.map((item, index) => (
          <ServiceConfigSelectionListItem
            key={index}
            service={item}
            selected={item.key == service.key}
            onSelectServiceConfig={onSelectServiceConfig}
          />
        ))}
      </List>
    </BoxView>
  );
};
