import React, { useEffect } from 'react';
import { SampleVideoPlatform } from '../../utils/videoEmbed';
import '../../styles/SampleVideoModal.css';

interface SampleVideoModalProps {
  embedUrl: string;
  platform: SampleVideoPlatform;
  title: string;
  onClose: () => void;
}

const SampleVideoModal: React.FC<SampleVideoModalProps> = ({
  embedUrl,
  platform,
  title,
  onClose,
}) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const platformLabel = platform === 'youtube' ? 'YouTube' : 'ニコニコ動画';

  return (
    <div
      className="sample-video-modal-backdrop"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="sample-video-modal"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={`${title} - ${platformLabel}サンプル`}
      >
        <div className="sample-video-modal-header">
          <span className="sample-video-modal-platform">{platformLabel}</span>
          <button
            type="button"
            className="sample-video-modal-close"
            onClick={onClose}
            aria-label="閉じる"
          >
            ×
          </button>
        </div>
        <div className="sample-video-modal-player">
          <iframe
            src={embedUrl}
            title={`${title} - ${platformLabel}サンプル`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
};

export default SampleVideoModal;
