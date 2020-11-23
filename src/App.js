import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Landing from './components/Landing'
import LandingAlt from './components/LandingAlt'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/alt'>
            <LandingAlt />
          </Route>
          <Route path='/'>
            <Landing />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
