import {Area} from './common/area.interface';
import {Competition} from './common/competition.interface';
import {Person} from './common/person.interface';

export interface Player extends Person {
  position: string;
  shirtNumber: number | null;
  marketValue: number;
}

export interface CurrentTeamResponse {
  area: Area;
  id: number;
  name: string;
  shortName: string;
  tla: string;
  crest: string;
  address: string;
  website: string;
  founded: number;
  clubColors: string;
  venue: string;
  runningCompetitions: Competition[];
  coach: Person;
  marketValue: number;
  squad: Player[];
  staff: Person[];
  lastUpdated: string;
}
