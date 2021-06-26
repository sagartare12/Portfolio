import React from 'react'
import './App.css';
import Navbar from './Header/Navbar'
import Home from './components/Home'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import Archive from './components/Archive'
import Icons from './components/Icons'
import {ContextProvider} from './Context'
import { Route , Switch , Router} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <ContextProvider>
      <Navbar />
    <Icons />
        <Switch>
          <Route exact path="/">
              <Home />
          </Route>
          <Route path="/projects" >
            <Projects />
          </Route>
          <Route path="/about" >
            <About />
          </Route>
           <Route path="/contact" >
            <Contact />
          </Route>
           <Route path="/archive" >
            <Archive />
          </Route>
          <Route>
            Page not found
          </Route>
        </Switch>
     </ContextProvider>
    </div>
  );
}

export default App;
