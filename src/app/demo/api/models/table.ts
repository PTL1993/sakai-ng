import { Team } from "./team";

export interface Table {
    team: Team[];
    playedGames: number;
    form: any;
    goalsFor: number;
    goalsAgainst: number;
}
