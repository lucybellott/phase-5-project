import './App.css';
import HomePage from './HomePage';
import {Switch, Route} from 'react-router-dom';
import NavBar from './NavBar';
import Login from './Login';
import Banner from './Banner';
import PostForm from './PostForm';
import Us from './Us';
import World from './World';

function App() {
  return (
    <div className="App">
      <NavBar  /> 
      <Banner />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={Login} />
          <Route path="/form" component={PostForm} />
          <Route path="/US" component={Us} />
          <Route path="/world" component={World} />
          </Switch>
      </div>
  );
}

export default App;
