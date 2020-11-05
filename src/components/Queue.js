import React from 'react'

const Queue = (props) => (
  <>
  {props.queue.map(song => (
    <div>
    {song.title}
    </div>
  ))}
  
  </>
)

export default Queue