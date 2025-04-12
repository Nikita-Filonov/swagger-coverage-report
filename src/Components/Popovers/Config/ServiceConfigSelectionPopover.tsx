import { Fragment, MouseEvent, useState } from 'react';
import { BasePopover } from '../BasePopover';
import { ServiceConfigSelectionLabel } from '../../Labels/Config/ServiceConfigSelectionLabel';
import { ServiceConfigSelectionListView } from '../../../Views/Config/ServiceConfigSelectionListView';

export const ServiceConfigSelectionPopover = () => {
  const [anchor, setAnchor] = useState<HTMLElement | null>(null);

  const onOpen = (event: MouseEvent<HTMLDivElement>) => setAnchor(event.currentTarget);

  const onClose = () => setAnchor(null);

  return (
    <Fragment>
      <ServiceConfigSelectionLabel onSelectServiceConfig={onOpen} />
      <BasePopover anchor={anchor} setAnchor={setAnchor}>
        <ServiceConfigSelectionListView onSelectServiceConfigCallback={onClose} />
      </BasePopover>
    </Fragment>
  );
};
