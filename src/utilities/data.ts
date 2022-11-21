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

export { SPORTS_TEST_DATA, UPCOMING_TEST_DATA };
