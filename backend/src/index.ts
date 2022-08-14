import express from "express";
import {Request, Response} from "express"

const app = express();
const port = 4000;

app.get('/', ((req: Request, res: Response) => {
  console.log('works')
  res.send('works');
}))

app.listen(port, () => {
  console.log(`😊 Ambient-Backend is listening on port ${port}`)
});

