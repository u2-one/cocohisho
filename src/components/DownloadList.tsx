import React from 'react';
import { Character, Theme } from '../types';
import '../styles/DownloadList.css';

interface DownloadListProps {
  characters: Character[];
  theme: Theme;
}

function DownloadList({ characters, theme }: DownloadListProps): JSX.Element {
  const buttonStyle: React.CSSProperties = {
    '--theme-primary': theme.primary || '',
  } as React.CSSProperties;

  return (
    <div className="download-list">
      <div className="download-list-container">
        <h2 className="download-list-title">音声ライブラリ配布</h2>
        {characters.map((character) => (
          <div key={character.id} className="download-character-section">
            <h3 className="download-character-name">{character.name}</h3>
            <div className="download-libraries-grid">
              {character.voiceLibraries.map((library) => (
                <div key={library.id} className="download-library-card">
                  <div className="download-library-header">
                    <h4 className="download-library-name">{library.name}</h4>
                    <span className="download-library-version">v{library.version}</span>
                  </div>
                  <p className="download-library-description">{library.description}</p>
                  <div className="download-library-meta">
                    <span className="download-library-date">リリース日: {library.releaseDate}</span>
                  </div>
                  <a
                    href={library.downloadUrl}
                    className="download-library-button"
                    style={buttonStyle}
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                  >
                    ダウンロード
                  </a>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DownloadList;



