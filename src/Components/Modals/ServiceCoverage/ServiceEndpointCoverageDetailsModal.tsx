import { BaseModal } from '../BaseModal';
import { FC } from 'react';
import { ServiceEndpointCoverageDetailsView } from '../../../Views/Coverage/ServiceCoverage/ServiceEndpointCoverageDetailsView';
import { ServiceEndpointCoverage } from '../../../Models/Coverage/ServiceCoverage';

type Props = {
  modal: boolean;
  setModal: (modal: boolean) => void;
  endpoint: ServiceEndpointCoverage;
};

export const ServiceEndpointCoverageDetailsModal: FC<Props> = (props) => {
  const { modal, setModal, endpoint } = props;

  return (
    <BaseModal title={'Endpoint coverage details'} modal={modal} setModal={setModal}>
      <ServiceEndpointCoverageDetailsView endpoint={endpoint} />
    </BaseModal>
  );
};
