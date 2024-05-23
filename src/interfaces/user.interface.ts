export interface User {
    UserId:    string;
    UserStats: UserStats;
    Username:  string;
    id:        string;
}

export interface UserStats {
    BonusStreak: number;
    ImageCount:  number;
    ImageTokens: number;
    LastBonus:   string;
    Stocks:      Stock[];
}

export interface Stock {
    stockCount:  number;
    stockTicker: string;
}