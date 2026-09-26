import { createContext, Dispatch, FC, PropsWithChildren, SetStateAction, useContext, useState } from 'react';
import { ServiceCoverage } from '../Models/Coverage/ServiceCoverage';
import { ServiceConfig } from '../Models/Config/Config';
import { InitialState } from '../Models/InitialState';

const DEFAULT_SERVICE_CONFIG: ServiceConfig = {
  key: '',
  name: '',
  repository: ''
};

const DEFAULT_SERVICE_COVERAGE: ServiceCoverage = {
  endpoints: [],
  totalCoverage: 0,
  totalCoverageHistory: []
};

const DEFAULT_INITIAL_STATE: InitialState = {
  config: { services: [] },
  createdAt: '',
  servicesCoverage: {}
};

export const loadInitialState = (): InitialState => {
  const stateElement = document.getElementById('state');
  if (stateElement === null) {
    return DEFAULT_INITIAL_STATE;
  }

  try {
    return JSON.parse(stateElement.textContent || '');
  } catch {
    return DEFAULT_INITIAL_STATE;
  }
};

export type InitialStateContextProps = {
  service: ServiceConfig;
  services: ServiceConfig[];
  createdAt: string;
  setService: Dispatch<SetStateAction<ServiceConfig>>;
  serviceCoverage: ServiceCoverage;
};

const InitialStateContext = createContext<InitialStateContextProps | null>(null);

const InitialStateProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state] = useState<InitialState>(loadInitialState);
  const [service, setService] = useState<ServiceConfig>(
    () =>
      (state.config.services || []).find((service) => state.servicesCoverage[service.key]?.totalCoverage > 0) ||
      DEFAULT_SERVICE_CONFIG
  );

  return (
    <InitialStateContext.Provider
      value={{
        service,
        services: state.config.services || [],
        createdAt: state.createdAt,
        setService,
        serviceCoverage: state.servicesCoverage[service.key] || DEFAULT_SERVICE_COVERAGE
      }}>
      {children}
    </InitialStateContext.Provider>
  );
};

const useInitialState = () => {
  const event = useContext(InitialStateContext);
  if (event == null) {
    throw new Error('useInitialState() called outside of a InitialStateProvider?');
  }
  return event;
};

export { InitialStateProvider, useInitialState };
