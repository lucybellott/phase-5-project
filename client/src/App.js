import './App.css';
import HomePage from './HomePage';
import {Switch, Route} from 'react-router-dom';
import { useState, useEffect } from 'react';
import NavBar from './NavBar';
import Login from './Login';
import PostForm from './PostForm';
import Us from './Us';
import World from './World';
import MyPosts from './MyPosts';
import ExploreDetail from './ExploreDetail';

function App() {

  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([])

 
  useEffect(() => {
    fetch("./current_user")
    .then(resp => resp.json())
    .then(data => setUser(data)) 
  },[])

  
    useEffect(() => {
      fetch('http://localhost:3000/posts')
      .then(resp => resp.json())
      .then(data => {
     
        setPosts(data.reverse())
      })
      }, [])
      
      const addPost = (newPost) => {
        let postArray = [newPost,...posts]
          setPosts(postArray)
        }

      
     
    return (
      <div className="App">
      
        <NavBar user={user} setUser={setUser} /> 
          <Switch>
            <Route exact path="/">
              <HomePage user={user} posts={posts} setPosts={setPosts}/>
            </Route>
            <Route exact path="/login">
              <Login onLogin={setUser} />
            </Route> 
            <Route path="/form">
                <PostForm addPost={addPost} user={user}/>
            </Route>
            <Route path="/US">
                <Us posts={posts}/>
            </Route>
            <Route path="/world"> 
                <World posts={posts}/>
            </Route>
            <Route path="/myposts"> 
                <MyPosts posts={posts} user={user}/>
            </Route>
              
            <Route path='/posts/:id'>
              <ExploreDetail posts={posts} currentUser={user}/>
            </Route>
          </Switch>
        </div>
    );
  }

  export default App;
