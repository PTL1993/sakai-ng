import { AwayTeam } from "./awayteam";
import { HomeTeam } from "./hometeam";
import { Score } from "./score";

export interface Match {
    matches: Match[];
    utcDate: Date;
    status: string;
    score: Score;
    homeTeam: HomeTeam;
    awayTeam: AwayTeam;
}