// Club-wide details. Facts come from the approved Bay Area Kings sponsor flyer v4.1 (bay-area-kings repo).
export const club = {
  name: 'Bay Area Kings',
  tagline: 'A small group became a cricket community.',
  description:
    'Bay Area Kings is a community cricket team from San Jose and Fremont, California: our players, our tournament journey, and CalCup 2027.',
  location: 'San Jose & Fremont, CA',
  crictrack: 'https://cricket-scorer-76028449753.us-west1.run.app/',

  // Shows the "preview" strip on every page while content is still being reviewed.
  preview: true,

  zelle: 'bayareakings53@gmail.com',
  contact: {
    name: 'Jumana Ben Ghadiali',
    phone: '+1 408 802-9040',
    tel: '+14088029040',
    credit: 'Team owner and sponsor for the Chicago and Houston championship campaigns',
  },
  tiers: [
    { name: 'Title Sponsor', amount: '$5,000+' },
    { name: 'Gold Sponsor', amount: '$2,500' },
    { name: 'Silver Sponsor', amount: '$1,000' },
    { name: 'Bronze Sponsor', amount: '$500' },
    { name: 'Friend of Bay Area Kings', amount: '$100' },
  ],
};

// CalCup 2027 details. Event copy comes from the approved flyers (calcup repo, 2027/Final/Flyers).
export const calcup = {
  name: 'CalCup 2027',
  format: 'T10',
  tagline: 'The Bay is calling. Bring your game.',
  description:
    'CalCup 2027 is a T10 cricket tournament in the Bay Area, California, on March 20–21, 2027. Hosted by Bay Area Kings, presented by Phizenix.',
  dates: 'March 20–21, 2027',
  datesShort: 'Mar 20–21, 2027',
  location: 'Bay Area, CA',
  // First ball, Pacific time. Drives the countdowns.
  startsAt: '2027-03-20T08:00:00-07:00',
  venue: 'To be announced',
  presentedBy: 'Phizenix',

  registration: {
    deadline: 'November 14, 2026',
    zelle: 'bayareakings53@gmail.com',
    team: { fee: '$1,553', per: 'per team', line: 'The Bay is calling. Bring your game.' },
    player: { fee: '$53', per: 'per player', spots: 'First 39 players', line: 'Sign up solo. We’ll draft you into a squad.' },
  },
};

// Paths are relative to the site root; see lib/url.ts.
export const nav = [
  { href: '', label: 'Home' },
  { href: 'team/', label: 'Team' },
  { href: 'journey/', label: 'Journey' },
  { href: 'tournaments/', label: 'Tournaments' },
  { href: 'gallery/', label: 'Gallery' },
];

export const calcupBase = 'tournaments/calcup-2027/';

export const calcupNav = [
  { href: '', label: 'Overview' },
  { href: 'schedule/', label: 'Schedule' },
  { href: 'teams/', label: 'Teams' },
  { href: 'format/', label: 'Format & Rules' },
  { href: 'info/', label: 'Venue & FAQ' },
];
