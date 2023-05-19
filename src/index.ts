import { Category, Match, type RootObject, Scores } from './utils/types.ts';

interface VersusGame {
  homeTeam: string;
  homeLogo: string;
  homeScore: string;
  homeRecord: string;
  awayTeam: string;
  awayLogo: string;
  awayScore: string;
  awayRecord: string;
  gameStatus: string;
  gameTime: string;
  gamePeriod: string;
  hasPossession: string;
}

window.Webflow ||= [];
window.Webflow.push(async () => {
  const baseURL = 'https://www.goalserve.com/getfeed/1db8075f29f8459c7b8408db308b1225/';
  const MLBScores = baseURL + 'baseball/usa?json=true';
  const url = new URL('https://www.goalserve.com/getfeed/1db8075f29f8459c7b8408db308b1225/');

  /**
   * Hit the Enpoint for 2 team matches
   * @param endpoint enpoint for given sport / league
   * @returns a
   */
  const hitEndpoint = async (endpoint: string): Promise<Match[]> => {
    try {
      // Create the endpoint to hit
      const url = new URL('https://www.goalserve.com/getfeed/1db8075f29f8459c7b8408db308b1225/');
      const re = await fetch(url + endpoint);
      const data: RootObject = await re.json();
      const matchData = data.scores.category.match;

      matchData.forEach(async (match) => {
        const urlHome = new URL(
          `https://www.goalserve.com/getfeed/1db8075f29f8459c7b8408db308b1225/baseball/${match.hometeam.id}_rosters?json=true`
        );
        const reHome = await fetch(urlHome);
        const dataHome = await reHome.json();

        const urlAway = new URL(
          `https://www.goalserve.com/getfeed/1db8075f29f8459c7b8408db308b1225/baseball/${match.awayteam.id}_rosters?json=true`
        );
        const reAway = await fetch(urlAway);
        const dataAway = await reAway.json();
        console.log(match);
        console.log(dataHome);
        console.log(dataAway);
      });

      return matchData;
    } catch (eer) {
      return [];
    }
  };

  /**
   * Fetcthes the data for a specific team
   * @param url The URLof the team
   * @returns A
   */
  const getTeamData = async (url: string) => {
    try {
      const re = await fetch(url);
      //const data: Team = await re.json();
    } catch (err) {
      return null;
    }
  };

  const mlb = await hitEndpoint('baseball/usa?json=true');
  console.log(mlb);
});
