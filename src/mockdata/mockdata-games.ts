export type Game = {
  id: number;
  teamA: string;
  teamB: string;
  date: string;
  venue: string;
  photo: string;
};

const mockdata_games: Game[] = [
  {
    id: 1,
    teamA: 'Team A',
    teamB: 'Team B',
    date: '2024-01-01',
    venue: 'Wembley Stadium',
    photo: '',
  },
  {
    id: 2,
    teamA: 'Team C',
    teamB: 'Team D',
    date: '2024-01-02',
    venue: 'Old Trafford',
    photo: '',
  },
  {
    id: 3,
    teamA: 'Team E',
    teamB: 'Team F',
    date: '2024-01-03',
    venue: 'Stamford Bridge',
    photo: '',
  },
  {
    id: 4,
    teamA: 'Team G',
    teamB: 'Team H',
    date: '2024-01-04',
    venue: 'Etihad Stadium',
    photo: '',
  },
  {
    id: 5,
    teamA: 'Team I',
    teamB: 'Team J',
    date: '2024-01-05',
    venue: 'Anfield',
    photo: '',
  },
  {
    id: 6,
    teamA: 'Team K',
    teamB: 'Team L',
    date: '2024-01-06',
    venue: 'Emirates Stadium',
    photo: '',
  },
  {
    id: 7,
    teamA: 'Team M',
    teamB: 'Team N',
    date: '2024-01-07',
    venue: "St. Mary's Stadium",
    photo: '',
  },
  {
    id: 8,
    teamA: 'Team O',
    teamB: 'Team P',
    date: '2024-01-08',
    venue: 'Villa Park',
    photo: '',
  },
  {
    id: 9,
    teamA: 'Team Q',
    teamB: 'Team R',
    date: '2024-01-09',
    venue: 'The Hawthorns',
    photo: '',
  },
  {
    id: 10,
    teamA: 'Team S',
    teamB: 'Team T',
    date: '2024-01-10',
    venue: 'The Emirates',
    photo: '',
  },
];

export default mockdata_games;
