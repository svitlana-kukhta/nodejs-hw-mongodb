import { setupServer } from './server.js';
import { initMongoDB } from './db/initMongoConnection.js';
import { startServer } from './server.js';

setupServer();

const bootstrap = async () => {
  await initMongoDB();
  startServer();
};

bootstrap();
