import { CoverageHistory } from '../History/CoverageHistory';
import { HTTPMethod } from '../Http';

export interface ServiceEndpointStatusCodeCoverage {
  value: number;
  covered: boolean;
  totalCases: number;
  description: string | null;
}

export interface ServiceEndpointCoverage {
  name: string;
  method: HTTPMethod;
  summary: string | null;
  covered: boolean;
  totalCases: number;
  statusCodes: ServiceEndpointStatusCodeCoverage[];
  totalCoverage: number;
  totalCoverageHistory: CoverageHistory[];
}

export interface ServiceCoverage {
  endpoints: ServiceEndpointCoverage[];
  totalCoverage: number;
  totalCoverageHistory: CoverageHistory[];
}
