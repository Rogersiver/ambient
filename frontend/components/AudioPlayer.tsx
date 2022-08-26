// npm install wavesurfer.js 
import React, { useState, useEffect, useRef, createRef } from "react";
import styled from 'styled-components';

import {BiPlay, BiSkipNext, BiSkipPrevious, BiPause} from 'react-icons/bi'

const AudioContainer = styled.div`
    width: 80%;
    
`
const ActionContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    align-content: center;
    font-size: 10vh;
`

const AudioPlayer = (props: any,{children }: any) => {
  const [playing, setPlaying] = useState(false);
  const {url} = props
  const [audio] = useState(new Audio(url))
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  },
  [playing])

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);

  const handlePlayPause = () => {
    setPlaying(!playing);
  };


  return (
    <>

      <AudioContainer id="waveform"/>
      <div className="controls">
        <ActionContainer>
        <div onClick={handlePlayPause}>{!playing ? <BiPlay/> : <BiPause/>}</div>
        </ActionContainer>
      </div>
      </>
  );
}

export default AudioPlayer;

