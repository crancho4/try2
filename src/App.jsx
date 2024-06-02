import React, { useEffect, useRef, useState } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio('src/ilyaas.mp3'));

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  audioRef.current.loop = true;

  return (
    <div>
      <button onClick={togglePlay} style={{ color: isPlaying ? 'red' : 'white', width: isPlaying ? 1200 : '', height: isPlaying ? 500 : '', fontSize: isPlaying ? 100 : ''  }}>{isPlaying ? 'ILYAAAAAAAASSSSS' : 'ilyas'}</button>
    </div>
  );

}

export default App;
