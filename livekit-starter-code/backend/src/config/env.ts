import path from 'node:path';
import { config } from 'dotenv';

const envFile = process.env.NODE_ENV === 'test' ? '.env.test' : '.env';

config({
  path: path.resolve(process.cwd(), envFile),
});

const requiredVariables = ['PORT'] as const;

const getEnv = (key: string, defaultValue?: string): string => {
  const value = process.env[key] ?? defaultValue;

  if (value === undefined) {
    throw new Error(`Missing required environment variable: ${key}`);
  }

  return value;
};

requiredVariables.forEach((variable) => getEnv(variable));

export const env = {
  nodeEnv: getEnv('NODE_ENV', 'development'),
  port: Number(getEnv('PORT', '3000')),
};

