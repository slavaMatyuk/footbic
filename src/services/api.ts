import {APP_CONFIG} from '@config/app.config';
import {MATCHES_LIMIT, TEAMS_LIMIT} from '@constants/index';

const requestHeaders: HeadersInit_ = new Headers();
requestHeaders.set('X-Auth-Token', APP_CONFIG.FOOTBALL_API_KEY);

export const getTeams = async () => {
  const response = await fetch(
    `https://api.football-data.org/v4/teams?limit=${TEAMS_LIMIT}`,
    {
      headers: requestHeaders,
    },
  );
  const data = await response.json();
  return data.teams;
};

export const getCurrentTeamById = async (id: number) => {
  const response = await fetch(`https://api.football-data.org/v4/teams/${id}`, {
    headers: requestHeaders,
  });
  const data = await response.json();
  return data;
};

export const getUpcomingMatchesById = async (id: number) => {
  const response = await fetch(
    `https://api.football-data.org/v4/teams/${id}/matches?status=SCHEDULED&limit=${MATCHES_LIMIT}`,
    {
      headers: requestHeaders,
    },
  );
  const data = await response.json();
  return data.matches;
};
