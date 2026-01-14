
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Row from './components/Row';
import './index.css';

function App() {
  const videos = [
    'hCXQJZJgScg', // Original
    'U9ZbuFJYtQM', // New 1
    'Vkb-24m5guo', // New 2
    'paB4ZQRcm2s', // New 3
    'hCXQJZJgScg', // Duplicate
  ];

  const featuredVideo = videos[0];

  return (
    <div className="app">
      <Navbar />
      <Hero featuredVideoId={featuredVideo} />
      <Row title="Trending Now" videos={videos} />
      <Row title="Top Picks for You" videos={videos.slice(0, 2)} />
      <Row title="New Releases" videos={['paB4ZQRcm2s']} />
    </div>
  );
}

export default App;
