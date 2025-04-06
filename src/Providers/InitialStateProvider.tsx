import React, { Dispatch, FC, PropsWithChildren, SetStateAction, useContext, useEffect, useState } from 'react';
import { DEFAULT_SERVICE_CONFIG, DEFAULT_SERVICE_COVERAGE, InitialState, loadInitialState } from '../State/Controllers';
import { ServiceCoverage } from '../Models/Coverage/ServiceCoverage';
import { ServiceConfig } from '../Models/Config/Config';

export type InitialStateContextProps = {
  service: ServiceConfig;
  services: ServiceConfig[];
  createdAt: string;
  setService: Dispatch<SetStateAction<ServiceConfig>>;
  serviceCoverage: ServiceCoverage;
};

const InitialStateContext = React.createContext<InitialStateContextProps | null>(null);

const InitialStateProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, setState] = useState<InitialState>(loadInitialState());
  const [service, setService] = useState<ServiceConfig>(DEFAULT_SERVICE_CONFIG);

  useEffect(() => {
    loadState();
  }, []);

  const loadState = () => {
    const initialState = loadInitialState();
    for (const service of initialState.config.services || []) {
      const serviceCoverage = initialState.servicesCoverage[service.key];

      if (serviceCoverage.totalCoverage && serviceCoverage.totalCoverage > 0) {
        setService(service);
        break;
      }
    }

    setState(initialState);
  };

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
