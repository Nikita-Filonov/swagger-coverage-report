import { ServiceConfig } from '../Models/Config/Config';
import { ServiceEndpointCoverage, ServiceEndpointCoverageStatus } from '../Models/Coverage/ServiceCoverage';
import { HTTPMethod } from '../Models/Http';
import { InitialState } from '../Models/InitialState';

export const makeEndpoint = (overrides: Partial<ServiceEndpointCoverage> = {}): ServiceEndpointCoverage => ({
  name: '/users',
  method: HTTPMethod.GET,
  summary: 'List users',
  coverage: ServiceEndpointCoverageStatus.Covered,
  totalCases: 3,
  totalCoverage: 75,
  requestCoverage: ServiceEndpointCoverageStatus.Missing,
  statusCodes: [
    {
      value: 200,
      description: 'Users returned',
      totalCases: 3,
      responseCoverage: ServiceEndpointCoverageStatus.Covered,
      statusCodeCoverage: ServiceEndpointCoverageStatus.Covered
    },
    {
      value: 404,
      description: null,
      totalCases: 0,
      responseCoverage: ServiceEndpointCoverageStatus.Missing,
      statusCodeCoverage: ServiceEndpointCoverageStatus.Uncovered
    }
  ],
  queryParameters: [
    { name: 'limit', coverage: ServiceEndpointCoverageStatus.Covered },
    { name: 'offset', coverage: ServiceEndpointCoverageStatus.Uncovered }
  ],
  totalCoverageHistory: [{ createdAt: '2026-09-26T10:30:00', totalCoverage: 75 }],
  ...overrides
});

export const services: ServiceConfig[] = [
  {
    key: 'alpha',
    name: 'Alpha',
    tags: ['smoke'],
    repository: 'https://example.com/alpha',
    swaggerUrl: 'https://example.com/swagger.json'
  },
  { key: 'beta', name: 'Beta', tags: [], swaggerFile: 'beta.json' }
];

export const makeState = (): InitialState => ({
  config: { services },
  createdAt: '2026-09-26T10:30:00',
  servicesCoverage: {
    alpha: {
      endpoints: [
        makeEndpoint(),
        makeEndpoint({
          name: '/health',
          summary: null,
          totalCases: 0,
          totalCoverage: 0,
          coverage: ServiceEndpointCoverageStatus.Uncovered,
          statusCodes: [],
          queryParameters: [],
          totalCoverageHistory: []
        })
      ],
      totalCoverage: 50,
      totalCoverageHistory: [{ createdAt: '2026-09-26T10:30:00', totalCoverage: 50 }]
    }
  }
});

export const embedState = (state: InitialState | string) => {
  const script = document.createElement('script');
  script.id = 'state';
  script.type = 'application/json';
  script.textContent = typeof state === 'string' ? state : JSON.stringify(state);
  document.body.appendChild(script);
};
