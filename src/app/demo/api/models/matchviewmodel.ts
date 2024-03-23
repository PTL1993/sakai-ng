export interface MatchViewModel {
    utcDate: string;
    homeTeamName: string;
    awayTeamName: string;
    homeTeamForm: string;
    awayTeamForm: string;
    mostProbableResult: string;
    homeTeamGoals: number;
    awayTeamGoals: number;
    over1Percentage?: number;
    over2Percentage?: number;
    emblem?: string;
    actualResult?: string;
    colour?: boolean;
    // Add more properties if needed
  }