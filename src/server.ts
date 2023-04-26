import express, {Express, Request, Response} from 'express';
import order from './routes/order';
import cors from 'cors';

const PORT: number = 8080 | process.env.PORT as any;
const app: Express = express();

express.urlencoded({extended: false});

app.use(cors());
app.use(express.json());

app.get('/', (_req: Request, res: Response) => {
  res.send('<h1>Hello World<h1>');
})

app.use('/order', order);
app.listen(PORT, () => {
  console.log('running server');
})