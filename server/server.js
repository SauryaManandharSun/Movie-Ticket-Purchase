import dns from "dns";

dns.setServers(["1.1.1.1", "8.8.8.8"]);

import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './configs/db.js';

const app = express();
const port = 3000;

await connectDB();

app.use(express.json());
app.use(cors());

app.get('/', (req,res)=> res.send('Server is live'));

app.listen(port, ()=>console.log(`Server is running at port ${port}`));