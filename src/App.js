import React, {useState} from 'react'
import data from './sampleData'
import './App.css'
import Queue from './components/Queue'
import Library from './components/Library'
import UpNext from './components/UpNext'



import { BrowserRouter, Switch, Route, Link } from  'react-router-dom'


function App() {
  const songs = data
  const [queue, setQueue] = useState([])

  return (
    <BrowserRouter>
    <div class="bg">
        <nav>
          <ul>
            <li>
              <Link to="/library">Library</Link>
            </li>
            <li>
            <Link to="/queue">Queue</Link>
            </li>
          </ul>
        </nav>
      <Switch>
        <Route path = "/queue">
          <Queue queue={queue} />
        </Route>
      </Switch>
      <Switch>
        <Route path = "/library">
          <Library songs={songs} setQueue = {setQueue} queue={queue}/>
        </Route>
      </Switch>
        
    </div>
      
    </BrowserRouter>
  );
}

export default App
