const SPORTS_TEST_DATA = [
  {
    key: 'americanfootball_cfl',
    group: 'American Football',
    title: 'CFL',
    description: 'Canadian Football League',
    active: true,
    has_outrights: false,
  },
  {
    key: 'americanfootball_ncaaf',
    group: 'American Football',
    title: 'NCAAF',
    description: 'US College Football',
    active: true,
    has_outrights: false,
  },
  {
    key: 'americanfootball_nfl',
    group: 'American Football',
    title: 'NFL',
    description: 'US Football',
    active: true,
    has_outrights: false,
  },
  {
    key: 'americanfootball_nfl_super_bowl_winner',
    group: 'American Football',
    title: 'NFL Super Bowl Winner',
    description: 'Super Bowl Winner 2022/2023',
    active: true,
    has_outrights: true,
  },
  {
    key: 'baseball_mlb_world_series_winner',
    group: 'Baseball',
    title: 'MLB World Series Winner',
    description: 'World Series Winner 2022',
    active: true,
    has_outrights: true,
  },
  {
    key: 'basketball_euroleague',
    group: 'Basketball',
    title: 'Basketball Euroleague',
    description: 'Basketball Euroleague',
    active: true,
    has_outrights: false,
  },
  {
    key: 'basketball_nba',
    group: 'Basketball',
    title: 'NBA',
    description: 'US Basketball',
    active: true,
    has_outrights: false,
  },
  {
    key: 'basketball_nba_championship_winner',
    group: 'Basketball',
    title: 'NBA Championship Winner',
    description: 'Championship Winner 2022/2023',
    active: true,
    has_outrights: true,
  },
  {
    key: 'basketball_ncaab',
    group: 'Basketball',
    title: 'NCAAB',
    description: 'US College Basketball',
    active: true,
    has_outrights: false,
  },
  {
    key: 'cricket_big_bash',
    group: 'Cricket',
    title: 'Big Bash',
    description: 'Big Bash League',
    active: true,
    has_outrights: false,
  },
  {
    key: 'cricket_international_t20',
    group: 'Cricket',
    title: 'International Twenty20',
    description: 'International Twenty20',
    active: true,
    has_outrights: false,
  },
  {
    key: 'cricket_odi',
    group: 'Cricket',
    title: 'One Day Internationals',
    description: 'One Day Internationals',
    active: true,
    has_outrights: false,
  },
  {
    key: 'cricket_test_match',
    group: 'Cricket',
    title: 'Test Matches',
    description: 'International Test Matches',
    active: true,
    has_outrights: false,
  },
  {
    key: 'golf_masters_tournament_winner',
    group: 'Golf',
    title: 'Masters Tournament Winner',
    description: '2023 Winner',
    active: true,
    has_outrights: true,
  },
  {
    key: 'golf_pga_championship_winner',
    group: 'Golf',
    title: 'PGA Championship Winner',
    description: '2023 Winner',
    active: true,
    has_outrights: true,
  },
  {
    key: 'golf_the_open_championship_winner',
    group: 'Golf',
    title: 'The Open Winner',
    description: '2023 Winner',
    active: true,
    has_outrights: true,
  },
  {
    key: 'golf_us_open_winner',
    group: 'Golf',
    title: 'US Open Winner',
    description: '2023 Winner',
    active: true,
    has_outrights: true,
  },
  {
    key: 'icehockey_nhl',
    group: 'Ice Hockey',
    title: 'NHL',
    description: 'US Ice Hockey',
    active: true,
    has_outrights: false,
  },
  {
    key: 'icehockey_nhl_championship_winner',
    group: 'Ice Hockey',
    title: 'NHL Championship Winner',
    description: 'Stanley Cup Winner 2022/2023',
    active: true,
    has_outrights: true,
  },
  {
    key: 'icehockey_sweden_allsvenskan',
    group: 'Ice Hockey',
    title: 'HockeyAllsvenskan',
    description: 'Swedish Hockey Allsvenskan',
    active: true,
    has_outrights: false,
  },
  {
    key: 'icehockey_sweden_hockey_league',
    group: 'Ice Hockey',
    title: 'SHL',
    description: 'Swedish Hockey League',
    active: true,
    has_outrights: false,
  },
  {
    key: 'mma_mixed_martial_arts',
    group: 'Mixed Martial Arts',
    title: 'MMA',
    description: 'Mixed Martial Arts',
    active: true,
    has_outrights: false,
  },
  {
    key: 'rugbyleague_nrl',
    group: 'Rugby League',
    title: 'NRL',
    description: 'Aussie Rugby League',
    active: true,
    has_outrights: false,
  },
  {
    key: 'soccer_china_superleague',
    group: 'Soccer',
    title: 'Super League - China',
    description: 'Chinese Soccer',
    active: true,
    has_outrights: false,
  },
  {
    key: 'soccer_efl_champ',
    group: 'Soccer',
    title: 'Championship',
    description: 'EFL Championship',
    active: true,
    has_outrights: false,
  },
  {
    key: 'soccer_england_league1',
    group: 'Soccer',
    title: 'League 1',
    description: 'EFL League 1',
    active: true,
    has_outrights: false,
  },
  {
    key: 'soccer_england_league2',
    group: 'Soccer',
    title: 'League 2',
    description: 'EFL League 2 ',
    active: true,
    has_outrights: false,
  },
  {
    key: 'soccer_epl',
    group: 'Soccer',
    title: 'EPL',
    description: 'English Premier League',
    active: true,
    has_outrights: false,
  },
  {
    key: 'soccer_fifa_world_cup',
    group: 'Soccer',
    title: 'FIFA World Cup',
    description: 'FIFA World Cup 2022',
    active: true,
    has_outrights: false,
  },
  {
    key: 'soccer_fifa_world_cup_winner',
    group: 'Soccer',
    title: 'FIFA World Cup Winner',
    description: 'FIFA World Cup Winner 2022',
    active: true,
    has_outrights: true,
  },
  {
    key: 'soccer_france_ligue_one',
    group: 'Soccer',
    title: 'Ligue 1 - France',
    description: 'French Soccer',
    active: true,
    has_outrights: false,
  },
  {
    key: 'soccer_germany_bundesliga',
    group: 'Soccer',
    title: 'Bundesliga - Germany',
    description: 'German Soccer',
    active: true,
    has_outrights: false,
  },
  {
    key: 'soccer_italy_serie_a',
    group: 'Soccer',
    title: 'Serie A - Italy',
    description: 'Italian Soccer',
    active: true,
    has_outrights: false,
  },
  {
    key: 'soccer_poland_ekstraklasa',
    group: 'Soccer',
    title: 'Ekstraklasa - Poland',
    description: 'Polish Soccer',
    active: true,
    has_outrights: false,
  },
  {
    key: 'soccer_spain_la_liga',
    group: 'Soccer',
    title: 'La Liga - Spain',
    description: 'Spanish Soccer',
    active: true,
    has_outrights: false,
  },
  {
    key: 'soccer_spain_segunda_division',
    group: 'Soccer',
    title: 'La Liga 2 - Spain',
    description: 'Spanish Soccer',
    active: true,
    has_outrights: false,
  },
  {
    key: 'soccer_uefa_champs_league',
    group: 'Soccer',
    title: 'UEFA Champions',
    description: 'European Champions League',
    active: true,
    has_outrights: false,
  },
  {
    key: 'soccer_uefa_europa_conference_league',
    group: 'Soccer',
    title: 'UEFA Europa Conference League',
    description: 'UEFA Europa Conference League',
    active: true,
    has_outrights: false,
  },
  {
    key: 'soccer_uefa_europa_league',
    group: 'Soccer',
    title: 'UEFA Europa',
    description: 'European Europa League',
    active: true,
    has_outrights: false,
  },
];

