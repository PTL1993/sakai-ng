import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Match } from '../api/models/match';

@Injectable()
export class LeagueServiceBase {

    constructor(private http: HttpClient) { }

    getMatches() {
        return this.http.get<any>('https://localhost:44346/EPL/EPLIndex')
            .toPromise()
            .then(res => res.data as Match[])
            .then(data => data);
    }
}