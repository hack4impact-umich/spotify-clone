import React, { useState, useEffect } from 'react';
import UpNext from './UpNext'

const Queue = (props) => (
    <>
    {props.queue.length > 0 && 
        <div style={{display: "inline"}}>
        <span className="Headers">Now Playing</span>
        <div className="song">
        <div className="image">
            <img src={props.queue[0].imageURL} className="libraryimage"></img>
        </div>
        <div className="songinfo">
            <span className="title">{props.queue[0].title}</span>
            <span className="artist">{props.queue[0].artist}</span>
        </div>
        </div>
        </div>
      }
      <UpNext queue={props.queue.slice(1)}/>
    </>
)

export default Queue