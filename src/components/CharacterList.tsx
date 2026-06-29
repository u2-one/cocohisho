import React from 'react';
import { Link } from 'react-router-dom';
import { Character } from '../types';
import '../styles/CharacterList.css';

interface CharacterListProps {
  characters: Character[];
  basePath: string;
}

// Helper to extract RGB values from hex or rgb string
const hexToRgb = (color: string): string => {
  if (color.startsWith('#')) {
    const r = parseInt(color.slice(1, 3), 16);
    const g = parseInt(color.slice(3, 5), 16);
    const b = parseInt(color.slice(5, 7), 16);
    return `${r}, ${g}, ${b}`;
  }
  const match = color.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
  if (match) {
    return `${match[1]}, ${match[2]}, ${match[3]}`;
  }
  return '0, 0, 0';
};

function CharacterList({ characters, basePath }: CharacterListProps): JSX.Element {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    target.style.display = 'none';
    const placeholder = target.nextSibling as HTMLElement;
    if (placeholder) {
      placeholder.style.display = 'flex';
    }
  };

  return (
    <div className="character-list">
      <div className="character-list-container">
        <div className="character-list-grid">
          {characters.map((character) => {
            const charStyle = {
              '--char-color': character.color || 'var(--theme-primary)',
              '--char-color-rgb': character.color ? hexToRgb(character.color) : 'var(--theme-primary-rgb)',
              '--char-text-color': character.customTextColor || character.color || 'var(--theme-primary)',
              '--char-border-color': character.customBorderColor || character.color || 'var(--theme-primary)',
              '--char-border-color-rgb': character.customBorderColor ? hexToRgb(character.customBorderColor) : (character.color ? hexToRgb(character.color) : 'var(--theme-primary-rgb)')
            } as React.CSSProperties;

            return (
              <Link
                key={character.id}
                to={`${basePath}/characters/${character.id}`}
                className="character-card"
                style={charStyle}
              >
                <div className="character-card-image">
                  <img
                    src={character.listImageUrl || character.imageUrl}
                    alt={character.name}
                    onError={handleImageError}
                  />
                  <div className="character-card-placeholder" style={{ display: 'none' }}>
                    {character.name}
                  </div>
                </div>
                <div className="character-card-info">
                  <h3 className="character-card-name">{character.name}</h3>
                  <p className="character-card-description">{character.description}</p>
                  <div className="character-card-libraries">
                    <span className="character-card-library-count">
                      {character.voiceLibraries.length}種類の音源
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CharacterList;



