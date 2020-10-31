import React from 'react'

const Library = (props) => (
  <>
  {props.songs.map(song => (
		<section>
      <div class="song">
        <div class="image">
          <img src={song.imageURL} class="libraryimage"></img>
        </div>
        <div class="songinfo">
          <span class="title">{song.title}</span>
          <span class="artist">{song.artist}</span>
        </div>
      </div>
      <span class="button">Add</span>
		</section>
    
	))}
  </>
)

export default Library