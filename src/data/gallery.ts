import type { ImageMetadata } from 'astro';
import chicago2025 from '../assets/kings/chicago-2025.webp';
import houston2026 from '../assets/kings/houston-2026.webp';
import chicago2026 from '../assets/kings/chicago-2026.webp';
import huddle from '../assets/kings/huddle.webp';
import chicagoNight from '../assets/kings/chicago-night.webp';

// Web use confirmed by Aziz Khilawala on October 5, 2026. Keep the Houston (Taheri Royals)
// and Chicago 2026 (Kings and Knights) context in the captions.
export const gallery: { image: ImageMetadata; title: string; caption: string; alt: string }[] = [
  {
    image: chicago2025,
    title: 'Chicago · September 2025',
    caption: 'Bay Area Kings championship group with trophies.',
    alt: 'Bay Area Kings players gathered with trophies in Chicago',
  },
  {
    image: houston2026,
    title: 'Houston · April 2026',
    caption: 'The Houston championship group, which competed under the Taheri Royals name.',
    alt: 'Houston championship group gathered with tournament awards',
  },
  {
    image: chicago2026,
    title: 'Chicago · September 2026',
    caption: 'Players from Bay Area Kings and Bay Area Knights together in Chicago.',
    alt: 'Bay Area Kings and Bay Area Knights players posing together in Chicago',
  },
  {
    image: huddle,
    title: 'Together at practice',
    caption: 'The team joins hands before cricket.',
    alt: 'Cricket players stacking their hands in a team huddle',
  },
  {
    image: chicagoNight,
    title: 'A Chicago cricket night',
    caption: 'Team celebration during a Chicago tournament.',
    alt: 'Bay Area Kings players celebrating at a night cricket event',
  },
];
