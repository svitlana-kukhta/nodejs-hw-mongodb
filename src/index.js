import dotenv from 'dotenv';
import { initMongoDB } from './db/initMongoConnection.js';
import { startServer } from './server.js';

dotenv.config();
console.log('PORT:', process.env.PORT);
console.log('MONGODB_USER:', process.env.MONGODB_USER);
console.log('MONGODB_PASSWORD:', process.env.MONGODB_PASSWORD ? 'Loaded' : 'Not loaded');
console.log('MONGODB_URL:', process.env.MONGODB_URL);
console.log('MONGODB_DB:', process.env.MONGODB_DB);

const bootstrap = async () => {
  await initMongoDB();
  startServer();
};

bootstrap();
