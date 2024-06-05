import NavBar from './FormProject/Navbar'
import Home from './FormProject/Home'
import './index.css'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Create from './FormProject/Create';
import About from './FormProject/About';
import ProjectDetails from './FormProject/ProjectDetails';
import NotFound from './FormProject/NotFound';
import Update from './FormProject/Update'
import Arr from './Functions/Arr';

function App() {
  return (
    <div>
     
  
    <Router>
    <div className="App">
        <NavBar />
        <div className='content'>
          <Switch>
            <Route exact path="/"> 
              <Home />
            </Route>
            <Route path="/Create"> 
              <Create />
            </Route>
            <Route path="/About"> 
              <About />
            </Route>
            <Route path="/blogs/:id"> 
              <ProjectDetails />
            </Route>
            <Route path="*"> 
              <NotFound />
            </Route>
          </Switch>
        </div>
    </div>
  </Router>
  </div>
  )
}

export default App;
