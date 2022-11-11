interface Area {
  id: number;
  name: string;
  code: string;
  flag: string;
}

interface Person {
  id: number;
  firstName: string;
  lastName: string;
  name: string;
  dateOfBirth: string;
  nationality: string;
  contract: {
    start: string;
    until: string;
  };
}

interface Player extends Person {
  position: 'Goalkeeper';
  shirtNumber: number | null;
  marketValue: number;
}

interface RunningCompetition {
  id: number;
  name: string;
  code: string;
  type: string;
  emblem: string;
}

export interface CurrentTeam {
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
  runningCompetitions: RunningCompetition[];
  coach: Person;
  marketValue: number;
  squad: Player[];
  staff: Person[];
  lastUpdated: Date;
}
