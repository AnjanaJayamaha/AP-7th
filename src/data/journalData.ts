import { LetterData, PhotoMemory, JourneyCard, SongTrack } from '../types';

/**
 * Anjana & Pasan's 7th Anniversary Journal Data
 * All letter contents, scrapbook photos, journey cards, and songs
 * are organized here so they can be easily edited or replaced.
 */

export const coverData = {
  coupleTitle: "ANJANA ♥ PASAN",
  subtitle: "A Seven-Year Journey of Love, Strength & Everything In Between",
  anniversaryYear: "2019 — 2026",
  coverImage: "/images/memories/cover.jpg",
  buttonPrompt: "Open our story →",
  waxSealText: "A&P",
};

export const letterData: LetterData = {
  chapter: "FOR YOU ♡ ",
  title: "It all started with...",
  recipient: "Dear Golubelis,",
  paragraphs: [
    "I still remember the beginning of our story...",
    "Somehow, that little beginning became seven beautiful years of memories, laughter, little moments, and everything that makes us, us.",
    "And if I could go back to that very first moment, I would choose it all over again."
  ],
  signature: "— Kehlan ♡"
};

export const photoMemories: PhotoMemory[] = [
  {
    id: "memory-1",
    src: "/images/3.jpeg",
    title: "Water world - Kandy",
    caption: "Super hyped date , I think it was your first time at a water world right?",
    date: "April 19",
    rotation: -3.5,
    positionClass: "top-left",
    washiColor: "gold",
    washiRotation: -12,
  },
  {
    id: "memory-2",
    src: "/images/7.jpeg",
    title: "Madirigiriya -Watadage",
    caption: "Pretty little us , walking around the ancient ruins...",
    date: "I think the its 2022",
    rotation: 2.8,
    positionClass: "top-right",
    washiColor: "kraft",
    washiRotation: 8,
  },
  {
    id: "memory-3",
    src: "/images/40.jpeg",
    title: "Galle Face ",
    caption: "That day was a special food feast !.I think you know.",
    date: "09th April 2025",
    rotation: -0.5,
    positionClass: "center-large",
    washiColor: "burgundy",
    washiRotation: -3,
  },
  {
    id: "memory-4",
    src: "/images/25.jpeg",
    title: "Kandy fashion-Dehiwala",
    caption: "Midnight sparklers, silly jokes & the joy that only you bring",
    date: "December 2025",
    rotation: -4.2,
    positionClass: "bottom-left",
    washiColor: "kraft",
    washiRotation: -9,
  },
  {
    id: "memory-5",
    src: "/images/37.jpeg",
    title: "My love",
    caption: "Seven years stronger, deeper, and eternally grateful for you",
    date: "Always",
    rotation: 3.6,
    positionClass: "bottom-right",
    washiColor: "gold",
    washiRotation: 14,
  }
];


