import React from 'react';
import { VideoCard } from './VideoCard';
import './Row.css';

function Row({ title, videos }) {
    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row_posters">
                {videos.map((id, index) => (
                    <div key={index} className="row_poster_wrapper">
                        <VideoCard videoId={id} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Row;
