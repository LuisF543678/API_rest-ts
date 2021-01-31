import express, { Application } from 'express';
import morgan from 'morgan';
const app: Application = express();

import authRoutes from './routes/auth';

//Settings
app.set('port', 4000);

//middlwares
app.use(morgan('dev'));

//Routes
app.use(authRoutes);
export default app;