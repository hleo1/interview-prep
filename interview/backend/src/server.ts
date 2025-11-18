import { app } from './app.js';
import { env } from './config/env.js';

const { port, nodeEnv } = env;

const server = app.listen(port, () => {
  console.log(`🚀 API ready on http://localhost:${port} (${nodeEnv})`);
});

const shutdown = (signal: NodeJS.Signals) => {
  console.log(`\n${signal} received. Closing server...`);
  server.close(() => {
    console.log('HTTP server closed');
    process.exit(0);
  });
};

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);

