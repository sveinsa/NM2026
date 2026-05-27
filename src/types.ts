export type Gender = 'Menn' | 'Kvinner';
export type EventType = 'Forsøk' | 'Semifinale' | 'Finale';
// Normalized days based on the user's dates
export type Day = 'Torsdag 23.07' | 'Fredag 24.07' | 'Lørdag 25.07';

export interface AthleticEvent {
  id: string;
  day: Day;
  time: string;
  gender: Gender;
  name: string;
  type: EventType;
}
