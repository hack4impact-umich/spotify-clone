import React from 'react'

const UpNext = (props) => (
    <>
    <div>
       <span>Up Next</span>

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
    </>
    
)


export default UpNext