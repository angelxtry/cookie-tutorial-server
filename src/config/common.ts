import { resolve } from 'path';
import { config } from 'dotenv';

config({ path: resolve(__dirname, '../../.env') });

type CommonConfig = {
  port: number;
  env: string;
  jwtSecret: string;
};

export const common: CommonConfig = {
  port: (process.env.PORT && parseInt(process.env.PORT, 10)) || 8080,
  env: process.env.NODE_ENV || 'development',
  jwtSecret: process.env.JWT_SECRET || 'secret',
};
