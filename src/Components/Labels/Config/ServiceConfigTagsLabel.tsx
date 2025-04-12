import { BaseLabelsView } from '../BaseLabelsView';
import { ServiceConfigTagLabel } from './ServiceConfigTagLabel';
import { ServiceConfig } from '../../../Models/Config/Config';
import { FC } from 'react';

type Props = {
  service: ServiceConfig;
};

export const ServiceConfigTagsLabel: FC<Props> = ({ service }) => {
  return (
    <BaseLabelsView>
      {service.tags?.map((tag, index) => <ServiceConfigTagLabel key={index} tag={tag} />)}
    </BaseLabelsView>
  );
};
