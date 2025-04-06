import { ServiceEndpointCoverageTable } from '../../../Components/Tables/Coverage/ServiceCoverage/ServiceEndpointCoverageTable';
import { useInitialState } from '../../../Providers/InitialStateProvider';
import { WidgetView } from '../../../Components/Views/WidgetView';
import { SearchView } from '../../../Components/Views/SearchView';
import { useMemo, useState } from 'react';
import { ServiceEndpointCoverage } from '../../../Models/Coverage/ServiceCoverage';
import { ServiceEndpointCoverageDetailsModal } from '../../../Components/Modals/ServiceCoverage/ServiceEndpointCoverageDetailsModal';

export const ServiceEndpointsCoverageView = () => {
  const { serviceCoverage } = useInitialState();
  const [search, setSearch] = useState('');
  const [serviceEndpointCoverage, setServiceEndpointCoverage] = useState<ServiceEndpointCoverage | null>(null);
  const [serviceEndpointCoverageDetailsModal, setServiceEndpointCoverageDetailsModal] = useState(false);

  const filteredEndpoints = useMemo(
    () =>
      serviceCoverage.endpoints.filter(
        (endpoint) =>
          endpoint.name.toLowerCase().includes(search.toLowerCase()) ||
          endpoint.method.toLowerCase().includes(search.toLowerCase())
      ),
    [search, serviceCoverage.endpoints]
  );

  const onServiceEndpointCoverageDetails = (endpoint: ServiceEndpointCoverage) => {
    setServiceEndpointCoverage(endpoint);
    setServiceEndpointCoverageDetailsModal(true);
  };

  return (
    <WidgetView sx={{ mt: 3 }} title={'Endpoints coverage'}>
      <SearchView
        search={search}
        setSearch={setSearch}
        placeholder={'Search by method or endpoint name'}
        totalResults={filteredEndpoints.length}
      />
      <ServiceEndpointCoverageTable
        endpoints={filteredEndpoints}
        onServiceEndpointCoverageDetails={onServiceEndpointCoverageDetails}
      />
      {serviceEndpointCoverage && (
        <ServiceEndpointCoverageDetailsModal
          modal={serviceEndpointCoverageDetailsModal}
          setModal={setServiceEndpointCoverageDetailsModal}
          endpoint={serviceEndpointCoverage}
        />
      )}
    </WidgetView>
  );
};
