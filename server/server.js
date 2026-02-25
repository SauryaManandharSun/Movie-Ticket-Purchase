import express from 'express';
import cors from 'cors';
import 'dotenv/config';

const app = express();
const port = 3000;

//MiddleWare
app.use(express.json());
app.use(cors());

// Api routes
app.get('/', (req,res)=> res.send('Server is live'));

// Connect it to the database
app.listen(port, ()=>console.log(`Server is running at the port number ${port}`));