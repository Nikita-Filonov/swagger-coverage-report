import { Config } from './Config/Config';
import { ServiceCoverage } from './Coverage/ServiceCoverage';

export interface InitialState {
  config: Config;
  createdAt: string;
  servicesCoverage: { [x: string]: ServiceCoverage };
}
