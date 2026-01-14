import React from 'react';
import './Hero.css';

function Hero({ featuredVideoId }) {
    return (
        <header
            className="hero"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url("https://img.youtube.com/vi/${featuredVideoId}/maxresdefault.jpg")`,
                backgroundPosition: "center center",
            }}
        >
            <div className="hero_contents">
                <h1 className="hero_title">Featured Video</h1>
                <div className="hero_buttons">
                    <button className="hero_button">Play</button>
                    <button className="hero_button">My List</button>
                </div>
                <h1 className="hero_description">
                    Watch this amazing highlighted content from our curated collection. diverse and interesting videos waiting for you to explore.
                </h1>
            </div>

            <div className="hero--fadeBottom" />
        </header>
    );
}

export default Hero;
