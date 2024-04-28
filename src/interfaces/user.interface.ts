export interface User {
    UserId: string;
    UserStats: UserStats;
    Username: string;
    id: {
        tb: string;
        id: string; 
    }
}

export interface UserStats {
    BonusStreak: number;
    ImageCount: number;
    ImageTokens: number;
    LastBonus: string;
}