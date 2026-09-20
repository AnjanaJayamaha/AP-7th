export interface LetterData {
  chapter: string;
  title: string;
  recipient: string;
  paragraphs: string[];
  signature: string;
}

export interface PhotoMemory {
  id: string;
  src: string;
  title: string;
  caption: string;
  date?: string;
  rotation: number;
  positionClass: string;
  washiColor: 'gold' | 'kraft' | 'burgundy';
  washiRotation: number;
  extendedNote?: string;
}

export interface JourneyCard {
  id: number;
  image?: string;
  src?: string;
  year?: string;
  tag?: string;
  title?: string;
  sinhalaTitle?: string;
  date?: string;
  hardestMemory?: string;
  howWeOvercame?: string;
  personalLoveNote?: string;
  stampText?: string;
}

export interface SongTrack {
  id: string;
  title: string;
  sinhalaTitle: string;
  artist: string;
  year?: string;
  sentiment: string;
  lyricsSinhala: string;
  lyricsEnglish: string;
  audioUrl?: string;
  melodyKey?: 'love_waltz' | 'nostalgia' | 'forever' | 'serenade';
}

export interface BoyfriendDutyItem {
  id: string;
  dutyNumber: string;
  title: string;
  caption: string;
  image: string;
  stickerText?: string;
  rotation: number;
  washiColor: 'gold' | 'kraft' | 'burgundy';
  insideJokeNote?: string;
}

export interface PasanSoloPhotoItem {
  id: string;
  title: string;
  caption: string;
  image: string;
  rotation: number;
  washiColor: 'gold' | 'kraft' | 'burgundy';
  tag: string;
  date?: string;
}

export type JournalPageView = 'cover' | 'letter' | 'cute_boy' | 'scrapbook' | 'journey' | 'envelope';