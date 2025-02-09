import mongoose from 'mongoose';
import { User } from '../types';

const userSchema = new mongoose.Schema<User>({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    mostPlayedSport: { type: String, required: true },
    ratings: {
        type: Map,
        of: Number,
        default: {}
    },
    achievements: [String],
}, { timestamps: true });

export const UserModel = mongoose.model<User>('User', userSchema);