import React from 'react'

const Queue = (props) => (
  <>
  <div>
  <div>
      <span class="Headers">Now Playing</span>
		<div style={{display: "inline"}}>
      
    {props.queue.map(song => (
		<div style={{display: "inline"}}>
      
      <div class="song">
        <div class="image">
          <img src={song.imageURL} class="libraryimage"></img>
        </div>
        <div class="songinfo">
          <span class="title">{song.title}</span>
          <span class="artist">{song.artist}</span>
        </div>
      </div>
		</div>
    
  ))}
		</div>
    
    </div>
  
  </div>
  
  </>
)

export default Queue