import grannyImg from '@/assets/granny.png';
import joeyImg from '@/assets/joey.png';
import auroraImg from '@/assets/aurora.png';
import nanaImg from '@/assets/nana.png';

export interface Character {
  name: string;
  color: string;
  img: string;
  socials: {
    instagram?: { url: string; count: number };
    tiktok?: { url: string; count: number };
    facebook?: { url: string; count: number };
  };
  bio: string;
  tagline?: string;
}

export const ROSTER: Character[] = [
  {
    name: "Granny Spills",
    color: "#d94c78",
    img: grannyImg,
    socials: {
      instagram: { url: "https://www.instagram.com/grannyspills", count: 1300000 },
      tiktok: { url: "https://www.tiktok.com/@grannyspills", count: 600000 },
      facebook: { url: "https://www.facebook.com/profile.php?id=61578318568461", count: 700000 }
    },
    bio: "No-BS icon helping the girls navigate love, life, and everything in between.",
    tagline: "Piping tea & designer receipts since 1950."
  },
  {
    name: "Joey on the Street",
    color: "#09577a",
    img: joeyImg,
    socials: {
      instagram: { url: "https://www.instagram.com/joeyonthestreets/reels/", count: 316000 },
      tiktok: { url: "https://www.tiktok.com/@joeyonthestreets", count: 380000 },
      facebook: { url: "https://www.facebook.com/profile.php?id=61577765562238", count: 303000 }
    },
    bio: "NYC high-energy street interviewer. 7M+ likes, 45M views on his most-liked AI video."
  },
  {
    name: "Auntie Aurora",
    color: "#e35b00",
    img: auroraImg,
    socials: {
      instagram: { url: "https://www.instagram.com/auntieauroraa/", count: 88000 }
    },
    bio: "Self-made millionaire big sis. Money mindset & entrepreneurship.",
    tagline: "Finance isn't scary when your Auntie's got your back."
  },
  {
    name: "Nana Nessa",
    color: "#3d2964",
    img: nanaImg,
    socials: {
      instagram: { url: "https://www.instagram.com/nananessaa/", count: 85000 }
    },
    bio: "Career queen helping you boss up at work.",
    tagline: "Corporate doesn't mean boring — it means boss."
  }
];

export function calculateTotals() {
  let ig = 0, tt = 0, fb = 0;
  for (const character of ROSTER) {
    ig += character.socials.instagram?.count || 0;
    tt += character.socials.tiktok?.count || 0;
    fb += character.socials.facebook?.count || 0;
  }
  return { ig, tt, fb, total: ig + tt + fb };
}