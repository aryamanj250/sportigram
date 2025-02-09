import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import matchRoutes from './routes/match.route';
// Import other routes as needed

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/matches', matchRoutes);
// Add other route handlers

mongoose.connect(process.env.MONGODB_URI!)
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('MongoDB connection error:', err));

export default app;