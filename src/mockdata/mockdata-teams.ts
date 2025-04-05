export type Team = {
  id: number;
  name: string;
  slogan: string;
  players: Player[];
};

export type Player = {
  id: number;
  name: string;
};

const mockdata_teams: Team[] = [
  {
    id: 1,
    name: 'Team A',
    slogan: 'Win at all cost',
    players: [
      { id: 1, name: 'John' },
      { id: 2, name: 'Jane' },
      { id: 3, name: 'Jim' },
      { id: 4, name: 'Jill' },
      { id: 5, name: 'Jack' },
    ],
  },
  {
    id: 2,
    name: 'Team B',
    slogan: 'Fight till the end',
    players: [
      { id: 1, name: 'Kyle' },
      { id: 2, name: 'Koe' },
      { id: 3, name: 'Kai' },
      { id: 4, name: 'Kane' },
      { id: 5, name: 'Josh' },
    ],
  },
  {
    id: 3,
    name: 'Team C',
    slogan: 'Passion never fades',
    players: [
      { id: 1, name: 'Liam' },
      { id: 2, name: 'Lucas' },
      { id: 3, name: 'Leo' },
      { id: 4, name: 'Luis' },
      { id: 5, name: 'Luke' },
    ],
  },
  {
    id: 4,
    name: 'Team D',
    slogan: 'We are the champions',
    players: [
      { id: 1, name: 'Mike' },
      { id: 2, name: 'Matt' },
      { id: 3, name: 'Mark' },
      { id: 4, name: 'Max' },
      { id: 5, name: 'Mason' },
    ],
  },
  {
    id: 5,
    name: 'Team E',
    slogan: 'We are the best',
    players: [
      { id: 1, name: 'Nick' },
      { id: 2, name: 'Noah' },
      { id: 3, name: 'Nate' },
      { id: 4, name: 'Neil' },
      { id: 5, name: 'Nolan' },
    ],
  },
  {
    id: 6,
    name: 'Team F',
    slogan: 'We are the future',
    players: [
      { id: 1, name: 'Owen' },
      { id: 2, name: 'Oliver' },
      { id: 3, name: 'Oscar' },
      { id: 4, name: 'Omar' },
      { id: 5, name: 'Otis' },
    ],
  },
  {
    id: 7,
    name: 'Team G',
    slogan: 'Stronger together',
    players: [
      { id: 1, name: 'Paul' },
      { id: 2, name: 'Peter' },
      { id: 3, name: 'Patrick' },
      { id: 4, name: 'Philip' },
      { id: 5, name: 'Parker' },
    ],
  },
  {
    id: 8,
    name: 'Team H',
    slogan: 'Lets go',
    players: [
      { id: 1, name: 'Quinn' },
      { id: 2, name: 'Quentin' },
      { id: 3, name: 'Quincy' },
      { id: 4, name: 'Quade' },
      { id: 5, name: 'Quinn' },
    ],
  },
  {
    id: 9,
    name: 'Team I',
    slogan: 'I believe',
    players: [
      { id: 1, name: 'Ryan' },
      { id: 2, name: 'Riley' },
      { id: 3, name: 'Robert' },
      { id: 4, name: 'Roger' },
      { id: 5, name: 'Ronald' },
    ],
  },
  {
    id: 10,
    name: 'Team J',
    slogan: 'Win or die',
    players: [
      { id: 1, name: 'Sam' },
      { id: 2, name: 'Sean' },
      { id: 3, name: 'Steve' },
      { id: 4, name: 'Scott' },
      { id: 5, name: 'Simon' },
    ],
  },
  {
    id: 11,
    name: 'Team K',
    slogan: 'Warriors never die',
    players: [
      { id: 1, name: 'Tom' },
      { id: 2, name: 'Tim' },
      { id: 3, name: 'Tyler' },
      { id: 4, name: 'Tony' },
      { id: 5, name: 'Todd' },
    ],
  },
  {
    id: 12,
    name: 'Team L',
    slogan: 'Chase your dreams',
    players: [
      { id: 1, name: 'Ulysses' },
      { id: 2, name: 'Uriah' },
      { id: 3, name: 'Umar' },
      { id: 4, name: 'Upton' },
      { id: 5, name: 'Urban' },
    ],
  },
  {
    id: 13,
    name: 'Team M',
    slogan: 'Money Talks',
    players: [
      { id: 1, name: 'Victor' },
      { id: 2, name: 'Vincent' },
      { id: 3, name: 'Vernon' },
      { id: 4, name: 'Vance' },
      { id: 5, name: 'Vaughn' },
    ],
  },
  {
    id: 14,
    name: 'Team N',
    slogan: 'Never give up',
    players: [
      { id: 1, name: 'Walter' },
      { id: 2, name: 'William' },
      { id: 3, name: 'Wesley' },
      { id: 4, name: 'Warren' },
      { id: 5, name: 'Wayne' },
    ],
  },
  {
    id: 15,
    name: 'Team O',
    slogan: 'Oh my Team',
    players: [
      { id: 1, name: 'Xavier' },
      { id: 2, name: 'Xander' },
      { id: 3, name: 'Xerxes' },
      { id: 4, name: 'Xeno' },
      { id: 5, name: 'Xylon' },
    ],
  },
  {
    id: 16,
    name: 'Team P',
    slogan: 'Mighty Falcons',
    players: [
      { id: 1, name: 'Yuri' },
      { id: 2, name: 'Yves' },
      { id: 3, name: 'Yann' },
      { id: 4, name: 'Yosef' },
      { id: 5, name: 'Yorick' },
    ],
  },
  {
    id: 17,
    name: 'Team Q',
    slogan: 'We are the champions',
    players: [
      { id: 1, name: 'Zach' },
      { id: 2, name: 'Zane' },
      { id: 3, name: 'Zane' },
      { id: 4, name: 'Zane' },
      { id: 5, name: 'Zane' },
    ],
  },
  {
    id: 18,
    name: 'Team R',
    slogan: 'We are the champions',
    players: [
      { id: 1, name: 'Yusuf' },
      { id: 2, name: 'Yohannes' },
      { id: 3, name: 'Berg' },
      { id: 4, name: 'Philip' },
      { id: 5, name: 'Biling' },
    ],
  },
  {
    id: 19,
    name: 'Team S',
    slogan: 'We are the champions',
    players: [
      { id: 1, name: 'Lulu' },
      { id: 2, name: 'Agbe' },
      { id: 3, name: 'Jode' },
      { id: 4, name: 'Jobe' },
      { id: 5, name: 'Bellingham' },
    ],
  },
  {
    id: 20,
    name: 'Team T',
    slogan: 'We are the champions',
    players: [
      { id: 1, name: 'Modric' },
      { id: 2, name: 'Endrick' },
      { id: 3, name: 'Dias' },
      { id: 4, name: 'Foden' },
      { id: 5, name: 'Lahm' },
    ],
  },
];

export default mockdata_teams;
