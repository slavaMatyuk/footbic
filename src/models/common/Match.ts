import {Area} from './Area';
import {Competition} from './Competition';
import {Season} from './Season';
import {ShortTeam} from './Team';

export interface Match {
  area: Area;
  competition: Competition;
  season: Season;
  id: number;
  utcDate: string;
  status: string;
  matchday: number;
  stage: string;
  group: null;
  lastUpdated: string;
  homeTeam: ShortTeam;
  awayTeam: ShortTeam;
  score: {
    winner: null;
    duration: string;
    fullTime: {
      home: null;
      away: null;
    };
    halfTime: {
      home: null;
      away: null;
    };
  };
  odds: {
    msg: string;
  };
  referees: [];
}
