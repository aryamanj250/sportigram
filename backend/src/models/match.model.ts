import mongoose from 'mongoose';
import { Match } from '../types';

const matchSchema = new mongoose.Schema<Match>({
    sport: { type: String, required: true },
    location: {
        name: { type: String, required: true },
        coordinates: {
            latitude: { type: Number, required: true },
            longitude: { type: Number, required: true }
        }
    },
    format: { type: String, required: true },
    time: {
        start: { type: Date, required: true },
        end: { type: Date, required: true }
    },
    minRating: { type: Number, required: true },
    maxPlayers: { type: Number, required: true },
    currentPlayers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    groundFees: { type: Number, required: true },
    equipmentProvided: { type: Boolean, default: false },
    status: { type: String, enum: ['open', 'full', 'in-progress', 'completed'], default: 'open' }
}, { timestamps: true });

export const MatchModel = mongoose.model<Match>('Match', matchSchema);