import express, { Express, Request, Response } from 'express'
import dotenv from "dotenv"
import { json } from 'body-parser';
import DefaultRouter from './routes';

dotenv.config()

const app: Express = express()
const port = process.env.PORT;

app.use(json());
app.use(DefaultRouter)

app.get('/', (req: Request, res: Response) => {
    res.send("JS and TS server");
})

app.listen(port, () => {
    console.log(`[server]: Server is running at https://localhost:${port}`);
})