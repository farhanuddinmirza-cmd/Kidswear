/**
 * Prototype-only placeholder imagery. Generates a small on-brand SVG data URI
 * (soft gradient + themed motif) instead of pulling random third-party
 * photography — keeps every placeholder visually consistent with the design
 * system, contextually relevant to what it's illustrating, and avoids using
 * real strangers'/children's photos as fake product or lifestyle shots.
 */

const GRADIENT_PAIRS: [string, string][] = [
  ["#F3D9D6", "#FAF7F2"], // blush -> ivory
  ["#D7E4D3", "#FAF7F2"], // sage -> ivory
  ["#D6E6ED", "#FAF7F2"], // sky -> ivory
  ["#F6E8C8", "#FAF7F2"], // butter -> ivory
  ["#F3D9D6", "#F6E8C8"], // blush -> butter
  ["#D7E4D3", "#D6E6ED"], // sage -> sky
  ["#F1EBE1", "#F3D9D6"], // ivory-dark -> blush
];

// Line-art motifs drawn on a 0-100 grid, one or more path/shape elements each.
const MOTIFS: Record<string, string> = {
  shirt: `<path d="M32 20l14-6a8 8 0 0 0 8 0l14 6 8 8-8 8v34a4 4 0 0 1-4 4H36a4 4 0 0 1-4-4V36l-8-8z"/>`,
  dress: `<path d="M50 14l10 8-3 6 9 44a4 4 0 0 1-4 5H38a4 4 0 0 1-4-5l9-44-3-6z"/>`,
  onesie: `<path d="M40 16h20v10l12 8-6 10-6-4v10a6 6 0 0 1-6 6H46a6 6 0 0 1-6-6V40l-6 4-6-10 12-8z"/>`,
  gift: `<path d="M22 40h56v40a4 4 0 0 1-4 4H26a4 4 0 0 1-4-4zm-4-12h64v12H18zM50 28c-6-10-22-8-16 2 4 6 16 6 16-2zm0 0c6-10 22-8 16 2-4 6-16 6-16-2z"/>`,
  bow: `<path d="M50 50c-8-16-32-16-32-2 0 10 16 12 32 2zm0 0c8-16 32-16 32-2 0 10-16 12-32 2zm-5 0a5 5 0 1 0 10 0 5 5 0 1 0-10 0z"/>`,
  bottle: `<path d="M42 14h16v8h-4v6c6 4 10 10 10 18v30a6 6 0 0 1-6 6H42a6 6 0 0 1-6-6V46c0-8 4-14 10-18v-6h-4z"/><path d="M40 58h20"/>`,
  blocks: `<rect x="24" y="46" width="24" height="24" rx="3"/><rect x="52" y="34" width="24" height="24" rx="3"/><path d="M32 58h8M64 46h8"/>`,
  teddy: `<circle cx="50" cy="54" r="20"/><circle cx="32" cy="30" r="9"/><circle cx="68" cy="30" r="9"/><path d="M46 58q4 4 8 0"/>`,
  sneaker: `<path d="M18 66h60a6 6 0 0 0 6-6c0-6-6-8-12-10-8-3-14-8-18-16l-10 4v14l-18 6a8 8 0 0 0-8 8z"/>`,
  backpack: `<rect x="28" y="30" width="44" height="46" rx="10"/><path d="M38 30v-6a12 12 0 0 1 24 0v6"/><rect x="42" y="46" width="16" height="12" rx="2"/>`,
  balloon: `<circle cx="50" cy="36" r="20"/><path d="M50 56l-4 8 4-2 4 2z"/><path d="M50 64v22"/>`,
  cake: `<rect x="26" y="50" width="48" height="24" rx="4"/><path d="M26 50v-8h48v8"/><path d="M50 42v-12"/><path d="M46 26a4 4 0 1 1 8 0c0 4-4 5-4 9"/>`,
  sun: `<circle cx="50" cy="50" r="16"/><path d="M50 20v-8M50 90v-8M20 50h-8M90 50h-8M29 29l-6-6M77 77l-6-6M29 71l-6 6M77 23l-6 6"/>`,
  suitcase: `<rect x="22" y="36" width="56" height="38" rx="6"/><path d="M40 36v-8a6 6 0 0 1 6-6h8a6 6 0 0 1 6 6v8"/><path d="M22 54h56"/>`,
  moon: `<path d="M62 22a30 30 0 1 0 16 44 24 24 0 0 1-16-44z"/>`,
  star: `<path d="M50 18l8 22h24l-19 14 7 23-20-13-20 13 7-23-19-14h24z"/>`,
  kite: `<path d="M50 16l22 26-22 42-22-42z"/><path d="M28 42h44M50 16v68"/><path d="M50 84l-6 10M50 84l6 10"/>`,
  diya: `<path d="M20 62c0 10 14 16 30 16s30-6 30-16c0-6-8-8-14-8H34c-6 0-14 2-14 8z"/><path d="M50 54c-4-6-2-12 2-16 2 6 6 8 6 14a6 6 0 1 1-8 2z"/>`,
  scissors: `<circle cx="30" cy="30" r="8"/><circle cx="30" cy="70" r="8"/><path d="M36 36l40 34M36 64l40-34"/>`,
  socks: `<path d="M38 16h20v34l14 10a10 10 0 0 1 4 8v6a6 6 0 0 1-6 6H44a10 10 0 0 1-10-10V16z"/>`,
  hat: `<ellipse cx="50" cy="60" rx="34" ry="8"/><path d="M32 60c0-14 8-26 18-26s18 12 18 26"/>`,
  snowflake: `<path d="M50 14v72M14 50h72M26 26l48 48M74 26l-48 48"/>`,
};

