import React from 'react'

const Library = (props) => (
  <>
  {props.songs.map(song => (
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
      
      <button class="button" onClick={() => props.setQueue([...props.queue, song])}>Add</button>
		</div>
    
	))}
  </>
)

export default Library