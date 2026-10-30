// The Journey page timeline. Entries marked draft need dates and wording confirmed by the team.
// `tournament` links a step to its file in src/content/tournaments/.
export const journey: { when: string; title: string; body: string; tournament?: string; draft?: boolean }[] = [
  {
    when: '2025',
    title: 'A handful of players',
    body: 'It started with a few friends who wanted to play cricket together on weekends in the Bay Area.',
    draft: true,
  },
  {
    when: '2025',
    title: 'Weekly nets in San Jose and Fremont',
    body: 'Regular nets, fielding drills and practice matches gave newer players a way in, and turned a pickup game into a team.',
    draft: true,
  },
  {
    when: 'Sep 2025',
    title: 'Champions in Chicago',
    body: 'Our first tournament away from home. Bay Area Kings won Season 1 of the Saifee Cricket League.',
    tournament: 'chicago-2025',
  },
  {
    when: 'Apr 2026',
    title: 'Champions in Houston',
    body: 'Playing as Taheri Royals, our players won Season 3 of the Shujaee Premier League.',
    tournament: 'houston-2026',
  },
  {
    when: 'Sep 2026',
    title: 'Semi-finals in Chicago',
    body: 'Back in Chicago to defend the title, with Bay Area Knights alongside. We reached the semi-finals.',
    tournament: 'chicago-2026',
  },
  {
    when: 'Today',
    title: '25+ players and growing',
    body: 'From a handful to over 25 players on the roster, with more people asking to join every season.',
  },
  {
    when: 'Mar 2027',
    title: 'Hosting CalCup 2027',
    body: 'After travelling to play, we’re bringing a tournament home. Teams from across the US come to the Bay Area for CalCup.',
    tournament: 'calcup-2027',
  },
];
