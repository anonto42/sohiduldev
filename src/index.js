import express from 'express';
import DBConnection from './db/DB.js';
import router from './routes/authRoute.js';
import bodyParser from 'body-parser';
import { errorHandaler, notFounding } from './middlewares/errorHandaler.js';

const app = express();
const PORT = process.env.PORT || 8500;
DBConnection()


app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api/user", router);




app.use(notFounding);
app.use (errorHandaler);

app.listen(PORT, ()=>{
    console.log(`Your server is running at ${PORT}`)
});