import express, {NextFunction, Request, Response, ErrorRequestHandler,} from 'express';
import dotenv from 'dotenv';
import cors from 'cors';



dotenv.config()

const app = express();
app.use(cors());
app.use(express.json());
const PORT: number = 3023


app.post('/api/login', (req: Request, res: Response)=>{
  console.log('in backend login ')
    res.status(200).json({ok: true, message: 'Login Successful'})
})

app.post('/api/signup', (req: Request, res: Response)=>{
console.log('in backend signup')
res.sendStatus(200)

})

app.get('/api/locations', (req: Request,res: Response) =>{
res.status(200).json([{'id': 2, 'name': 'Atlanta'}])
}  )

app.use("*", (req, res) => {
  res.status(404).send("Page Not Found");
});


app.listen(PORT, ()=> {
    console.log(`listening on port ${PORT}`)
})
