import React, { useRef } from "react";

/**
 * A component that renders a full-screen background video.
 */
const BackgroundVideo: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoError = () => {
    if (videoRef.current) {
      videoRef.current.style.display = 'none';
    }
  };

  return (
    <video
      ref={videoRef}
      src="assets/videos/ink_in_water_09.mp4"
      autoPlay
      muted
      playsInline
      onError={handleVideoError}
      style={{
        display: "none",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        objectFit: "cover",
        zIndex: -2,
        pointerEvents: "none",
        filter: "brightness(0.9) contrast(1.1)",
      }}
    />
  );
};

export default BackgroundVideo;
