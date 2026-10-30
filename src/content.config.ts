import { defineCollection } from 'astro:content';
import { file, glob } from 'astro/loaders';
import { z } from 'astro/zod';

// One JSON file per team in src/content/teams/. The file name is the team's URL slug.
const teams = defineCollection({
  loader: glob({ pattern: '*.json', base: './src/content/teams' }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      code: z.string().length(3),
      group: z.enum(['A', 'B']),
      colours: z.object({ primary: z.string(), secondary: z.string() }),
      colourNames: z.string().optional(),
      crest: image().optional(),
      kit: image().optional(),
      placeholder: z.boolean().default(false),
      // Set on our own team: a site path to link to, e.g. "team/".
      clubPage: z.string().optional(),
      players: z.array(
        z.object({
          name: z.string(),
          role: z.enum(['Batter', 'Wicket-keeper', 'All-rounder', 'Bowler']),
          captain: z.boolean().default(false),
          viceCaptain: z.boolean().default(false),
        }),
      ),
    }),
});

// teamA/teamB are team slugs (e.g. "giants") or a label such as "A1" or "Winner SF1".
const matches = defineCollection({
  loader: file('src/content/matches.json'),
  schema: z.object({
    number: z.number(),
    day: z.union([z.literal(1), z.literal(2)]),
    date: z.string(),
    time: z.string(),
    ground: z.string(),
    stage: z.enum(['Group A', 'Group B', 'Semi-final', 'Final']),
    teamA: z.string(),
    teamB: z.string(),
  }),
});

// One JSON file per tournament in src/content/tournaments/. Past tournaments get a page at /tournaments/<file name>/.
const tournaments = defineCollection({
  loader: glob({ pattern: '*.json', base: './src/content/tournaments' }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      short: z.string(),
      league: z.string().optional(),
      location: z.string(),
      date: z.string(),
      // Year-month, used for ordering: "2025-09".
      when: z.string(),
      status: z.enum(['past', 'hosting', 'upcoming']),
      result: z.string().optional(),
      outcome: z.enum(['champions', 'runners-up', 'semifinal', 'participated']).optional(),
      playedAs: z.string().optional(),
      honours: z.array(z.object({ award: z.string(), player: z.string() })).default([]),
      summary: z.string(),
      // Paragraphs for the tournament page. Leave empty to show a "write-up coming" placeholder.
      story: z.array(z.string()).default([]),
      notes: z.array(z.string()).default([]),
      image: image().optional(),
      imageAlt: z.string().optional(),
      cutout: image().optional(),
      participation: z.enum(['confirmed', 'planned']).optional(),
      draft: z.boolean().default(false),
    }),
});

export const collections = { teams, matches, tournaments };
