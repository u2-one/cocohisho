import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Character, Theme } from '../types';
import SampleVideoModal from './common/SampleVideoModal';
import { hasSampleVideo, resolveSampleVideo, SampleVideoEmbed } from '../utils/videoEmbed';
import '../styles/CharacterDetail.css';

interface CharacterDetailProps {
    characters: Character[];
    theme: Theme;
    basePath: string;
    themeId?: string;
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

const CharacterDetail: React.FC<CharacterDetailProps> = ({ characters, theme, basePath, themeId }) => {
    const { characterId } = useParams<{ characterId: string }>();
    const character = characters.find((c) => c.id === characterId);
    const [activeSampleVideo, setActiveSampleVideo] = useState<SampleVideoEmbed | null>(null);
    const [activeSampleTitle, setActiveSampleTitle] = useState('');

    if (!character) {
        return (
            <div className="character-detail-error">
                <p>キャラクターが見つかりませんでした。</p>
                <Link to={`${basePath}/characters`}>一覧に戻る</Link>
            </div>
        );
    }

    const detailStyle: React.CSSProperties = {
        '--theme-primary': theme.primary,
        '--char-color': character.color || theme.primary,
        '--char-color-rgb': character.color ? hexToRgb(character.color) : hexToRgb(theme.primary),
        '--char-text-color': character.customTextColor || character.color || theme.primary,
        '--char-border-color': character.customBorderColor || character.color || theme.primary,
        '--char-border-color-rgb': character.customBorderColor ? hexToRgb(character.customBorderColor) : (character.color ? hexToRgb(character.color) : hexToRgb(theme.primary)),
        '--char-btn-color': character.customButtonColor || character.color || theme.primary,
        '--char-btn-text-color': character.customButtonTextColor || '#ffffff'
    } as React.CSSProperties;

    const sampleButtonClassName = ['library-sample-video-button', themeId ? `library-sample-video-button--${themeId}` : ''].filter(Boolean).join(' ');
    const downloadButtonClassName = ['download-library-button', themeId ? `download-library-button--${themeId}` : ''].filter(Boolean).join(' ');

    return (
        <div className="character-detail" style={detailStyle}>
            <div className="character-detail-intro">
                <div className="character-detail-image">
                    <img src={character.detailImageUrl || character.imageUrl} alt={character.name} />
                </div>
                <div className="character-detail-info">
                    <h2 className="character-detail-name">{character.name}</h2>
                    {character.ENname && <p className="character-detail-en-name">{character.ENname}</p>}
                    <p className="character-detail-description">{character.description}</p>

                    <div className="character-profile-section">
                        <h3 className="character-profile-title">PROFILE</h3>
                        <div className="character-profile-grid">
                            {character.type && (
                                <div className="profile-item">
                                    <span className="profile-label">音声タイプ</span>
                                    <span className="profile-value">{character.type}</span>
                                </div>
                            )}
                            {character.age && (
                                <div className="profile-item">
                                    <span className="profile-label">年齢</span>
                                    <span className="profile-value">{character.age}</span>
                                </div>
                            )}
                            {character.sex && (
                                <div className="profile-item">
                                    <span className="profile-label">性別</span>
                                    <span className="profile-value">{character.sex}</span>
                                </div>
                            )}
                            {character.birthday && (
                                <div className="profile-item">
                                    <span className="profile-label">誕生日</span>
                                    <span className="profile-value">{character.birthday}</span>
                                </div>
                            )}
                            {character.height && (
                                <div className="profile-item">
                                    <span className="profile-label">身長</span>
                                    <span className="profile-value">{character.height}cm</span>
                                </div>
                            )}
                            {character.favorite && (
                                <div className="profile-item">
                                    <span className="profile-label">好きなもの</span>
                                    <span className="profile-value">{character.favorite}</span>
                                </div>
                            )}
                            {character.first && (
                                <div className="profile-item">
                                    <span className="profile-label">一人称</span>
                                    <span className="profile-value">{character.first}</span>
                                </div>
                            )}
                            {character.second && (
                                <div className="profile-item">
                                    <span className="profile-label">二人称</span>
                                    <span className="profile-value">{character.second}</span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div className="character-detail-downloads">
                <h3 className="download-section-title">配布音声ライブラリ</h3>
                <div className="download-libraries-grid">
                    {character.voiceLibraries.map((library) => (
                        <div key={library.id} className="download-library-card">
                            <div className="library-card-top">
                                <div className="library-icon">
                                    <img src={library.iconUrl || character.iconUrl} alt={library.name} />
                                </div>
                                <div className="library-info">
                                    <div className="download-library-header">
                                        <span className="download-library-name">{library.name}</span>
                                        <span className="download-library-version">v{library.version}</span>
                                    </div>
                                    <div className="download-library-tags">
                                        {library.tags?.map((tag, idx) => (
                                            <span key={idx} className="library-tag">{tag}</span>
                                        ))}
                                    </div>
                                    <p className="download-library-description">{library.description}</p>
                                    <div className="download-library-meta">
                                        リリース日: {library.releaseDate}
                                    </div>
                                </div>
                            </div>

                            {hasSampleVideo(library) && (
                                <button
                                    type="button"
                                    className={sampleButtonClassName}
                                    onClick={() => {
                                        const sampleVideo = resolveSampleVideo(library);
                                        if (!sampleVideo) {
                                            return;
                                        }

                                        if (sampleVideo.platform === 'twitter' && sampleVideo.externalUrl) {
                                            window.open(sampleVideo.externalUrl, '_blank', 'noopener,noreferrer');
                                            return;
                                        }

                                        setActiveSampleTitle(library.name);
                                        setActiveSampleVideo(sampleVideo);
                                    }}
                                >
                                    {resolveSampleVideo(library)?.platform === 'twitter'
                                        ? 'サンプル視聴（別タブが開きます）'
                                        : 'サンプル視聴（ポップアップが開きます）'}
                                </button>
                            )}

                            <a
                                href={library.downloadUrl}
                                className={downloadButtonClassName}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span className="download-link-label">配布ページへアクセス</span>
                                <svg className="external-link-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                    <path d="M14 3h7v7h-2V6.4l-9.3 9.3-1.4-1.4L17.6 5H14V3zm-2 2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7h-2v7H5V7h7V5z" />
                                </svg>
                            </a>
                        </div>
                    ))}
                </div>
            </div>

            <div className="character-detail-footer">
                <Link to={`${basePath}/characters`} className="back-link">
                    ← 音声ライブラリ一覧に戻る
                </Link>
            </div>

            {activeSampleVideo && activeSampleVideo.embedUrl && (
                <SampleVideoModal
                    embedUrl={activeSampleVideo.embedUrl}
                    platform={activeSampleVideo.platform}
                    title={activeSampleTitle}
                    onClose={() => {
                        setActiveSampleVideo(null);
                        setActiveSampleTitle('');
                    }}
                />
            )}
        </div>
    );
};

export default CharacterDetail;
