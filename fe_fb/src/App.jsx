
import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import Feed from './Component/Feed/Feed'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from './Component/Login/Login'

function App() {
  return(
    <>
      <BrowserRouter>
        <Switch>
          <Route path='/feed'>
            <Feed/>
          </Route>
          <Route path='/login'>
            <Login/>
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App
