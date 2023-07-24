import { useRef, useState, useCallback } from 'react';
import video from '../video.mp4';
import Control from './Control';

function Player() {
  const videoRef = useRef(null);

  const play = () => {
    videoRef.current.play();
  }

  const pause = () => {
    videoRef.current.pause();
  }

  return (
    <div className="Player__container">
      <video className="Player" id="video" preload="metadata" ref={videoRef}>
        <source src={video} type="video/mp4"/>
      </video>
      <Control playCallback={play} pauseCallback={pause} currentTime={99 || videoRef.current.currentTime}/>
    </div>
  );
}

export default Player;
