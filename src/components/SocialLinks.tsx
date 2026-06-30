import React from 'react';
import '../styles/WorldView.css';

export interface SocialLinksProps {
  twitterUrl?: string;
  youtubeUrl?: string;
  niconicoUrl?: string;
}

function SocialLinks({ twitterUrl, youtubeUrl, niconicoUrl }: SocialLinksProps): JSX.Element {
  return (
    <div className="social-links">
      {twitterUrl && (
        <a href={twitterUrl} target="_blank" rel="noopener noreferrer" className="social-link twitter" title="Twitter/X">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </a>
      )}
      {youtubeUrl && (
        <a href={youtubeUrl} target="_blank" rel="noopener noreferrer" className="social-link youtube" title="YouTube">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
          </svg>
        </a>
      )}
      {niconicoUrl && (
        <a href={niconicoUrl} target="_blank" rel="noopener noreferrer" className="social-link niconico" title="ニコニコ動画">
          <svg viewBox="0 0 100 100" fill="currentColor">
            <path d="M86.5,27.5H62.3l9.2-11.5c0.8-1,0.6-2.4-0.4-3.1c-1-0.8-2.4-0.6-3.1,0.4L57.5,26.6c-1.6-0.3-3.2-0.4-5-0.4s-3.4,0.1-5,0.4L37,13.2c-0.8-1-2.2-1.2-3.1-0.4c-1,0.8-1.2,2.2-0.4,3.1l9.2,11.5H13.5C8.8,27.5,5,31.3,5,36v40c0,4.7,3.8,8.5,8.5,8.5h11.2l-2.8,7.1c-0.4,1,0.1,2.1,1.1,2.5c1,0.4,2.1-0.1,2.5-1.1l3.8-9.5h41.4l3.8,9.5c0.4,1,1.5,1.5,2.5,1.1c1-0.4,1.5-1.5,1.1-2.5l-2.8-7.1h11.2c4.7,0,8.5-3.8,8.5-8.5V36C95,31.3,91.2,27.5,86.5,27.5z" />
          </svg>
        </a>
      )}
    </div>
  );
}

export default SocialLinks;
