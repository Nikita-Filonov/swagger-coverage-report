import { CoverageHistory } from '../History/CoverageHistory';
import { HTTPMethod } from '../Http';

export enum ServiceEndpointCoverageStatus {
  Missing = 'MISSING',
  Covered = 'COVERED',
  Uncovered = 'UNCOVERED'
}

export interface ServiceEndpointStatusCodeCoverage {
  value: number;
  totalCases: number;
  description: string | null;
  responseCoverage: ServiceEndpointCoverageStatus;
  statusCodeCoverage: ServiceEndpointCoverageStatus;
}

export interface ServiceEndpointQueryParametersCoverage {
  name: string;
  coverage: ServiceEndpointCoverageStatus;
}

export interface ServiceEndpointCoverage {
  name: string;
  method: HTTPMethod;
  summary: string | null;
  coverage: ServiceEndpointCoverageStatus;
  totalCases: number;
  statusCodes: ServiceEndpointStatusCodeCoverage[];
  totalCoverage: number;
  queryParameters: ServiceEndpointQueryParametersCoverage[];
  requestCoverage: ServiceEndpointCoverageStatus;
  totalCoverageHistory: CoverageHistory[];
}

export interface ServiceCoverage {
  endpoints: ServiceEndpointCoverage[];
  totalCoverage: number;
  totalCoverageHistory: CoverageHistory[];
}
