import { Config, ServiceConfig } from '../Models/Config/Config';
import { ServiceCoverage } from '../Models/Coverage/ServiceCoverage';

export interface InitialState {
  config: Config;
  createdAt: string;
  servicesCoverage: { [x: string]: ServiceCoverage };
}

export const DEFAULT_SERVICE_CONFIG: ServiceConfig = {
  key: '',
  name: '',
  repository: ''
};

export const DEFAULT_SERVICE_COVERAGE: ServiceCoverage = {
  endpoints: [],
  totalCoverage: 0,
  totalCoverageHistory: []
};

export const DEFAULT_INITIAL_STATE: InitialState = {
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