export const journeyCards: JourneyCard[] = [
  {
    id: 1,
    image: "/images/20.jpeg",
    title: "The Golden Beginning",
    sinhalaTitle: "අපේ සොඳුරු ඇරඹුම",
    year: "2019",
    tag: "First Sparks",
    personalLoveNote: "The moment everything changed and my world found its favorite home in you."
  },
  {
    id: 2,
    image: "/images/7.jpeg",
    title: "Quiet Coffee Dates",
    sinhalaTitle: "නිහඬ සන්ධ්‍යාවක",
    year: "2020",
    tag: "Everyday Magic",
    personalLoveNote: "Sitting across from you, talking about everything and nothing at all."
  },
  {
    id: 3,
    image: "/images/40.jpeg",
    title: "Under Golden Skies",
    sinhalaTitle: "රන්වන් අහස යට",
    year: "2021",
    tag: "Sunset Horizon",
    personalLoveNote: "Holding your hand as the sun went down, wishing time would freeze right there."
  },
  {
    id: 4,
    image: "/images/25.jpeg",
    title: "Your Unmatched Smile",
    sinhalaTitle: "නුඹේ හිනාව",
    year: "2022",
    tag: "Pure Joy",
    personalLoveNote: "The smile that lights up even my heaviest days and gives me calm."
  },
  {
    id: 5,
    image: "/images/37.jpeg",
    title: "Through Rain & Storms",
    sinhalaTitle: "නොසැලෙන සෙනෙහස",
    year: "2023",
    tag: "Unbreakable",
    personalLoveNote: "Even on the hardest days, standing together made us twice as strong."
  },
  {
    id: 6,
    image: "/images/3.jpeg",
    title: "Seven Years of Us",
    sinhalaTitle: "වසර 7ක නොමියෙන ආදරය",
    year: "2026",
    tag: "Forever Yours",
    personalLoveNote: "Seven years, thousands of laughs, and a lifetime more to go."
  },
  {
    id: 7,
    image: "/images/1.jpeg",
    title: "My Handsome Boy",
    sinhalaTitle: "මගේ ආදරණීයයා",
    year: "Special",
    tag: "Cuteness",
    personalLoveNote: "The boy who stole my heart and still makes butterflies dance inside me."
  },
  {
    id: 8,
    image: "/images/2.jpeg",
    title: "Unconditional Strength",
    sinhalaTitle: "මගේ ශක්තිය",
    year: "Guardian",
    tag: "Protector",
    personalLoveNote: "Standing by me through thick and thin with gentle, reassuring eyes."
  },
  {
    id: 9,
    image: "/images/4.jpeg",
    title: "Gentle Moments",
    sinhalaTitle: "සොඳුරු මොහොතක්",
    year: "Warmth",
    tag: "Sweetness",
    personalLoveNote: "Just listening to your laughter is my favorite song in the entire universe."
  },
  {
    id: 10,
    image: "/images/5.jpeg",
    title: "Pride in Uniform",
    sinhalaTitle: "ගෞරවනීය සිනහව",
    year: "Hero",
    tag: "Inspiration",
    personalLoveNote: "So endlessly proud of the dedicated, honorable man you are every day."
  },
  {
    id: 11,
    image: "/images/6.jpeg",
    title: "Duty & Devotion",
    sinhalaTitle: "වගකීම සහ සෙනෙහස",
    year: "Dedication",
    tag: "Courage",
    personalLoveNote: "Bravery on duty, the gentlest warmth in your heart when you come home."
  },
  {
    id: 12,
    image: "/images/8.jpeg",
    title: "The Silent Anchor",
    sinhalaTitle: "සන්සුන් නවාතැන",
    year: "Pillar",
    tag: "Strength",
    personalLoveNote: "Whatever happens in this chaotic world, you remain my peaceful anchor."
  },
  {
    id: 13,
    image: "/images/9.jpeg",
    title: "Road Trips & Wind",
    sinhalaTitle: "දිගු ගමන් මඟක",
    year: "Adventures",
    tag: "Wanderlust",
    personalLoveNote: "Singing along with old Sinhala classics with you beside me."
  },
  {
    id: 14,
    image: "/images/10.jpeg",
    title: "Late Night Talks",
    sinhalaTitle: "රෑ මැදියමේ කතාබහ",
    year: "Memories",
    tag: "Heartstrings",
    personalLoveNote: "Whispering our future dreams when the rest of the world is sound asleep."
  },
  {
    id: 15,
    image: "/images/11.jpeg",
    title: "Laughter in Chaos",
    sinhalaTitle: "සිනාසෙන නෙත්",
    year: "Joy",
    tag: "Playful",
    personalLoveNote: "Making each other giggle until our stomachs hurt over the silliest things."
  },
  {
    id: 16,
    image: "/images/12.jpeg",
    title: "The Steady Promise",
    sinhalaTitle: "නොබිඳෙන පොරොන්දුව",
    year: "Promise",
    tag: "Everlasting",
    personalLoveNote: "A promise carved in love: I will choose you today, tomorrow, and forever."
  },
  {
    id: 17,
    image: "/images/13.jpeg",
    title: "Sweet Celebrations",
    sinhalaTitle: "සතුටු සැමරුම්",
    year: "Anniversary",
    tag: "Milestone",
    personalLoveNote: "Each anniversary reminds me that loving you is the easiest choice I ever made."
  },
  {
    id: 18,
    image: "/images/14.jpeg",
    title: "Warm Hugs & Comfort",
    sinhalaTitle: "උණුසුම් වැළඳගැනීම",
    year: "Sanctuary",
    tag: "Home",
    personalLoveNote: "In your arms is the only place on earth where all worries simply fade away."
  },
  {
    id: 19,
    image: "/images/15.jpeg",
    title: "Shared Coffee & Dreams",
    sinhalaTitle: "සිහින බෙදාගත් දින",
    year: "Peace",
    tag: "Daily Life",
    personalLoveNote: "Two cups of warm coffee and all our hopes shared across a small table."
  },
  {
    id: 20,
    image: "/images/16.jpeg",
    title: "Endless Horizons",
    sinhalaTitle: "අපේ අනාගතය",
    year: "Future",
    tag: "Always",
    personalLoveNote: "Looking forward to every sunrise and sunset we have yet to witness together."
  }
];

export const sinhalaPlaylist: SongTrack[] = [
  {
    id: "yali-hamuwenne-kedinada-api",
    title: "Yali Hamuwenne Kedinada Api",
    sinhalaTitle: "යළි හමුවෙන්නේ කෙදිනද අපි",
    artist: "Piyath Rajapakse",
    year: "Our Love Theme",
    sentiment: "Cherished Eternal Love",
    audioUrl: "/audio/yali_hamuwenne_kedinada_api.mp3",
    lyricsSinhala: "යළි හමුවෙන්නේ කෙදිනද අපි... මගේ හුස්ම පවා නුඹ ළඟ තැබූ දිනේ...",
    lyricsEnglish: "When will we meet again, my love... The day I left my very breath in your gentle embrace.",
    melodyKey: "forever"
  }
];
