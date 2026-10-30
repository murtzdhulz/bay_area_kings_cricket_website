import { calcupBase } from '../data/site';

// Prefix a site path with the GitHub Pages base, e.g. url('team/') -> '/bay_area_kings_cricket_website/team/'.
export function url(path = ''): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${path.replace(/^\//, '')}`;
}

// A path inside the CalCup 2027 section, e.g. calcupUrl('schedule/') -> '.../tournaments/calcup-2027/schedule/'.
export function calcupUrl(path = ''): string {
  return url(calcupBase + path.replace(/^\//, ''));
}
