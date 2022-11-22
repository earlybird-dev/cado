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
    id: 'bd1264c3e136eeacaff01e1270ca488a',
    sport_key: 'americanfootball_ncaaf',
    sport_title: 'NCAAF',
    commence_time: '2022-11-20T03:37:40Z',
    home_team: 'Nevada Wolf Pack',
    away_team: 'Fresno State Bulldogs',
    bookmakers: [
      {
        key: 'fanduel',
        title: 'FanDuel',
        last_update: '2022-11-20T06:56:25Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Fresno State Bulldogs', price: 1.0 },
              { name: 'Nevada Wolf Pack', price: 76.0 },
            ],
          },
        ],
      },
      {
        key: 'bovada',
        title: 'Bovada',
        last_update: '2022-11-20T07:03:20Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Fresno State Bulldogs', price: 1.0 },
              { name: 'Nevada Wolf Pack', price: 19.0 },
            ],
          },
        ],
      },
      {
        key: 'gtbets',
        title: 'GTbets',
        last_update: '2022-11-20T07:03:11Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Fresno State Bulldogs', price: 1.03 },
              { name: 'Nevada Wolf Pack', price: 15.01 },
            ],
          },
        ],
      },
    ],
  },
  {
    id: '335d49d49785a83cef3ce3c4e3e7dc76',
    sport_key: 'americanfootball_ncaaf',
    sport_title: 'NCAAF',
    commence_time: '2022-11-20T04:08:24Z',
    home_team: 'Hawaii Rainbow Warriors',
    away_team: 'UNLV Rebels',
    bookmakers: [
      {
        key: 'fanduel',
        title: 'FanDuel',
        last_update: '2022-11-20T07:05:35Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Hawaii Rainbow Warriors', price: 1.01 },
              { name: 'UNLV Rebels', price: 17.0 },
            ],
          },
        ],
      },
      {
        key: 'draftkings',
        title: 'DraftKings',
        last_update: '2022-11-20T07:04:21Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Hawaii Rainbow Warriors', price: 1.19 },
              { name: 'UNLV Rebels', price: 4.9 },
            ],
          },
        ],
      },
      {
        key: 'twinspires',
        title: 'TwinSpires',
        last_update: '2022-11-20T07:04:14Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Hawaii Rainbow Warriors', price: 1.11 },
              { name: 'UNLV Rebels', price: 6.5 },
            ],
          },
        ],
      },
      {
        key: 'bovada',
        title: 'Bovada',
        last_update: '2022-11-20T07:05:30Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Hawaii Rainbow Warriors', price: 1.24 },
              { name: 'UNLV Rebels', price: 3.85 },
            ],
          },
        ],
      },
      {
        key: 'mybookieag',
        title: 'MyBookie.ag',
        last_update: '2022-11-20T07:05:23Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Hawaii Rainbow Warriors', price: 1.9 },
              { name: 'UNLV Rebels', price: 1.75 },
            ],
          },
        ],
      },
      {
        key: 'pointsbetus',
        title: 'PointsBet (US)',
        last_update: '2022-11-20T07:05:36Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Hawaii Rainbow Warriors', price: 1.0 },
              { name: 'UNLV Rebels', price: 1.0 },
            ],
          },
        ],
      },
      {
        key: 'foxbet',
        title: 'FOX Bet',
        last_update: '2022-11-20T07:05:35Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Hawaii Rainbow Warriors', price: 1.85 },
              { name: 'UNLV Rebels', price: 1.8 },
            ],
          },
        ],
      },
      {
        key: 'gtbets',
        title: 'GTbets',
        last_update: '2022-11-20T07:05:18Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Hawaii Rainbow Warriors', price: 1.18 },
              { name: 'UNLV Rebels', price: 4.52 },
            ],
          },
        ],
      },
      {
        key: 'betmgm',
        title: 'BetMGM',
        last_update: '2022-11-20T07:05:23Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Hawaii Rainbow Warriors', price: 1.06 },
              { name: 'UNLV Rebels', price: 8.0 },
            ],
          },
        ],
      },
    ],
  },
  {
    id: '35e987c7535c85212b1a18fdd24e26e2',
    sport_key: 'cricket_international_t20',
    sport_title: 'International Twenty20',
    commence_time: '2022-11-20T06:30:00Z',
    home_team: 'New Zealand',
    away_team: 'India',
    bookmakers: [
      {
        key: 'betfair',
        title: 'Betfair',
        last_update: '2022-11-20T07:05:30Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'India', price: 2.28 },
              { name: 'New Zealand', price: 1.77 },
            ],
          },
          {
            key: 'h2h_lay',
            outcomes: [
              { name: 'India', price: 2.3 },
              { name: 'New Zealand', price: 1.78 },
            ],
          },
        ],
      },
      {
        key: 'unibet_us',
        title: 'Unibet',
        last_update: '2022-11-20T07:05:43Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'India', price: 2.16 },
              { name: 'New Zealand', price: 1.7 },
            ],
          },
        ],
      },
    ],
  },
  {
    id: '1725da50878e7b3d95963b423edf5f80',
    sport_key: 'soccer_spain_segunda_division',
    sport_title: 'La Liga 2 - Spain',
    commence_time: '2022-11-20T13:00:00Z',
    home_team: 'Villarreal',
    away_team: 'UD Ibiza',
    bookmakers: [
      {
        key: 'twinspires',
        title: 'TwinSpires',
        last_update: '2022-11-20T07:02:15Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'UD Ibiza', price: 3.85 },
              { name: 'Villarreal', price: 2.0 },
              { name: 'Draw', price: 3.1 },
            ],
          },
        ],
      },
      {
        key: 'barstool',
        title: 'Barstool Sportsbook',
        last_update: '2022-11-20T07:04:51Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'UD Ibiza', price: 3.85 },
              { name: 'Villarreal', price: 2.0 },
              { name: 'Draw', price: 3.1 },
            ],
          },
        ],
      },
      {
        key: 'foxbet',
        title: 'FOX Bet',
        last_update: '2022-11-20T07:00:55Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'UD Ibiza', price: 3.5 },
              { name: 'Villarreal', price: 2.05 },
              { name: 'Draw', price: 3.25 },
            ],
          },
        ],
      },
      {
        key: 'wynnbet',
        title: 'WynnBET',
        last_update: '2022-11-20T07:01:41Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'UD Ibiza', price: 3.7 },
              { name: 'Villarreal', price: 2.1 },
              { name: 'Draw', price: 3.25 },
            ],
          },
        ],
      },
      {
        key: 'draftkings',
        title: 'DraftKings',
        last_update: '2022-11-20T07:01:55Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'UD Ibiza', price: 3.65 },
              { name: 'Villarreal', price: 2.1 },
              { name: 'Draw', price: 3.3 },
            ],
          },
        ],
      },
      {
        key: 'unibet_us',
        title: 'Unibet',
        last_update: '2022-11-20T07:01:40Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'UD Ibiza', price: 3.85 },
              { name: 'Villarreal', price: 2.0 },
              { name: 'Draw', price: 3.1 },
            ],
          },
        ],
      },
      {
        key: 'superbook',
        title: 'SuperBook',
        last_update: '2022-11-20T07:01:10Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'UD Ibiza', price: 3.55 },
              { name: 'Villarreal', price: 2.15 },
              { name: 'Draw', price: 3.35 },
            ],
          },
        ],
      },
      {
        key: 'fanduel',
        title: 'FanDuel',
        last_update: '2022-11-20T07:01:40Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'UD Ibiza', price: 3.6 },
              { name: 'Villarreal', price: 2.0 },
              { name: 'Draw', price: 3.1 },
            ],
          },
        ],
      },
      {
        key: 'betfair',
        title: 'Betfair',
        last_update: '2022-11-20T07:05:09Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'UD Ibiza', price: 3.85 },
              { name: 'Villarreal', price: 2.16 },
              { name: 'Draw', price: 3.4 },
            ],
          },
          {
            key: 'h2h_lay',
            outcomes: [
              { name: 'UD Ibiza', price: 4.1 },
              { name: 'Villarreal', price: 2.24 },
              { name: 'Draw', price: 3.45 },
            ],
          },
        ],
      },
      {
        key: 'betonlineag',
        title: 'BetOnline.ag',
        last_update: '2022-11-20T07:04:38Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'UD Ibiza', price: 3.3 },
              { name: 'Villarreal', price: 2.11 },
              { name: 'Draw', price: 3.2 },
            ],
          },
        ],
      },
    ],
  },
  {
    id: '5f5ee9ce2377d8a4560917ce1604e96e',
    sport_key: 'soccer_spain_segunda_division',
    sport_title: 'La Liga 2 - Spain',
    commence_time: '2022-11-20T15:15:00Z',
    home_team: 'Andorra CF',
    away_team: 'Lugo',
    bookmakers: [
      {
        key: 'twinspires',
        title: 'TwinSpires',
        last_update: '2022-11-20T07:02:15Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Andorra CF', price: 1.83 },
              { name: 'Lugo', price: 4.5 },
              { name: 'Draw', price: 3.1 },
            ],
          },
        ],
      },
      {
        key: 'barstool',
        title: 'Barstool Sportsbook',
        last_update: '2022-11-20T07:04:51Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Andorra CF', price: 1.83 },
              { name: 'Lugo', price: 4.5 },
              { name: 'Draw', price: 3.1 },
            ],
          },
        ],
      },
      {
        key: 'foxbet',
        title: 'FOX Bet',
        last_update: '2022-11-20T07:00:55Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Andorra CF', price: 1.83 },
              { name: 'Lugo', price: 4.2 },
              { name: 'Draw', price: 3.25 },
            ],
          },
        ],
      },
      {
        key: 'wynnbet',
        title: 'WynnBET',
        last_update: '2022-11-20T07:01:41Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Andorra CF', price: 1.87 },
              { name: 'Lugo', price: 4.6 },
              { name: 'Draw', price: 3.3 },
            ],
          },
        ],
      },
      {
        key: 'draftkings',
        title: 'DraftKings',
        last_update: '2022-11-20T07:01:55Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Andorra CF', price: 1.83 },
              { name: 'Lugo', price: 4.8 },
              { name: 'Draw', price: 3.3 },
            ],
          },
        ],
      },
      {
        key: 'unibet_us',
        title: 'Unibet',
        last_update: '2022-11-20T07:01:40Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Andorra CF', price: 1.83 },
              { name: 'Lugo', price: 4.5 },
              { name: 'Draw', price: 3.1 },
            ],
          },
        ],
      },
      {
        key: 'superbook',
        title: 'SuperBook',
        last_update: '2022-11-20T07:01:10Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Andorra CF', price: 1.9 },
              { name: 'Lugo', price: 4.4 },
              { name: 'Draw', price: 3.3 },
            ],
          },
        ],
      },
      {
        key: 'fanduel',
        title: 'FanDuel',
        last_update: '2022-11-20T07:01:40Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Andorra CF', price: 1.8 },
              { name: 'Lugo', price: 4.5 },
              { name: 'Draw', price: 3.1 },
            ],
          },
        ],
      },
      {
        key: 'betfair',
        title: 'Betfair',
        last_update: '2022-11-20T07:05:09Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Andorra CF', price: 1.95 },
              { name: 'Lugo', price: 4.8 },
              { name: 'Draw', price: 3.4 },
            ],
          },
          {
            key: 'h2h_lay',
            outcomes: [
              { name: 'Andorra CF', price: 1.98 },
              { name: 'Lugo', price: 5.2 },
              { name: 'Draw', price: 3.5 },
            ],
          },
        ],
      },
      {
        key: 'betonlineag',
        title: 'BetOnline.ag',
        last_update: '2022-11-20T07:04:38Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Andorra CF', price: 1.86 },
              { name: 'Lugo', price: 4.0 },
              { name: 'Draw', price: 3.3 },
            ],
          },
        ],
      },
    ],
  },
  {
    id: '88421724590987c6bc186afa9e27e34b',
    sport_key: 'basketball_ncaab',
    sport_title: 'NCAAB',
    commence_time: '2022-11-20T15:30:00Z',
    home_team: 'South Carolina Gamecocks',
    away_team: 'Furman Paladins',
    bookmakers: [
      {
        key: 'fanduel',
        title: 'FanDuel',
        last_update: '2022-11-20T07:04:08Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Furman Paladins', price: 1.36 },
              { name: 'South Carolina Gamecocks', price: 3.25 },
            ],
          },
        ],
      },
      {
        key: 'draftkings',
        title: 'DraftKings',
        last_update: '2022-11-20T07:02:20Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Furman Paladins', price: 1.33 },
              { name: 'South Carolina Gamecocks', price: 3.5 },
            ],
          },
        ],
      },
      {
        key: 'pointsbetus',
        title: 'PointsBet (US)',
        last_update: '2022-11-20T07:02:57Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Furman Paladins', price: 1.33 },
              { name: 'South Carolina Gamecocks', price: 3.4 },
            ],
          },
        ],
      },
      {
        key: 'foxbet',
        title: 'FOX Bet',
        last_update: '2022-11-20T07:02:13Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Furman Paladins', price: 1.33 },
              { name: 'South Carolina Gamecocks', price: 3.1 },
            ],
          },
        ],
      },
      {
        key: 'circasports',
        title: 'Circa Sports',
        last_update: '2022-11-20T07:02:13Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Furman Paladins', price: 1.34 },
              { name: 'South Carolina Gamecocks', price: 3.4 },
            ],
          },
        ],
      },
      {
        key: 'mybookieag',
        title: 'MyBookie.ag',
        last_update: '2022-11-20T07:05:21Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Furman Paladins', price: 1.35 },
              { name: 'South Carolina Gamecocks', price: 3.23 },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'd01b5254423605793303c2809ede5ee9',
    sport_key: 'basketball_ncaab',
    sport_title: 'NCAAB',
    commence_time: '2022-11-20T15:30:00Z',
    home_team: 'Tulsa Golden Hurricane',
    away_team: 'Murray St Racers',
    bookmakers: [
      {
        key: 'fanduel',
        title: 'FanDuel',
        last_update: '2022-11-20T07:04:08Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Murray St Racers', price: 1.65 },
              { name: 'Tulsa Golden Hurricane', price: 2.28 },
            ],
          },
        ],
      },
      {
        key: 'draftkings',
        title: 'DraftKings',
        last_update: '2022-11-20T07:02:20Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Murray St Racers', price: 1.71 },
              { name: 'Tulsa Golden Hurricane', price: 2.2 },
            ],
          },
        ],
      },
      {
        key: 'pointsbetus',
        title: 'PointsBet (US)',
        last_update: '2022-11-20T07:02:57Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Murray St Racers', price: 1.71 },
              { name: 'Tulsa Golden Hurricane', price: 2.2 },
            ],
          },
        ],
      },
      {
        key: 'foxbet',
        title: 'FOX Bet',
        last_update: '2022-11-20T07:02:13Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Murray St Racers', price: 1.65 },
              { name: 'Tulsa Golden Hurricane', price: 2.15 },
            ],
          },
        ],
      },
      {
        key: 'circasports',
        title: 'Circa Sports',
        last_update: '2022-11-20T07:02:13Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Murray St Racers', price: 1.69 },
              { name: 'Tulsa Golden Hurricane', price: 2.22 },
            ],
          },
        ],
      },
      {
        key: 'mybookieag',
        title: 'MyBookie.ag',
        last_update: '2022-11-20T07:05:21Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Murray St Racers', price: 1.68 },
              { name: 'Tulsa Golden Hurricane', price: 2.21 },
            ],
          },
        ],
      },
    ],
  },
  {
    id: '3fc968505e3de3acbb9baa2876925172',
    sport_key: 'soccer_fifa_world_cup',
    sport_title: 'FIFA World Cup',
    commence_time: '2022-11-20T16:00:00Z',
    home_team: 'Qatar',
    away_team: 'Ecuador',
    bookmakers: [
      {
        key: 'mybookieag',
        title: 'MyBookie.ag',
        last_update: '2022-11-20T07:04:46Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Ecuador', price: 2.38 },
              { name: 'Qatar', price: 3.3 },
              { name: 'Draw', price: 3.06 },
            ],
          },
        ],
      },
      {
        key: 'williamhill_us',
        title: 'William Hill (US)',
        last_update: '2022-11-20T07:01:03Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Ecuador', price: 2.24 },
              { name: 'Qatar', price: 3.55 },
              { name: 'Draw', price: 3.0 },
            ],
          },
        ],
      },
      {
        key: 'draftkings',
        title: 'DraftKings',
        last_update: '2022-11-20T07:04:56Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Ecuador', price: 2.35 },
              { name: 'Qatar', price: 3.45 },
              { name: 'Draw', price: 3.1 },
            ],
          },
        ],
      },
      {
        key: 'betrivers',
        title: 'BetRivers',
        last_update: '2022-11-20T07:05:39Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Ecuador', price: 2.28 },
              { name: 'Qatar', price: 3.75 },
              { name: 'Draw', price: 3.05 },
            ],
          },
        ],
      },
      {
        key: 'bovada',
        title: 'Bovada',
        last_update: '2022-11-20T07:05:13Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Ecuador', price: 2.3 },
              { name: 'Qatar', price: 3.4 },
              { name: 'Draw', price: 3.15 },
            ],
          },
        ],
      },
      {
        key: 'sugarhouse',
        title: 'SugarHouse',
        last_update: '2022-11-20T07:01:58Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Ecuador', price: 2.28 },
              { name: 'Qatar', price: 3.75 },
              { name: 'Draw', price: 3.05 },
            ],
          },
        ],
      },
      {
        key: 'barstool',
        title: 'Barstool Sportsbook',
        last_update: '2022-11-20T07:04:05Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Ecuador', price: 2.28 },
              { name: 'Qatar', price: 3.75 },
              { name: 'Draw', price: 3.05 },
            ],
          },
        ],
      },
      {
        key: 'fanduel',
        title: 'FanDuel',
        last_update: '2022-11-20T07:04:31Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Ecuador', price: 2.25 },
              { name: 'Qatar', price: 3.6 },
              { name: 'Draw', price: 3.0 },
            ],
          },
        ],
      },
      {
        key: 'betfair',
        title: 'Betfair',
        last_update: '2022-11-20T07:05:46Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Ecuador', price: 2.36 },
              { name: 'Qatar', price: 3.8 },
              { name: 'Draw', price: 3.15 },
            ],
          },
          {
            key: 'h2h_lay',
            outcomes: [
              { name: 'Ecuador', price: 2.38 },
              { name: 'Qatar', price: 3.85 },
              { name: 'Draw', price: 3.2 },
            ],
          },
        ],
      },
      {
        key: 'betmgm',
        title: 'BetMGM',
        last_update: '2022-11-20T07:00:22Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Ecuador', price: 2.35 },
              { name: 'Qatar', price: 3.3 },
              { name: 'Draw', price: 3.0 },
            ],
          },
        ],
      },
      {
        key: 'unibet_us',
        title: 'Unibet',
        last_update: '2022-11-20T07:05:48Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Ecuador', price: 2.28 },
              { name: 'Qatar', price: 3.75 },
              { name: 'Draw', price: 3.05 },
            ],
          },
        ],
      },
      {
        key: 'foxbet',
        title: 'FOX Bet',
        last_update: '2022-11-20T07:02:31Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Ecuador', price: 2.2 },
              { name: 'Qatar', price: 3.3 },
              { name: 'Draw', price: 2.85 },
            ],
          },
        ],
      },
      {
        key: 'circasports',
        title: 'Circa Sports',
        last_update: '2022-11-20T07:05:12Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Ecuador', price: 2.28 },
              { name: 'Qatar', price: 3.46 },
              { name: 'Draw', price: 3.13 },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'c73227f48cde4dc1aa134215767be257',
    sport_key: 'basketball_ncaab',
    sport_title: 'NCAAB',
    commence_time: '2022-11-20T17:00:00Z',
    home_team: 'Georgetown Hoyas',
    away_team: 'La Salle Explorers',
    bookmakers: [
      {
        key: 'twinspires',
        title: 'TwinSpires',
        last_update: '2022-11-20T07:02:41Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Georgetown Hoyas', price: 1.74 },
              { name: 'La Salle Explorers', price: 2.12 },
            ],
          },
        ],
      },
      {
        key: 'unibet_us',
        title: 'Unibet',
        last_update: '2022-11-20T07:02:23Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Georgetown Hoyas', price: 1.74 },
              { name: 'La Salle Explorers', price: 2.12 },
            ],
          },
        ],
      },
      {
        key: 'sugarhouse',
        title: 'SugarHouse',
        last_update: '2022-11-20T07:02:23Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Georgetown Hoyas', price: 1.74 },
              { name: 'La Salle Explorers', price: 2.12 },
            ],
          },
        ],
      },
      {
        key: 'barstool',
        title: 'Barstool Sportsbook',
        last_update: '2022-11-20T07:04:31Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Georgetown Hoyas', price: 1.74 },
              { name: 'La Salle Explorers', price: 2.12 },
            ],
          },
        ],
      },
      {
        key: 'fanduel',
        title: 'FanDuel',
        last_update: '2022-11-20T07:04:08Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Georgetown Hoyas', price: 1.72 },
              { name: 'La Salle Explorers', price: 2.15 },
            ],
          },
        ],
      },
      {
        key: 'betrivers',
        title: 'BetRivers',
        last_update: '2022-11-20T07:02:49Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Georgetown Hoyas', price: 1.74 },
              { name: 'La Salle Explorers', price: 2.12 },
            ],
          },
        ],
      },
      {
        key: 'pointsbetus',
        title: 'PointsBet (US)',
        last_update: '2022-11-20T07:02:57Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Georgetown Hoyas', price: 1.74 },
              { name: 'La Salle Explorers', price: 2.15 },
            ],
          },
        ],
      },
      {
        key: 'circasports',
        title: 'Circa Sports',
        last_update: '2022-11-20T07:02:13Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Georgetown Hoyas', price: 1.72 },
              { name: 'La Salle Explorers', price: 2.17 },
            ],
          },
        ],
      },
      {
        key: 'foxbet',
        title: 'FOX Bet',
        last_update: '2022-11-20T07:02:13Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Georgetown Hoyas', price: 1.7 },
              { name: 'La Salle Explorers', price: 2.1 },
            ],
          },
        ],
      },
      {
        key: 'draftkings',
        title: 'DraftKings',
        last_update: '2022-11-20T07:02:20Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Georgetown Hoyas', price: 1.71 },
              { name: 'La Salle Explorers', price: 2.2 },
            ],
          },
        ],
      },
      {
        key: 'mybookieag',
        title: 'MyBookie.ag',
        last_update: '2022-11-20T07:05:21Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Georgetown Hoyas', price: 1.74 },
              { name: 'La Salle Explorers', price: 2.12 },
            ],
          },
        ],
      },
    ],
  },
  {
    id: '98cab3efe80aa4f39c1db664abb83197',
    sport_key: 'basketball_ncaab',
    sport_title: 'NCAAB',
    commence_time: '2022-11-20T17:00:00Z',
    home_team: 'North Carolina Tar Heels',
    away_team: 'James Madison Dukes',
    bookmakers: [
      {
        key: 'fanduel',
        title: 'FanDuel',
        last_update: '2022-11-20T07:04:08Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'James Madison Dukes', price: 5.5 },
              { name: 'North Carolina Tar Heels', price: 1.16 },
            ],
          },
        ],
      },
      {
        key: 'pointsbetus',
        title: 'PointsBet (US)',
        last_update: '2022-11-20T07:02:57Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'James Madison Dukes', price: 6.0 },
              { name: 'North Carolina Tar Heels', price: 1.13 },
            ],
          },
        ],
      },
      {
        key: 'draftkings',
        title: 'DraftKings',
        last_update: '2022-11-20T07:02:20Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'James Madison Dukes', price: 5.9 },
              { name: 'North Carolina Tar Heels', price: 1.15 },
            ],
          },
        ],
      },
      {
        key: 'betmgm',
        title: 'BetMGM',
        last_update: '2022-11-20T07:04:09Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'James Madison Dukes', price: 6.75 },
              { name: 'North Carolina Tar Heels', price: 1.15 },
            ],
          },
        ],
      },
      {
        key: 'betrivers',
        title: 'BetRivers',
        last_update: '2022-11-20T07:02:49Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'James Madison Dukes', price: 5.8 },
              { name: 'North Carolina Tar Heels', price: 1.14 },
            ],
          },
        ],
      },
      {
        key: 'twinspires',
        title: 'TwinSpires',
        last_update: '2022-11-20T07:02:41Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'James Madison Dukes', price: 5.8 },
              { name: 'North Carolina Tar Heels', price: 1.14 },
            ],
          },
        ],
      },
      {
        key: 'unibet_us',
        title: 'Unibet',
        last_update: '2022-11-20T07:02:23Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'James Madison Dukes', price: 5.8 },
              { name: 'North Carolina Tar Heels', price: 1.14 },
            ],
          },
        ],
      },
      {
        key: 'barstool',
        title: 'Barstool Sportsbook',
        last_update: '2022-11-20T07:04:31Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'James Madison Dukes', price: 5.8 },
              { name: 'North Carolina Tar Heels', price: 1.14 },
            ],
          },
        ],
      },
      {
        key: 'sugarhouse',
        title: 'SugarHouse',
        last_update: '2022-11-20T07:02:23Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'James Madison Dukes', price: 5.8 },
              { name: 'North Carolina Tar Heels', price: 1.14 },
            ],
          },
        ],
      },
      {
        key: 'circasports',
        title: 'Circa Sports',
        last_update: '2022-11-20T07:02:13Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'James Madison Dukes', price: 6.28 },
              { name: 'North Carolina Tar Heels', price: 1.13 },
            ],
          },
        ],
      },
      {
        key: 'betfair',
        title: 'Betfair',
        last_update: '2022-11-20T07:04:18Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'James Madison Dukes', price: 5.7 },
              { name: 'North Carolina Tar Heels', price: 1.15 },
            ],
          },
          {
            key: 'h2h_lay',
            outcomes: [
              { name: 'James Madison Dukes', price: 7.6 },
              { name: 'North Carolina Tar Heels', price: 1.21 },
            ],
          },
        ],
      },
      {
        key: 'mybookieag',
        title: 'MyBookie.ag',
        last_update: '2022-11-20T07:05:21Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'James Madison Dukes', price: 5.76 },
              { name: 'North Carolina Tar Heels', price: 1.14 },
            ],
          },
        ],
      },
    ],
  },
  {
    id: '9622d644b6b7ded16635645fb23eac9d',
    sport_key: 'soccer_spain_segunda_division',
    sport_title: 'La Liga 2 - Spain',
    commence_time: '2022-11-20T18:00:00Z',
    home_team: 'SD Eibar',
    away_team: 'Alav\u00e9s',
    bookmakers: [
      {
        key: 'twinspires',
        title: 'TwinSpires',
        last_update: '2022-11-20T07:02:15Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Alav\u00e9s', price: 3.6 },
              { name: 'SD Eibar', price: 2.12 },
              { name: 'Draw', price: 2.95 },
            ],
          },
        ],
      },
      {
        key: 'barstool',
        title: 'Barstool Sportsbook',
        last_update: '2022-11-20T07:04:51Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Alav\u00e9s', price: 3.6 },
              { name: 'SD Eibar', price: 2.12 },
              { name: 'Draw', price: 2.95 },
            ],
          },
        ],
      },
      {
        key: 'foxbet',
        title: 'FOX Bet',
        last_update: '2022-11-20T07:00:55Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Alav\u00e9s', price: 3.3 },
              { name: 'SD Eibar', price: 2.2 },
              { name: 'Draw', price: 3.05 },
            ],
          },
        ],
      },
      {
        key: 'draftkings',
        title: 'DraftKings',
        last_update: '2022-11-20T07:01:55Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Alav\u00e9s', price: 3.4 },
              { name: 'SD Eibar', price: 2.35 },
              { name: 'Draw', price: 3.0 },
            ],
          },
        ],
      },
      {
        key: 'unibet_us',
        title: 'Unibet',
        last_update: '2022-11-20T07:01:40Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Alav\u00e9s', price: 3.6 },
              { name: 'SD Eibar', price: 2.12 },
              { name: 'Draw', price: 2.95 },
            ],
          },
        ],
      },
      {
        key: 'superbook',
        title: 'SuperBook',
        last_update: '2022-11-20T07:01:10Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Alav\u00e9s', price: 3.35 },
              { name: 'SD Eibar', price: 2.4 },
              { name: 'Draw', price: 3.0 },
            ],
          },
        ],
      },
      {
        key: 'fanduel',
        title: 'FanDuel',
        last_update: '2022-11-20T07:01:40Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Alav\u00e9s', price: 3.4 },
              { name: 'SD Eibar', price: 2.25 },
              { name: 'Draw', price: 2.8 },
            ],
          },
        ],
      },
      {
        key: 'betfair',
        title: 'Betfair',
        last_update: '2022-11-20T07:05:09Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Alav\u00e9s', price: 3.65 },
              { name: 'SD Eibar', price: 2.4 },
              { name: 'Draw', price: 3.05 },
            ],
          },
          {
            key: 'h2h_lay',
            outcomes: [
              { name: 'Alav\u00e9s', price: 3.9 },
              { name: 'SD Eibar', price: 2.48 },
              { name: 'Draw', price: 3.1 },
            ],
          },
        ],
      },
      {
        key: 'betonlineag',
        title: 'BetOnline.ag',
        last_update: '2022-11-20T07:04:38Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Alav\u00e9s', price: 3.1 },
              { name: 'SD Eibar', price: 2.34 },
              { name: 'Draw', price: 3.0 },
            ],
          },
        ],
      },
    ],
  },
];