const UPCOMING_TEST_DATA = [
  {
    id: '9bd7c0814ea75344b46454bf61896098',
    sport_key: 'basketball_ncaab',
    sport_title: 'NCAAB',
    commence_time: '2022-11-16T17:00:00Z',
    home_team: 'Kent State Golden Flashes',
    away_team: 'Arkansas-Pine Bluff Golden Lions',
    bookmakers: [
      {
        key: 'fanduel',
        title: 'FanDuel',
        last_update: '2022-11-16T07:21:07Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              {
                name: 'Arkansas-Pine Bluff Golden Lions',
                price: 21,
              },
              {
                name: 'Kent State Golden Flashes',
                price: 1.01,
              },
            ],
          },
        ],
      },
      {
        key: 'pointsbetus',
        title: 'PointsBet (US)',
        last_update: '2022-11-16T07:16:26Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              {
                name: 'Arkansas-Pine Bluff Golden Lions',
                price: 21,
              },
              {
                name: 'Kent State Golden Flashes',
                price: 1.01,
              },
            ],
          },
        ],
      },
      {
        key: 'foxbet',
        title: 'FOX Bet',
        last_update: '2022-11-16T07:16:20Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              {
                name: 'Arkansas-Pine Bluff Golden Lions',
                price: 10,
              },
              {
                name: 'Kent State Golden Flashes',
                price: 1.03,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'c9042d070563881f56e66406215fec19',
    sport_key: 'icehockey_sweden_allsvenskan',
    sport_title: 'HockeyAllsvenskan',
    commence_time: '2022-11-16T18:00:00Z',
    home_team: 'AIK',
    away_team: 'HC Vita Hästen',
    bookmakers: [],
  },
  {
    id: '27fe1da772400b023e23ee0f213e9770',
    sport_key: 'icehockey_sweden_allsvenskan',
    sport_title: 'HockeyAllsvenskan',
    commence_time: '2022-11-16T18:00:00Z',
    home_team: 'Södertälje SK',
    away_team: 'Almtuna IS',
    bookmakers: [],
  },
  {
    id: '053edfd24884fe8d18a09b175e55fb6b',
    sport_key: 'icehockey_sweden_allsvenskan',
    sport_title: 'HockeyAllsvenskan',
    commence_time: '2022-11-16T18:00:00Z',
    home_team: 'IF Björklöven',
    away_team: 'BIK Karlskoga',
    bookmakers: [],
  },
  {
    id: '3dfa305d75eebad89e8c7daa21444a3f',
    sport_key: 'icehockey_sweden_hockey_league',
    sport_title: 'SHL',
    commence_time: '2022-11-16T18:00:00Z',
    home_team: 'Brynäs IF',
    away_team: 'Malmö Redhawks',
    bookmakers: [
      {
        key: 'betfair',
        title: 'Betfair',
        last_update: '2022-11-16T07:20:45Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              {
                name: 'Brynäs IF',
                price: 1.78,
              },
              {
                name: 'Malmö Redhawks',
                price: 2.16,
              },
            ],
          },
          {
            key: 'h2h_lay',
            outcomes: [
              {
                name: 'Brynäs IF',
                price: 1.87,
              },
              {
                name: 'Malmö Redhawks',
                price: 2.3,
              },
            ],
          },
        ],
      },
      {
        key: 'intertops',
        title: 'Intertops',
        last_update: '2022-11-16T07:19:42Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              {
                name: 'Brynäs IF',
                price: 2.05,
              },
              {
                name: 'Malmö Redhawks',
                price: 2.6,
              },
              {
                name: 'Draw',
                price: 4.1,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: '5d94bf1f8f2479d4d06742d97a4b9ede',
    sport_key: 'icehockey_sweden_allsvenskan',
    sport_title: 'HockeyAllsvenskan',
    commence_time: '2022-11-16T18:00:00Z',
    home_team: 'Kristianstads IK',
    away_team: 'Östersunds IK',
    bookmakers: [],
  },
  {
    id: 'e73d5829c6e7da428d5be5584743732b',
    sport_key: 'icehockey_sweden_allsvenskan',
    sport_title: 'HockeyAllsvenskan',
    commence_time: '2022-11-16T18:00:00Z',
    home_team: 'Västerviks IK',
    away_team: 'Västerås IK',
    bookmakers: [],
  },
  {
    id: '9cda64594208bb5157b311a5b5eefbbe',
    sport_key: 'soccer_fa_cup',
    sport_title: 'FA Cup',
    commence_time: '2022-11-16T19:45:00Z',
    home_team: 'Woking FC',
    away_team: 'Oxford United',
    bookmakers: [
      {
        key: 'fanduel',
        title: 'FanDuel',
        last_update: '2022-11-16T07:16:10Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              {
                name: 'Oxford United',
                price: 1.71,
              },
              {
                name: 'Woking FC',
                price: 4.4,
              },
              {
                name: 'Draw',
                price: 3.5,
              },
            ],
          },
        ],
      },
      {
        key: 'bovada',
        title: 'Bovada',
        last_update: '2022-11-16T07:17:53Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              {
                name: 'Oxford United',
                price: 1.83,
              },
              {
                name: 'Woking FC',
                price: 4.3,
              },
              {
                name: 'Draw',
                price: 3.5,
              },
            ],
          },
        ],
      },
      {
        key: 'superbook',
        title: 'SuperBook',
        last_update: '2022-11-16T07:20:57Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              {
                name: 'Oxford United',
                price: 1.83,
              },
              {
                name: 'Woking FC',
                price: 4.3,
              },
              {
                name: 'Draw',
                price: 3.7,
              },
            ],
          },
        ],
      },
      {
        key: 'betfair',
        title: 'Betfair',
        last_update: '2022-11-16T07:19:14Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              {
                name: 'Oxford United',
                price: 1.84,
              },
              {
                name: 'Woking FC',
                price: 4.6,
              },
              {
                name: 'Draw',
                price: 3.8,
              },
            ],
          },
          {
            key: 'h2h_lay',
            outcomes: [
              {
                name: 'Oxford United',
                price: 1.89,
              },
              {
                name: 'Woking FC',
                price: 5.2,
              },
              {
                name: 'Draw',
                price: 4.1,
              },
            ],
          },
        ],
      },
      {
        key: 'barstool',
        title: 'Barstool Sportsbook',
        last_update: '2022-11-16T07:18:43Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              {
                name: 'Oxford United',
                price: 1.8,
              },
              {
                name: 'Woking FC',
                price: 4.15,
              },
              {
                name: 'Draw',
                price: 3.6,
              },
            ],
          },
        ],
      },
      {
        key: 'unibet_us',
        title: 'Unibet',
        last_update: '2022-11-16T07:16:10Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              {
                name: 'Oxford United',
                price: 1.8,
              },
              {
                name: 'Woking FC',
                price: 4.15,
              },
              {
                name: 'Draw',
                price: 3.6,
              },
            ],
          },
        ],
      },
      {
        key: 'sugarhouse',
        title: 'SugarHouse',
        last_update: '2022-11-16T07:21:05Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              {
                name: 'Oxford United',
                price: 1.8,
              },
              {
                name: 'Woking FC',
                price: 4.15,
              },
              {
                name: 'Draw',
                price: 3.6,
              },
            ],
          },
        ],
      },
      {
        key: 'intertops',
        title: 'Intertops',
        last_update: '2022-11-16T07:16:59Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              {
                name: 'Oxford United',
                price: 1.8,
              },
              {
                name: 'Woking FC',
                price: 4.4,
              },
              {
                name: 'Draw',
                price: 3.65,
              },
            ],
          },
        ],
      },
      {
        key: 'lowvig',
        title: 'LowVig.ag',
        last_update: '2022-11-16T07:19:55Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              {
                name: 'Oxford United',
                price: 1.79,
              },
              {
                name: 'Woking FC',
                price: 4,
              },
              {
                name: 'Draw',
                price: 3.45,
              },
            ],
          },
        ],
      },
      {
        key: 'betonlineag',
        title: 'BetOnline.ag',
        last_update: '2022-11-16T07:20:31Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              {
                name: 'Oxford United',
                price: 1.78,
              },
              {
                name: 'Woking FC',
                price: 4,
              },
              {
                name: 'Draw',
                price: 3.45,
              },
            ],
          },
        ],
      },
    ],
  },
];

export { SPORTS_TEST_DATA, UPCOMING_TEST_DATA };
