export type Gender = 'Menn' | 'Kvinner';
export type EventType = 'Forsøk' | 'Semifinale' | 'Finale';
// Normalized days based on the user's dates
export type Day = 'Torsdag 23.07' | 'Fredag 24.07' | 'Lørdag 25.07';

export interface Athlete {
  bib: string; // Startnummer
  name: string;
  club: string; // Klubb
  personalBest: string; // PB
  seasonBest: string; // Årsbeste
}

export interface AthleteResult {
  rank: number;
  bib: string;
  name: string;
  club: string;
  result: string;
  info?: string;
}

export interface AthleticEvent {
  id: string;
  day: Day;
  time: string;
  gender: Gender;
  name: string;
  type: EventType;
  startList?: Athlete[];
  results?: AthleteResult[];
}

