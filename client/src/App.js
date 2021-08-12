import './App.css';
import HomePage from './HomePage';
import {Switch, Route} from 'react-router-dom';
import { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import NavBar from './NavBar';
import Login from './Login';
import Banner from './Banner';
import PostForm from './PostForm';
import Us from './Us';
import World from './World';
import MyPosts from './MyPosts';

function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("./current_user")
    .then(resp => resp.json())
    .then(data => setUser(data)) 
  },[])
  console.log(user)



  return (
    <div className="App">
      <NavBar user={user} /> 
      <Banner />
        <Switch>
          <Route exact path="/">
            <HomePage user={user}/>
            </Route>
            <Route exact path="/login">
              <Login onLogin={setUser}/>
              </Route>
            <Route path="/form">
              <PostForm user={user}/>
            </Route>
            <Route path="/US">
              <Us/>
            </Route>
            <Route path="/world"> 
              <World/>
            </Route>
            <Route path="/myposts"> 
              <MyPosts/>
            </Route>
            {/* <Route path="/posts/:id" component={handleReadMore} /> */}
          </Switch>
      </div>
  );
}

export default App;
