export class IDatabaseConfugAttributes {
  username: string;
  password: string;
  database: string;
  host: string;
  port: number | string;
  dialect: string;
}

export interface IDatabaseConfig {
  development: IDatabaseConfugAttributes;
  test: IDatabaseConfugAttributes;
  production: IDatabaseConfugAttributes;
}
