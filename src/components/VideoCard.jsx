
import React from 'react';
import './VideoCard.css';

export function VideoCard({ videoId }) {
  return (
    <div className="video-card">
      <div className="iframe-wrapper">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