// Which motifs feel appropriate for a given first-tag keyword.
const CONTEXT_MOTIFS: Record<string, string[]> = {
  baby: ["onesie", "bottle"],
  infant: ["onesie", "bottle"],
  newborn: ["onesie", "bottle"],
  toddler: ["blocks", "teddy"],
  girl: ["dress", "bow"],
  boy: ["shirt", "sneaker"],
  teen: ["sneaker", "backpack"],
  kids: ["teddy", "star"],
  child: ["teddy", "star"],
  children: ["teddy", "star"],
  fashion: ["dress", "shirt"],
  festival: ["diya", "gift"],
  traditional: ["diya", "gift"],
  pajamas: ["moon", "star"],
  sleepwear: ["moon", "star"],
  accessories: ["bow", "socks", "hat"],
  gift: ["gift", "bow"],
  birthday: ["balloon", "cake"],
  casual: ["shirt", "dress"],
  vacation: ["sun", "suitcase"],
  travel: ["sun", "suitcase"],
  winter: ["snowflake", "backpack"],
  playing: ["kite", "star"],
  studio: ["scissors", "dress"],
  design: ["scissors", "dress"],
  school: ["backpack", "sneaker"],
};

const DEFAULT_MOTIFS = ["shirt", "dress", "onesie", "gift", "bow", "star"];

function hashString(value: string): number {
  let hash = 0;
  for (let i = 0; i < value.length; i++) {
    hash = (hash << 5) - hash + value.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

// Deterministic PRNG so the same seed always scatters motifs identically.
function mulberry32(seed: number) {
  let a = seed;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function motifsFor(tags: string): string[] {
  const tagList = tags.split(",").map((t) => t.trim().toLowerCase());
  for (const tag of tagList) {
    if (CONTEXT_MOTIFS[tag]) return CONTEXT_MOTIFS[tag];
  }
  return DEFAULT_MOTIFS;
}

export function placeholderImage(width: number, height: number, tags: string, seed: string | number): string {
  const seedStr = typeof seed === "number" ? String(seed) : seed;
  const hash = hashString(`${tags}-${seedStr}`);
  const [from, to] = GRADIENT_PAIRS[hash % GRADIENT_PAIRS.length];
  const gradientId = `g${hash % 100000}`;
  const vbHeight = Math.round((height / width) * 100);
  const candidates = motifsFor(tags);
  const isBanner = width / height >= 1.3;

  let artwork: string;

  if (isBanner) {
    const rand = mulberry32(hash);
    const chosen = [candidates[hash % candidates.length], candidates[(hash + 1) % candidates.length]];
    const pieces: string[] = [];
    const count = 6;
    for (let i = 0; i < count; i++) {
      const motif = MOTIFS[chosen[i % chosen.length]];
      const x = 6 + rand() * 88;
      const y = 8 + rand() * (vbHeight - 16);
      const scale = (0.16 + rand() * 0.16) * (vbHeight / 100);
      const rotate = Math.round(rand() * 40 - 20);
      const opacity = (0.14 + rand() * 0.12).toFixed(2);
      pieces.push(
        `<g transform="translate(${x.toFixed(1)} ${y.toFixed(1)}) rotate(${rotate}) scale(${scale.toFixed(3)}) translate(-50 -50)" opacity="${opacity}">${motif}</g>`
      );
    }
    artwork = pieces.join("");
  } else {
    const mainMotif = MOTIFS[candidates[hash % candidates.length]];
    const accentMotif = MOTIFS[candidates[(hash + 1) % candidates.length]] ?? MOTIFS.star;
    const glyphSize = Math.min(46, vbHeight * 0.6);
    const glyphX = 50 - glyphSize / 2;
    const glyphY = vbHeight / 2 - glyphSize / 2;
    const accentScale = glyphSize * 0.011;
    const accentX = Math.min(84, 68 + (hash % 10));
    const accentY = Math.max(10, vbHeight * 0.16);

    artwork = `
    <g transform="translate(${glyphX} ${glyphY}) scale(${glyphSize / 100})">${mainMotif}</g>
    <g transform="translate(${accentX} ${accentY}) scale(${accentScale.toFixed(3)}) translate(-50 -50)" opacity="0.18">${accentMotif}</g>`;
  }

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 ${vbHeight}">
    <defs>
      <linearGradient id="${gradientId}" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${from}" />
        <stop offset="100%" stop-color="${to}" />
      </linearGradient>
    </defs>
    <rect width="100" height="${vbHeight}" fill="url(#${gradientId})" />
    <g fill="none" stroke="#2B2620" stroke-opacity="0.3" stroke-width="2.6" stroke-linejoin="round" stroke-linecap="round">
      ${artwork}
    </g>
  </svg>`;

  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

/**
 * Real, curated photography for homepage/marketing banners only (hero, promo
 * banners, category/age/occasion cards, brand story) — product cards and
 * galleries stay on the generated SVG placeholders above. Each ID is a
 * hand-picked, license-free Unsplash photo chosen to match its section; the
 * actual crop/aspect is handled by CSS object-cover at each call site.
 */
export function realPhoto(photoId: string, width = 1200): string {
  return `https://images.unsplash.com/photo-${photoId}?q=80&w=${width}&auto=format&fit=crop`;
}
