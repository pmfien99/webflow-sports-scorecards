export interface RootObject {
  scores: Scores;
}

export interface Scores {
  category: Category;
  sport: string;
}

export interface Category {
  id: string;
  match: Match[];
  name: string;
}

export interface Match {
  attendance: string;
  awayteam: MatchAwayteam;
  date: string;
  datetime_utc: string;
  events: Events | null;
  formatted_date: string;
  gamecast?: Gamecast | null;
  headline?: null;
  hometeam: MatchAwayteam;
  id: string;
  oddsid: string;
  outs: string;
  starting_pitchers: StartingPitchers;
  stats: MatchStats | null;
  status: string;
  time: string;
  timezone: string;
  venue_id: string;
  venue_name: string;
}

export interface MatchAwayteam {
  errors: string;
  hits: string;
  id: string;
  in1: In1;
  in2: In1;
  in3: In1;
  in4: In1;
  in5: In1;
  in6: In1;
  in7: In1;
  in8: In1;
  in9: In1;
  innings?: Innings;
  name: string;
  r: In1;
  totalscore: string;
}

export enum In1 {
  Empty = '',
  In1 = '-',
}

export interface Innings {
  inning: Inning[];
}

export interface Inning {
  hits: string;
  number: string;
  score: string;
}

export interface Events {
  event: Event[];
}

export interface Event {
  chw: string;
  cle: string;
  desc: string;
  inn: string;
  team: TeamEnum;
}

export enum TeamEnum {
  Awayteam = 'awayteam',
  Hometeam = 'hometeam',
}

export interface Gamecast {
  bases: Bases;
  current_batter: Current;
  current_pitcher: Current;
  stats: GamecastStats;
}

export interface Bases {
  base1: string;
  base2: string;
  base3: string;
}

export interface Current {
  id: string;
  name: string;
  stats: string;
}

export interface GamecastStats {
  balls: string;
  outs: string;
  strikes: string;
}

export interface StartingPitchers {
  awayteam: StartingPitchersAwayteam;
  hometeam: StartingPitchersAwayteam;
}

export interface StartingPitchersAwayteam {
  player: PurplePlayer;
}

export interface PurplePlayer {
  id: string;
  name: string;
}

export interface MatchStats {
  hitters: Hitters;
  pitchers: Pitchers;
}

export interface Hitters {
  awayteam: HittersAwayteam;
  hometeam: HittersAwayteam;
}

export interface HittersAwayteam {
  player: FluffyPlayer[];
}

export interface FluffyPlayer {
  at_bats: string;
  average: string;
  cs: string;
  doubles: string;
  hit_by_pitch: string;
  hits: string;
  home_runs: string;
  id: string;
  name: string;
  on_base_percentage: string;
  pos: string;
  runs: string;
  runs_batted_in: string;
  sac_fly: string;
  slugging_percentage: string;
  stolen_bases: string;
  strikeouts: string;
  triples: string;
  walks: string;
}

export interface Pitchers {
  awayteam: Awayteam;
  hometeam: Hometeam;
}

export interface Awayteam {
  player: PlayerPlayer[];
}

export interface PlayerPlayer {
  earned_runs: string;
  earned_runs_average: string;
  hbp: string;
  hits: string;
  holds: string;
  home_runs: string;
  id: string;
  innings_pitched: string;
  loss: Loss;
  name: string;
  'pc-st': string;
  runs: string;
  saves: string;
  strikeouts: string;
  walks: string;
  win: Win;
}

export enum Loss {
  Empty = '',
  The01 = '0-1',
  The12 = '1-2',
  The31 = '3-1',
}

export enum Win {
  Empty = '',
  The10 = '1-0',
  The52 = '5-2',
}

export interface Hometeam {
  player: PlayerPlayer[] | PlayerPlayer;
}
