import { getCollection, type CollectionEntry } from 'astro:content';
import { calcupUrl, url } from './url';

export type Tournament = CollectionEntry<'tournaments'>;

// Oldest first, so the list reads as a journey.
export async function getTournaments(): Promise<Tournament[]> {
  const all = await getCollection('tournaments');
  return all.sort((a, b) => a.data.when.localeCompare(b.data.when));
}

// CalCup has its own section; past tournaments have a page; upcoming ones have no page yet.
export function tournamentHref(t: Tournament): string | undefined {
  if (t.data.status === 'hosting') return calcupUrl();
  if (t.data.status === 'past') return url(`tournaments/${t.id}/`);
  return undefined;
}

export const outcomeLabel: Record<string, string> = {
  champions: 'Champions',
  'runners-up': 'Runners-up',
  semifinal: 'Semi-finalists',
  participated: 'Participated',
};
