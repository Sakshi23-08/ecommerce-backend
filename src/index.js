import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './services/mongodb/connectDB'
dotenv.config('./.env')

import authRoutes from './routes/user';

const app = express();

const PORT = process.env.PORT || 8080

connectDB()

app.use(express.json())
app.use('/user', authRoutes)

app.get('/', (req,res) => {
    res.send(`Server deployed by CI/CD pipeline on ${Date.now().toLocaleString()} on PORT; ${PORT}`)
})

app.listen(PORT, () => {
    console.log(`Server listening at port ${PORT}`)
})