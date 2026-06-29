export interface Theme {
  primary: string;
  secondary: string;
  attention?: string;
  background?: string;
  text?: string;
  accent?: string;
}

export interface VoiceLibrary {
  id: string;
  name: string;
  version: string;
  description: string;
  downloadUrl: string;
  releaseDate: string;
  iconUrl?: string;
  imageUrl?: string;
  sampleYoutubeUrl?: string;
  sampleNiconicoUrl?: string;
  sampleTwitterUrl?: string;
  tags?: string[];
}

export interface Character {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  listImageUrl?: string;
  detailImageUrl?: string;
  voiceLibraries: VoiceLibrary[];
  // Profile fields (optional)
  JPname?: string;
  ENname?: string;
  iconUrl?: string; // Standardizing icon from user's 'icon'
  type?: string;
  age?: string;
  sex?: string;
  birthday?: string;
  height?: string;
  favorite?: string;
  first?: string;
  second?: string;
  color?: string; // Character-specific accent color
  customTextColor?: string;
  customBorderColor?: string;
  customButtonColor?: string;
  customButtonTextColor?: string;
}

export interface WorldView {
  title: string;
  description: string;
}

export interface PageData {
  pageName: string;
  theme: Theme;
  worldView: WorldView;
  characters: Character[];
  twitterUrl?: string;
  youtubeUrl?: string;
  niconicoUrl?: string;
}

export interface TopPageData {
  title: string;
  subtitle: string;
  description: string;
  pages: {
    id: string;
    name: string;
    path: string;
    closeImageUrl: string;
    openImageUrl: string;
    description: string;
  }[];
}

