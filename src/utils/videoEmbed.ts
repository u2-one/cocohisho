import { VoiceLibrary } from '../types';

export type SampleVideoPlatform = 'youtube' | 'niconico' | 'twitter';

export interface SampleVideoEmbed {
  platform: SampleVideoPlatform;
  embedUrl?: string;
  externalUrl?: string;
}

export function getYoutubeEmbedUrl(url: string): string | null {
  try {
    const parsed = new URL(url);

    if (parsed.hostname.includes('youtu.be')) {
      const videoId = parsed.pathname.slice(1).split('/')[0];
      return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
    }

    if (parsed.hostname.includes('youtube.com')) {
      if (parsed.pathname.startsWith('/embed/')) {
        return url;
      }
      const videoId = parsed.searchParams.get('v');
      return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
    }
  } catch {
    return null;
  }

  return null;
}

export function getNiconicoEmbedUrl(url: string): string | null {
  try {
    const parsed = new URL(url);

    if (parsed.hostname.includes('nico.ms')) {
      const videoId = parsed.pathname.slice(1).split('/')[0];
      return /^(sm|so|nm)\d+$/.test(videoId)
        ? `https://embed.nicovideo.jp/watch/${videoId}`
        : null;
    }

    const match = parsed.pathname.match(/\/((?:sm|so|nm)\d+)/);
    return match ? `https://embed.nicovideo.jp/watch/${match[1]}` : null;
  } catch {
    return null;
  }

  return null;
}

export function hasSampleVideo(library: VoiceLibrary): boolean {
  return !!(
    (library.sampleYoutubeUrl && getYoutubeEmbedUrl(library.sampleYoutubeUrl)) ||
    (library.sampleNiconicoUrl && getNiconicoEmbedUrl(library.sampleNiconicoUrl)) ||
    (library.sampleTwitterUrl && library.sampleTwitterUrl.trim())
  );
}

export function resolveSampleVideo(library: VoiceLibrary): SampleVideoEmbed | null {
  if (library.sampleTwitterUrl && library.sampleTwitterUrl.trim()) {
    return { platform: 'twitter', externalUrl: library.sampleTwitterUrl.trim() };
  }

  if (library.sampleYoutubeUrl) {
    const embedUrl = getYoutubeEmbedUrl(library.sampleYoutubeUrl);
    if (embedUrl) {
      return { platform: 'youtube', embedUrl };
    }
  }

  if (library.sampleNiconicoUrl) {
    const embedUrl = getNiconicoEmbedUrl(library.sampleNiconicoUrl);
    if (embedUrl) {
      return { platform: 'niconico', embedUrl };
    }
  }

  return null;
}
