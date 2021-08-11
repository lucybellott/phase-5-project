import './App.css';
import HomePage from './HomePage';
import {Switch, Route} from 'react-router-dom';
import NavBar from './NavBar';
import Login from './Login';
import Banner from './Banner';

function App() {
  return (
    <div className="App">
      <NavBar  /> 
      <Banner />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          </Switch>
      </div>
  );
}

export default App;