const UPCOMING_BY_SPORT_TEST_DATA = [
  {
    id: '6cb8b70ef8969b46535e63a71e9500f5',
    sport_key: 'americanfootball_nfl',
    sport_title: 'NFL',
    commence_time: '2022-11-22T01:15:13Z',
    home_team: 'Arizona Cardinals',
    away_team: 'San Francisco 49ers',
    bookmakers: [
      {
        key: 'unibet',
        title: 'Unibet',
        last_update: '2022-11-22T01:58:18Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Arizona Cardinals', price: 6.0 },
              { name: 'San Francisco 49ers', price: 1.13 },
            ],
          },
        ],
      },
      {
        key: 'tab',
        title: 'TAB',
        last_update: '2022-11-22T01:57:42Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Arizona Cardinals', price: 4.5 },
              { name: 'San Francisco 49ers', price: 1.2 },
            ],
          },
        ],
      },
      {
        key: 'betfair',
        title: 'Betfair',
        last_update: '2022-11-22T01:57:58Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Arizona Cardinals', price: 5.1 },
              { name: 'San Francisco 49ers', price: 1.18 },
            ],
          },
          {
            key: 'h2h_lay',
            outcomes: [
              { name: 'Arizona Cardinals', price: 7.0 },
              { name: 'San Francisco 49ers', price: 1.24 },
            ],
          },
        ],
      },
      {
        key: 'pointsbetau',
        title: 'PointsBet (AU)',
        last_update: '2022-11-22T01:58:24Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Arizona Cardinals', price: 7.0 },
              { name: 'San Francisco 49ers', price: 1.11 },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'febaaec689e0d22db53cb8eec2177048',
    sport_key: 'americanfootball_nfl',
    sport_title: 'NFL',
    commence_time: '2022-11-24T17:30:00Z',
    home_team: 'Detroit Lions',
    away_team: 'Buffalo Bills',
    bookmakers: [
      {
        key: 'unibet',
        title: 'Unibet',
        last_update: '2022-11-22T01:58:18Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Buffalo Bills', price: 1.26 },
              { name: 'Detroit Lions', price: 4.25 },
            ],
          },
        ],
      },
      {
        key: 'sportsbet',
        title: 'SportsBet',
        last_update: '2022-11-22T01:58:04Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Buffalo Bills', price: 1.22 },
              { name: 'Detroit Lions', price: 4.3 },
            ],
          },
        ],
      },
      {
        key: 'tab',
        title: 'TAB',
        last_update: '2022-11-22T01:58:27Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Buffalo Bills', price: 1.23 },
              { name: 'Detroit Lions', price: 4.2 },
            ],
          },
        ],
      },
      {
        key: 'topsport',
        title: 'TopSport',
        last_update: '2022-11-22T01:57:58Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Buffalo Bills', price: 1.24 },
              { name: 'Detroit Lions', price: 4.1 },
            ],
          },
        ],
      },
      {
        key: 'pointsbetau',
        title: 'PointsBet (AU)',
        last_update: '2022-11-22T01:58:24Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Buffalo Bills', price: 1.24 },
              { name: 'Detroit Lions', price: 4.3 },
            ],
          },
        ],
      },
      {
        key: 'betfair',
        title: 'Betfair',
        last_update: '2022-11-22T01:57:58Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Buffalo Bills', price: 1.26 },
              { name: 'Detroit Lions', price: 4.4 },
            ],
          },
          {
            key: 'h2h_lay',
            outcomes: [
              { name: 'Buffalo Bills', price: 1.29 },
              { name: 'Detroit Lions', price: 4.9 },
            ],
          },
        ],
      },
      {
        key: 'ladbrokes',
        title: 'Ladbrokes',
        last_update: '2022-11-22T01:58:23Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Buffalo Bills', price: 1.24 },
              { name: 'Detroit Lions', price: 4.1 },
            ],
          },
        ],
      },
      {
        key: 'neds',
        title: 'Neds',
        last_update: '2022-11-22T01:58:24Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Buffalo Bills', price: 1.24 },
              { name: 'Detroit Lions', price: 4.1 },
            ],
          },
        ],
      },
    ],
  },
  {
    id: '7105b806f4de825d7ed04c2a88ea7dc1',
    sport_key: 'americanfootball_nfl',
    sport_title: 'NFL',
    commence_time: '2022-11-24T21:30:00Z',
    home_team: 'Dallas Cowboys',
    away_team: 'New York Giants',
    bookmakers: [
      {
        key: 'unibet',
        title: 'Unibet',
        last_update: '2022-11-22T01:58:18Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Dallas Cowboys', price: 1.26 },
              { name: 'New York Giants', price: 4.15 },
            ],
          },
        ],
      },
      {
        key: 'sportsbet',
        title: 'SportsBet',
        last_update: '2022-11-22T01:58:04Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Dallas Cowboys', price: 1.23 },
              { name: 'New York Giants', price: 4.2 },
            ],
          },
        ],
      },
      {
        key: 'topsport',
        title: 'TopSport',
        last_update: '2022-11-22T01:57:58Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Dallas Cowboys', price: 1.25 },
              { name: 'New York Giants', price: 4.1 },
            ],
          },
        ],
      },
      {
        key: 'pointsbetau',
        title: 'PointsBet (AU)',
        last_update: '2022-11-22T01:58:24Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Dallas Cowboys', price: 1.27 },
              { name: 'New York Giants', price: 4.0 },
            ],
          },
        ],
      },
      {
        key: 'tab',
        title: 'TAB',
        last_update: '2022-11-22T01:58:27Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Dallas Cowboys', price: 1.23 },
              { name: 'New York Giants', price: 4.2 },
            ],
          },
        ],
      },
      {
        key: 'betfair',
        title: 'Betfair',
        last_update: '2022-11-22T01:57:58Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Dallas Cowboys', price: 1.28 },
              { name: 'New York Giants', price: 4.4 },
            ],
          },
          {
            key: 'h2h_lay',
            outcomes: [
              { name: 'Dallas Cowboys', price: 1.29 },
              { name: 'New York Giants', price: 4.8 },
            ],
          },
        ],
      },
      {
        key: 'ladbrokes',
        title: 'Ladbrokes',
        last_update: '2022-11-22T01:58:23Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Dallas Cowboys', price: 1.25 },
              { name: 'New York Giants', price: 4.0 },
            ],
          },
        ],
      },
      {
        key: 'neds',
        title: 'Neds',
        last_update: '2022-11-22T01:58:24Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Dallas Cowboys', price: 1.25 },
              { name: 'New York Giants', price: 4.0 },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'bcc13922c6264eaf1f2a63ff1870a580',
    sport_key: 'americanfootball_nfl',
    sport_title: 'NFL',
    commence_time: '2022-11-25T01:20:00Z',
    home_team: 'Minnesota Vikings',
    away_team: 'New England Patriots',
    bookmakers: [
      {
        key: 'unibet',
        title: 'Unibet',
        last_update: '2022-11-22T01:58:18Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Minnesota Vikings', price: 1.71 },
              { name: 'New England Patriots', price: 2.25 },
            ],
          },
        ],
      },
      {
        key: 'sportsbet',
        title: 'SportsBet',
        last_update: '2022-11-22T01:58:04Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Minnesota Vikings', price: 1.68 },
              { name: 'New England Patriots', price: 2.19 },
            ],
          },
        ],
      },
      {
        key: 'topsport',
        title: 'TopSport',
        last_update: '2022-11-22T01:57:58Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Minnesota Vikings', price: 1.64 },
              { name: 'New England Patriots', price: 2.29 },
            ],
          },
        ],
      },
      {
        key: 'pointsbetau',
        title: 'PointsBet (AU)',
        last_update: '2022-11-22T01:58:24Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Minnesota Vikings', price: 1.63 },
              { name: 'New England Patriots', price: 2.35 },
            ],
          },
        ],
      },
      {
        key: 'tab',
        title: 'TAB',
        last_update: '2022-11-22T01:58:27Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Minnesota Vikings', price: 1.67 },
              { name: 'New England Patriots', price: 2.2 },
            ],
          },
        ],
      },
      {
        key: 'betfair',
        title: 'Betfair',
        last_update: '2022-11-22T01:57:58Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Minnesota Vikings', price: 1.73 },
              { name: 'New England Patriots', price: 2.28 },
            ],
          },
          {
            key: 'h2h_lay',
            outcomes: [
              { name: 'Minnesota Vikings', price: 1.78 },
              { name: 'New England Patriots', price: 2.38 },
            ],
          },
        ],
      },
      {
        key: 'ladbrokes',
        title: 'Ladbrokes',
        last_update: '2022-11-22T01:58:23Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Minnesota Vikings', price: 1.67 },
              { name: 'New England Patriots', price: 2.2 },
            ],
          },
        ],
      },
      {
        key: 'neds',
        title: 'Neds',
        last_update: '2022-11-22T01:58:24Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Minnesota Vikings', price: 1.67 },
              { name: 'New England Patriots', price: 2.2 },
            ],
          },
        ],
      },
    ],
  },
  {
    id: '6ed6b7033de80a6acae7123c23a71963',
    sport_key: 'americanfootball_nfl',
    sport_title: 'NFL',
    commence_time: '2022-11-27T18:00:00Z',
    home_team: 'Washington Commanders',
    away_team: 'Atlanta Falcons',
    bookmakers: [
      {
        key: 'unibet',
        title: 'Unibet',
        last_update: '2022-11-22T01:58:18Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Atlanta Falcons', price: 2.8 },
              { name: 'Washington Commanders', price: 1.44 },
            ],
          },
        ],
      },
      {
        key: 'tab',
        title: 'TAB',
        last_update: '2022-11-22T01:58:27Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Atlanta Falcons', price: 2.65 },
              { name: 'Washington Commanders', price: 1.48 },
            ],
          },
        ],
      },
      {
        key: 'pointsbetau',
        title: 'PointsBet (AU)',
        last_update: '2022-11-22T01:58:24Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Atlanta Falcons', price: 2.85 },
              { name: 'Washington Commanders', price: 1.44 },
            ],
          },
        ],
      },
      {
        key: 'sportsbet',
        title: 'SportsBet',
        last_update: '2022-11-22T01:58:04Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Atlanta Falcons', price: 2.78 },
              { name: 'Washington Commanders', price: 1.45 },
            ],
          },
        ],
      },
      {
        key: 'topsport',
        title: 'TopSport',
        last_update: '2022-11-22T01:57:58Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Atlanta Falcons', price: 2.8 },
              { name: 'Washington Commanders', price: 1.44 },
            ],
          },
        ],
      },
      {
        key: 'betfair',
        title: 'Betfair',
        last_update: '2022-11-22T01:57:58Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Atlanta Falcons', price: 2.86 },
              { name: 'Washington Commanders', price: 1.48 },
            ],
          },
          {
            key: 'h2h_lay',
            outcomes: [
              { name: 'Atlanta Falcons', price: 3.1 },
              { name: 'Washington Commanders', price: 1.54 },
            ],
          },
        ],
      },
      {
        key: 'ladbrokes',
        title: 'Ladbrokes',
        last_update: '2022-11-22T01:58:23Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Atlanta Falcons', price: 2.65 },
              { name: 'Washington Commanders', price: 1.48 },
            ],
          },
        ],
      },
      {
        key: 'neds',
        title: 'Neds',
        last_update: '2022-11-22T01:58:24Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Atlanta Falcons', price: 2.65 },
              { name: 'Washington Commanders', price: 1.48 },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'f3d4a9a81b6e2a4d6562e069ab0a2ff3',
    sport_key: 'americanfootball_nfl',
    sport_title: 'NFL',
    commence_time: '2022-11-27T18:00:00Z',
    home_team: 'Jacksonville Jaguars',
    away_team: 'Baltimore Ravens',
    bookmakers: [
      {
        key: 'unibet',
        title: 'Unibet',
        last_update: '2022-11-22T01:58:18Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Baltimore Ravens', price: 1.47 },
              { name: 'Jacksonville Jaguars', price: 2.75 },
            ],
          },
        ],
      },
      {
        key: 'pointsbetau',
        title: 'PointsBet (AU)',
        last_update: '2022-11-22T01:58:24Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Baltimore Ravens', price: 1.53 },
              { name: 'Jacksonville Jaguars', price: 2.6 },
            ],
          },
        ],
      },
      {
        key: 'sportsbet',
        title: 'SportsBet',
        last_update: '2022-11-22T01:58:04Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Baltimore Ravens', price: 1.47 },
              { name: 'Jacksonville Jaguars', price: 2.7 },
            ],
          },
        ],
      },
      {
        key: 'topsport',
        title: 'TopSport',
        last_update: '2022-11-22T01:57:58Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Baltimore Ravens', price: 1.48 },
              { name: 'Jacksonville Jaguars', price: 2.66 },
            ],
          },
        ],
      },
      {
        key: 'tab',
        title: 'TAB',
        last_update: '2022-11-22T01:58:27Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Baltimore Ravens', price: 1.47 },
              { name: 'Jacksonville Jaguars', price: 2.7 },
            ],
          },
        ],
      },
      {
        key: 'betfair',
        title: 'Betfair',
        last_update: '2022-11-22T01:57:58Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Baltimore Ravens', price: 1.51 },
              { name: 'Jacksonville Jaguars', price: 2.76 },
            ],
          },
          {
            key: 'h2h_lay',
            outcomes: [
              { name: 'Baltimore Ravens', price: 1.57 },
              { name: 'Jacksonville Jaguars', price: 2.96 },
            ],
          },
        ],
      },
      {
        key: 'ladbrokes',
        title: 'Ladbrokes',
        last_update: '2022-11-22T01:58:23Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Baltimore Ravens', price: 1.48 },
              { name: 'Jacksonville Jaguars', price: 2.65 },
            ],
          },
        ],
      },
      {
        key: 'neds',
        title: 'Neds',
        last_update: '2022-11-22T01:58:24Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Baltimore Ravens', price: 1.48 },
              { name: 'Jacksonville Jaguars', price: 2.65 },
            ],
          },
        ],
      },
    ],
  },
  {
    id: '9c1fde4f7f0376df696309ad98202102',
    sport_key: 'americanfootball_nfl',
    sport_title: 'NFL',
    commence_time: '2022-11-27T18:00:00Z',
    home_team: 'Carolina Panthers',
    away_team: 'Denver Broncos',
    bookmakers: [
      {
        key: 'unibet',
        title: 'Unibet',
        last_update: '2022-11-22T01:58:18Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Carolina Panthers', price: 2.16 },
              { name: 'Denver Broncos', price: 1.7 },
            ],
          },
        ],
      },
      {
        key: 'tab',
        title: 'TAB',
        last_update: '2022-11-22T01:58:27Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Carolina Panthers', price: 2.1 },
              { name: 'Denver Broncos', price: 1.74 },
            ],
          },
        ],
      },
      {
        key: 'sportsbet',
        title: 'SportsBet',
        last_update: '2022-11-22T01:58:04Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Carolina Panthers', price: 2.18 },
              { name: 'Denver Broncos', price: 1.69 },
            ],
          },
        ],
      },
      {
        key: 'topsport',
        title: 'TopSport',
        last_update: '2022-11-22T01:57:58Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Carolina Panthers', price: 2.19 },
              { name: 'Denver Broncos', price: 1.68 },
            ],
          },
        ],
      },
      {
        key: 'pointsbetau',
        title: 'PointsBet (AU)',
        last_update: '2022-11-22T01:58:24Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Carolina Panthers', price: 2.15 },
              { name: 'Denver Broncos', price: 1.74 },
            ],
          },
        ],
      },
      {
        key: 'betfair',
        title: 'Betfair',
        last_update: '2022-11-22T01:57:58Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Carolina Panthers', price: 2.24 },
              { name: 'Denver Broncos', price: 1.74 },
            ],
          },
          {
            key: 'h2h_lay',
            outcomes: [
              { name: 'Carolina Panthers', price: 2.34 },
              { name: 'Denver Broncos', price: 1.81 },
            ],
          },
        ],
      },
      {
        key: 'ladbrokes',
        title: 'Ladbrokes',
        last_update: '2022-11-22T01:58:23Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Carolina Panthers', price: 2.1 },
              { name: 'Denver Broncos', price: 1.73 },
            ],
          },
        ],
      },
      {
        key: 'neds',
        title: 'Neds',
        last_update: '2022-11-22T01:58:24Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Carolina Panthers', price: 2.1 },
              { name: 'Denver Broncos', price: 1.73 },
            ],
          },
        ],
      },
    ],
  },
  {
    id: '38bf123ec9df3af4efff83e45f472c61',
    sport_key: 'americanfootball_nfl',
    sport_title: 'NFL',
    commence_time: '2022-11-27T18:00:00Z',
    home_team: 'New York Jets',
    away_team: 'Chicago Bears',
    bookmakers: [
      {
        key: 'unibet',
        title: 'Unibet',
        last_update: '2022-11-22T01:58:18Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Chicago Bears', price: 2.75 },
              { name: 'New York Jets', price: 1.46 },
            ],
          },
        ],
      },
      {
        key: 'tab',
        title: 'TAB',
        last_update: '2022-11-22T01:58:27Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Chicago Bears', price: 2.75 },
              { name: 'New York Jets', price: 1.45 },
            ],
          },
        ],
      },
      {
        key: 'sportsbet',
        title: 'SportsBet',
        last_update: '2022-11-22T01:58:04Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Chicago Bears', price: 2.85 },
              { name: 'New York Jets', price: 1.43 },
            ],
          },
        ],
      },
      {
        key: 'pointsbetau',
        title: 'PointsBet (AU)',
        last_update: '2022-11-22T01:58:24Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Chicago Bears', price: 2.75 },
              { name: 'New York Jets', price: 1.48 },
            ],
          },
        ],
      },
      {
        key: 'betfair',
        title: 'Betfair',
        last_update: '2022-11-22T01:57:58Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Chicago Bears', price: 1.01 },
              { name: 'New York Jets', price: 1.46 },
            ],
          },
          {
            key: 'h2h_lay',
            outcomes: [
              { name: 'Chicago Bears', price: 3.2 },
              { name: 'New York Jets', price: 1.53 },
            ],
          },
        ],
      },
      {
        key: 'ladbrokes',
        title: 'Ladbrokes',
        last_update: '2022-11-22T01:58:23Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Chicago Bears', price: 2.7 },
              { name: 'New York Jets', price: 1.46 },
            ],
          },
        ],
      },
      {
        key: 'neds',
        title: 'Neds',
        last_update: '2022-11-22T01:58:24Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Chicago Bears', price: 2.7 },
              { name: 'New York Jets', price: 1.46 },
            ],
          },
        ],
      },
    ],
  },
  {
    id: '2444eaf8abc191114f858dc98d2d8d81',
    sport_key: 'americanfootball_nfl',
    sport_title: 'NFL',
    commence_time: '2022-11-27T18:00:00Z',
    home_team: 'Tennessee Titans',
    away_team: 'Cincinnati Bengals',
    bookmakers: [
      {
        key: 'unibet',
        title: 'Unibet',
        last_update: '2022-11-22T01:58:18Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Cincinnati Bengals', price: 1.86 },
              { name: 'Tennessee Titans', price: 1.97 },
            ],
          },
        ],
      },
      {
        key: 'tab',
        title: 'TAB',
        last_update: '2022-11-22T01:58:27Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Cincinnati Bengals', price: 1.8 },
              { name: 'Tennessee Titans', price: 2.0 },
            ],
          },
        ],
      },
      {
        key: 'sportsbet',
        title: 'SportsBet',
        last_update: '2022-11-22T01:58:04Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Cincinnati Bengals', price: 1.81 },
              { name: 'Tennessee Titans', price: 2.0 },
            ],
          },
        ],
      },
      {
        key: 'pointsbetau',
        title: 'PointsBet (AU)',
        last_update: '2022-11-22T01:58:24Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Cincinnati Bengals', price: 1.8 },
              { name: 'Tennessee Titans', price: 2.05 },
            ],
          },
        ],
      },
      {
        key: 'topsport',
        title: 'TopSport',
        last_update: '2022-11-22T01:57:58Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Cincinnati Bengals', price: 1.74 },
              { name: 'Tennessee Titans', price: 2.09 },
            ],
          },
        ],
      },
      {
        key: 'betfair',
        title: 'Betfair',
        last_update: '2022-11-22T01:57:58Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Cincinnati Bengals', price: 1.85 },
              { name: 'Tennessee Titans', price: 2.14 },
            ],
          },
          {
            key: 'h2h_lay',
            outcomes: [
              { name: 'Cincinnati Bengals', price: 1.88 },
              { name: 'Tennessee Titans', price: 2.3 },
            ],
          },
        ],
      },
      {
        key: 'ladbrokes',
        title: 'Ladbrokes',
        last_update: '2022-11-22T01:58:23Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Cincinnati Bengals', price: 1.83 },
              { name: 'Tennessee Titans', price: 1.98 },
            ],
          },
        ],
      },
      {
        key: 'neds',
        title: 'Neds',
        last_update: '2022-11-22T01:58:24Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Cincinnati Bengals', price: 1.83 },
              { name: 'Tennessee Titans', price: 1.98 },
            ],
          },
        ],
      },
    ],
  },
  {
    id: '2fb2ee796b6d7f240603c06a2a981b35',
    sport_key: 'americanfootball_nfl',
    sport_title: 'NFL',
    commence_time: '2022-11-27T18:00:00Z',
    home_team: 'Cleveland Browns',
    away_team: 'Tampa Bay Buccaneers',
    bookmakers: [
      {
        key: 'unibet',
        title: 'Unibet',
        last_update: '2022-11-22T01:58:18Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Cleveland Browns', price: 2.4 },
              { name: 'Tampa Bay Buccaneers', price: 1.6 },
            ],
          },
        ],
      },
      {
        key: 'pointsbetau',
        title: 'PointsBet (AU)',
        last_update: '2022-11-22T01:58:24Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Cleveland Browns', price: 2.3 },
              { name: 'Tampa Bay Buccaneers', price: 1.67 },
            ],
          },
        ],
      },
      {
        key: 'sportsbet',
        title: 'SportsBet',
        last_update: '2022-11-22T01:58:04Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Cleveland Browns', price: 2.27 },
              { name: 'Tampa Bay Buccaneers', price: 1.64 },
            ],
          },
        ],
      },
      {
        key: 'tab',
        title: 'TAB',
        last_update: '2022-11-22T01:58:27Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Cleveland Browns', price: 2.3 },
              { name: 'Tampa Bay Buccaneers', price: 1.62 },
            ],
          },
        ],
      },
      {
        key: 'topsport',
        title: 'TopSport',
        last_update: '2022-11-22T01:57:58Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Cleveland Browns', price: 2.28 },
              { name: 'Tampa Bay Buccaneers', price: 1.63 },
            ],
          },
        ],
      },
      {
        key: 'betfair',
        title: 'Betfair',
        last_update: '2022-11-22T01:57:58Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Cleveland Browns', price: 2.34 },
              { name: 'Tampa Bay Buccaneers', price: 1.68 },
            ],
          },
          {
            key: 'h2h_lay',
            outcomes: [
              { name: 'Cleveland Browns', price: 2.48 },
              { name: 'Tampa Bay Buccaneers', price: 1.75 },
            ],
          },
        ],
      },
      {
        key: 'ladbrokes',
        title: 'Ladbrokes',
        last_update: '2022-11-22T01:58:23Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Cleveland Browns', price: 2.3 },
              { name: 'Tampa Bay Buccaneers', price: 1.62 },
            ],
          },
        ],
      },
      {
        key: 'neds',
        title: 'Neds',
        last_update: '2022-11-22T01:58:24Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Cleveland Browns', price: 2.3 },
              { name: 'Tampa Bay Buccaneers', price: 1.62 },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'dbef6e83eefc8bbae8f75546dcd307c7',
    sport_key: 'americanfootball_nfl',
    sport_title: 'NFL',
    commence_time: '2022-11-27T18:00:00Z',
    home_team: 'Miami Dolphins',
    away_team: 'Houston Texans',
    bookmakers: [
      {
        key: 'unibet',
        title: 'Unibet',
        last_update: '2022-11-22T01:58:18Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Houston Texans', price: 5.5 },
              { name: 'Miami Dolphins', price: 1.16 },
            ],
          },
        ],
      },
      {
        key: 'pointsbetau',
        title: 'PointsBet (AU)',
        last_update: '2022-11-22T01:58:24Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Houston Texans', price: 5.25 },
              { name: 'Miami Dolphins', price: 1.17 },
            ],
          },
        ],
      },
      {
        key: 'sportsbet',
        title: 'SportsBet',
        last_update: '2022-11-22T01:58:04Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Houston Texans', price: 5.5 },
              { name: 'Miami Dolphins', price: 1.15 },
            ],
          },
        ],
      },
      {
        key: 'topsport',
        title: 'TopSport',
        last_update: '2022-11-22T01:57:58Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Houston Texans', price: 5.3 },
              { name: 'Miami Dolphins', price: 1.16 },
            ],
          },
        ],
      },
      {
        key: 'tab',
        title: 'TAB',
        last_update: '2022-11-22T01:58:27Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Houston Texans', price: 5.5 },
              { name: 'Miami Dolphins', price: 1.15 },
            ],
          },
        ],
      },
      {
        key: 'betfair',
        title: 'Betfair',
        last_update: '2022-11-22T01:57:58Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Houston Texans', price: 5.5 },
              { name: 'Miami Dolphins', price: 1.2 },
            ],
          },
          {
            key: 'h2h_lay',
            outcomes: [
              { name: 'Houston Texans', price: 7.0 },
              { name: 'Miami Dolphins', price: 1.22 },
            ],
          },
        ],
      },
      {
        key: 'ladbrokes',
        title: 'Ladbrokes',
        last_update: '2022-11-22T01:58:23Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Houston Texans', price: 5.2 },
              { name: 'Miami Dolphins', price: 1.16 },
            ],
          },
        ],
      },
      {
        key: 'neds',
        title: 'Neds',
        last_update: '2022-11-22T01:58:24Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Houston Texans', price: 5.2 },
              { name: 'Miami Dolphins', price: 1.16 },
            ],
          },
        ],
      },
    ],
  },
  {
    id: '5b09f0e3e19fda1bcc3ada157285ef2b',
    sport_key: 'americanfootball_nfl',
    sport_title: 'NFL',
    commence_time: '2022-11-27T21:05:00Z',
    home_team: 'Seattle Seahawks',
    away_team: 'Las Vegas Raiders',
    bookmakers: [
      {
        key: 'unibet',
        title: 'Unibet',
        last_update: '2022-11-22T01:58:18Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Las Vegas Raiders', price: 2.55 },
              { name: 'Seattle Seahawks', price: 1.52 },
            ],
          },
        ],
      },
      {
        key: 'tab',
        title: 'TAB',
        last_update: '2022-11-22T01:58:27Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Las Vegas Raiders', price: 2.6 },
              { name: 'Seattle Seahawks', price: 1.5 },
            ],
          },
        ],
      },
      {
        key: 'pointsbetau',
        title: 'PointsBet (AU)',
        last_update: '2022-11-22T01:58:24Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Las Vegas Raiders', price: 2.5 },
              { name: 'Seattle Seahawks', price: 1.56 },
            ],
          },
        ],
      },
      {
        key: 'sportsbet',
        title: 'SportsBet',
        last_update: '2022-11-22T01:58:04Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Las Vegas Raiders', price: 2.67 },
              { name: 'Seattle Seahawks', price: 1.48 },
            ],
          },
        ],
      },
      {
        key: 'topsport',
        title: 'TopSport',
        last_update: '2022-11-22T01:57:58Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Las Vegas Raiders', price: 2.56 },
              { name: 'Seattle Seahawks', price: 1.51 },
            ],
          },
        ],
      },
      {
        key: 'betfair',
        title: 'Betfair',
        last_update: '2022-11-22T01:57:58Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Las Vegas Raiders', price: 2.72 },
              { name: 'Seattle Seahawks', price: 1.55 },
            ],
          },
          {
            key: 'h2h_lay',
            outcomes: [
              { name: 'Las Vegas Raiders', price: 2.82 },
              { name: 'Seattle Seahawks', price: 1.59 },
            ],
          },
        ],
      },
      {
        key: 'ladbrokes',
        title: 'Ladbrokes',
        last_update: '2022-11-22T01:58:23Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Las Vegas Raiders', price: 2.55 },
              { name: 'Seattle Seahawks', price: 1.5 },
            ],
          },
        ],
      },
      {
        key: 'neds',
        title: 'Neds',
        last_update: '2022-11-22T01:58:24Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Las Vegas Raiders', price: 2.55 },
              { name: 'Seattle Seahawks', price: 1.5 },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'cde5ac558586f86472c25a36c4da943f',
    sport_key: 'americanfootball_nfl',
    sport_title: 'NFL',
    commence_time: '2022-11-27T21:25:00Z',
    home_team: 'Kansas City Chiefs',
    away_team: 'Los Angeles Rams',
    bookmakers: [
      {
        key: 'unibet',
        title: 'Unibet',
        last_update: '2022-11-22T01:58:18Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Kansas City Chiefs', price: 1.1 },
              { name: 'Los Angeles Rams', price: 7.0 },
            ],
          },
        ],
      },
      {
        key: 'sportsbet',
        title: 'SportsBet',
        last_update: '2022-11-22T01:58:04Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Kansas City Chiefs', price: 1.08 },
              { name: 'Los Angeles Rams', price: 8.0 },
            ],
          },
        ],
      },
      {
        key: 'betfair',
        title: 'Betfair',
        last_update: '2022-11-22T01:57:58Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Kansas City Chiefs', price: 1.11 },
              { name: 'Los Angeles Rams', price: 1.01 },
            ],
          },
          {
            key: 'h2h_lay',
            outcomes: [
              { name: 'Kansas City Chiefs', price: 1.15 },
              { name: 'Los Angeles Rams', price: 10.0 },
            ],
          },
        ],
      },
      {
        key: 'ladbrokes',
        title: 'Ladbrokes',
        last_update: '2022-11-22T01:58:23Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Kansas City Chiefs', price: 1.1 },
              { name: 'Los Angeles Rams', price: 7.25 },
            ],
          },
        ],
      },
      {
        key: 'neds',
        title: 'Neds',
        last_update: '2022-11-22T01:58:24Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Kansas City Chiefs', price: 1.1 },
              { name: 'Los Angeles Rams', price: 7.25 },
            ],
          },
        ],
      },
      {
        key: 'tab',
        title: 'TAB',
        last_update: '2022-11-22T01:58:27Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Kansas City Chiefs', price: 1.07 },
              { name: 'Los Angeles Rams', price: 8.5 },
            ],
          },
        ],
      },
      {
        key: 'pointsbetau',
        title: 'PointsBet (AU)',
        last_update: '2022-11-22T01:58:24Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Kansas City Chiefs', price: 1.1 },
              { name: 'Los Angeles Rams', price: 7.5 },
            ],
          },
        ],
      },
    ],
  },
  {
    id: '3b11e95bcebc77bc722ae73cef93d1de',
    sport_key: 'americanfootball_nfl',
    sport_title: 'NFL',
    commence_time: '2022-11-28T01:20:00Z',
    home_team: 'Philadelphia Eagles',
    away_team: 'Green Bay Packers',
    bookmakers: [
      {
        key: 'unibet',
        title: 'Unibet',
        last_update: '2022-11-22T01:58:18Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Green Bay Packers', price: 3.45 },
              { name: 'Philadelphia Eagles', price: 1.32 },
            ],
          },
        ],
      },
      {
        key: 'tab',
        title: 'TAB',
        last_update: '2022-11-22T01:58:27Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Green Bay Packers', price: 3.5 },
              { name: 'Philadelphia Eagles', price: 1.3 },
            ],
          },
        ],
      },
      {
        key: 'pointsbetau',
        title: 'PointsBet (AU)',
        last_update: '2022-11-22T01:58:24Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Green Bay Packers', price: 3.2 },
              { name: 'Philadelphia Eagles', price: 1.36 },
            ],
          },
        ],
      },
      {
        key: 'sportsbet',
        title: 'SportsBet',
        last_update: '2022-11-22T01:58:04Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Green Bay Packers', price: 3.4 },
              { name: 'Philadelphia Eagles', price: 1.32 },
            ],
          },
        ],
      },
      {
        key: 'topsport',
        title: 'TopSport',
        last_update: '2022-11-22T01:57:58Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Green Bay Packers', price: 3.5 },
              { name: 'Philadelphia Eagles', price: 1.31 },
            ],
          },
        ],
      },
      {
        key: 'betfair',
        title: 'Betfair',
        last_update: '2022-11-22T01:57:58Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Green Bay Packers', price: 3.55 },
              { name: 'Philadelphia Eagles', price: 1.35 },
            ],
          },
          {
            key: 'h2h_lay',
            outcomes: [
              { name: 'Green Bay Packers', price: 3.85 },
              { name: 'Philadelphia Eagles', price: 1.4 },
            ],
          },
        ],
      },
      {
        key: 'ladbrokes',
        title: 'Ladbrokes',
        last_update: '2022-11-22T01:58:23Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Green Bay Packers', price: 3.3 },
              { name: 'Philadelphia Eagles', price: 1.33 },
            ],
          },
        ],
      },
      {
        key: 'neds',
        title: 'Neds',
        last_update: '2022-11-22T01:58:24Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Green Bay Packers', price: 3.3 },
              { name: 'Philadelphia Eagles', price: 1.33 },
            ],
          },
        ],
      },
    ],
  },
  {
    id: '5a9f3d53ca881b4b20b28b4c16066adc',
    sport_key: 'americanfootball_nfl',
    sport_title: 'NFL',
    commence_time: '2022-11-29T01:15:00Z',
    home_team: 'Indianapolis Colts',
    away_team: 'Pittsburgh Steelers',
    bookmakers: [
      {
        key: 'unibet',
        title: 'Unibet',
        last_update: '2022-11-22T01:58:18Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Indianapolis Colts', price: 1.71 },
              { name: 'Pittsburgh Steelers', price: 2.16 },
            ],
          },
        ],
      },
      {
        key: 'tab',
        title: 'TAB',
        last_update: '2022-11-22T01:58:27Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Indianapolis Colts', price: 1.65 },
              { name: 'Pittsburgh Steelers', price: 2.25 },
            ],
          },
        ],
      },
      {
        key: 'sportsbet',
        title: 'SportsBet',
        last_update: '2022-11-22T01:58:04Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Indianapolis Colts', price: 1.67 },
              { name: 'Pittsburgh Steelers', price: 2.21 },
            ],
          },
        ],
      },
      {
        key: 'topsport',
        title: 'TopSport',
        last_update: '2022-11-22T01:57:58Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Indianapolis Colts', price: 1.63 },
              { name: 'Pittsburgh Steelers', price: 2.28 },
            ],
          },
        ],
      },
      {
        key: 'pointsbetau',
        title: 'PointsBet (AU)',
        last_update: '2022-11-22T01:58:24Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Indianapolis Colts', price: 1.67 },
              { name: 'Pittsburgh Steelers', price: 2.3 },
            ],
          },
        ],
      },
      {
        key: 'ladbrokes',
        title: 'Ladbrokes',
        last_update: '2022-11-22T01:58:23Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Indianapolis Colts', price: 1.65 },
              { name: 'Pittsburgh Steelers', price: 2.25 },
            ],
          },
        ],
      },
      {
        key: 'neds',
        title: 'Neds',
        last_update: '2022-11-22T01:58:24Z',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Indianapolis Colts', price: 1.65 },
              { name: 'Pittsburgh Steelers', price: 2.25 },
            ],
          },
        ],
      },
    ],
  },
];
export { SPORTS_TEST_DATA, UPCOMING_TEST_DATA, UPCOMING_BY_SPORT_TEST_DATA };
