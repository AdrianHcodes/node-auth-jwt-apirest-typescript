import dotenv from 'dotenv';
dotenv.config()
import express from 'express';
import authRoutes from './routes/authRoutes';
import userRoutes from './routes/userRouters';

const app = express()

app.use(express.json())

//Routes
app.use('/auth', authRoutes)

//user
app.use('/users', userRoutes)

export default app