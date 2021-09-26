import express from 'express';
import cors from 'cors';
import moongoseService from './database/mongoose';
import dotenv from 'dotenv';
const dontenvResult = dotenv.config();
if(dontenvResult.error) {
    throw dontenvResult.error;
}




const app: express.Application = express()
const port = process.env.PORT




app.use(express.json())
const mongoService = moongoseService;
app.use(cors());

app.get('/', (req: express.Request, res: express.Response) => {
    res.status(200).json(
        {
            msg: 'ok',
            routes: 'get'
        }
    );
});


app.listen(port, () => {
    console.log('servidor corriendo en el puerto ' + port)
})