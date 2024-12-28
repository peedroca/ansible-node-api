import 'dotenv/config.js';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

import UserController from './controllers/UserController.js';

const server = express();
server.use(express.json());
server.use(cors());

mongoose.connect(process.env.CONNECTION_STRING)
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.error(err));

server.get('/', (req, res) => res.send('Working!'));

server.use('/User', UserController);

const PORT = process.env.PORT || 8000;
server.listen(PORT, () => console.log(`Listening on port ${PORT} ...`));
