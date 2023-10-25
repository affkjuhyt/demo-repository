// Packages
import express from 'express';
import cors from 'cors';

import routes from './routes/index.js';
import config from './config/config.js';
import limiter from './middlewares/rateLimiter.js';

const app = express();

app.use(express.json({ limit: '10kb'}));
app.use(express.urlencoded({ extended: true, limit: '10kb'}));

app.use(cors());

if (config.env === 'production') {
    app.use('/api', limiter);
}

app.use('/api' , routes);

export default app;
