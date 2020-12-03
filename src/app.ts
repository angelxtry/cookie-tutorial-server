import express, { Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import { common } from './config';

const app = express();
app.use(cors());
app.use(helmet());
app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/health', (_, res: Response) => {
  res.sendStatus(200);
});

const { port } = common;

export const start = () => {
  app.listen(port, () => {
    console.log(`${process.env.NODE_ENV} - server is on ${port}`);
  });
};
