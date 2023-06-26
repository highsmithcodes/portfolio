import React, { useState, useEffect } from 'react';

const CurrentSong = () => {
  const [trackName, setTrackName] = useState('');
  const [artists, setArtists] = useState('');

  useEffect(() => {
    const fetchCurrentSong = async () => {
      try {
        const response = await fetch('https://powerful-thicket-30866-4deb00c4126c.herokuapp.com/current-song');
        const data = await response.json();
        setTrackName(data.track_name);
        setArtists(data.artists);
      } catch (error) {
        setTrackName('Haha');
        setArtists('Dehd');
      }
    };

    fetchCurrentSong();
  }, []);

  return (
    <div className="music-player" style={{ marginLeft: '10px' }}>
      <p>{trackName} By: {artists}</p>
    </div>
  );
};

export default CurrentSong;
