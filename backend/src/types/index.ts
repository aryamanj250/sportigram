export interface User {
    id: string;
    name: string;
    email: string;
    mostPlayedSport: string;
    ratings: {
        [key: string]: number;
    };
    achievements: string[];
    createdAt: Date;
    updatedAt: Date;
}

export interface Match {
    id: string;
    sport: string;
    location: {
        name: string;
        coordinates: {
            latitude: number;
            longitude: number;
        };
    };
    format: string;
    time: {
        start: Date;
        end: Date;
    };
    minRating: number;
    maxPlayers: number;
    currentPlayers: string[];
    groundFees: number;
    equipmentProvided: boolean;
    status: 'open' | 'full' | 'in-progress' | 'completed';
    createdAt: Date;
    updatedAt: Date;
}

export interface Tournament {
    id: string;
    name: string;
    sport: string;
    date: Date;
    location: {
        name: string;
        coordinates: {
            latitude: number;
            longitude: number;
        };
    };
    maxParticipants: number;
    currentParticipants: string[];
    prize: number;
    registrationDeadline: Date;
    status: 'upcoming' | 'in-progress' | 'completed';
    createdAt: Date;
    updatedAt: Date;
}

export interface Performance {
    id: string;
    userId: string;
    sport: string;
    date: Date;
    score: number;
    matchId?: string;
    tournamentId?: string;
    createdAt: Date;
}