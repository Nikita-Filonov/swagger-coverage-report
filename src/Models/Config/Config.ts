export interface ServiceConfig {
  key: string;
  name: string;
  tags?: string[] | null;
  repository?: string | null;
  swaggerUrl?: string | null;
  swaggerFile?: string | null;
}

export interface Config {
  services?: ServiceConfig[];
}
