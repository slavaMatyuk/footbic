const requestHeaders: HeadersInit_ = new Headers();
requestHeaders.set('X-Auth-Token', '399bfa568b214d0e92854ec170152895');

export const getTeams = async () => {
  try {
    const response = await fetch(
      'https://api.football-data.org/v4/teams?limit=100',
      {
        headers: requestHeaders,
      },
    );
    const data = await response.json();
    return data.teams;
  } catch (error) {
    console.log(`[Fetch all error]: ${error}`);
  }
};

export const getCurrentTeamById = async (id: number) => {
  try {
    const response = await fetch(
      `https://api.football-data.org/v4/teams/${id}`,
      {
        headers: requestHeaders,
      },
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(`[Fetch team error]: ${error}`);
  }
};

export const getUpcomingMatchesById = async (id: number) => {
  try {
    const response = await fetch(
      `https://api.football-data.org/v4/teams/${id}/matches?status=SCHEDULED`,
      {
        headers: requestHeaders,
      },
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(`[Fetch team error]: ${error}`);
  }
};
