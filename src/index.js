import express from 'express';
import DBConnection from './db/DB.js';
import router from './routes/auth.route.js';
import bodyParser from 'body-parser';
import { errorHandaler, notFounding } from './middlewares/errorHandaler.js';
import dotenv from 'dotenv';

const app = express();

const PORT = process.env.PORT || 3500;

DBConnection();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api/v1/user", router);

dotenv.config({
    path:"./env"
})

app.use(notFounding);
app.use (errorHandaler);

app.listen(PORT, ()=>{
    console.log(`Your server is running at ${PORT}`)
});