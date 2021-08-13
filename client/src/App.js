import './App.css';
import HomePage from './HomePage';
import {Switch, Route} from 'react-router-dom';
import { useState, useEffect } from 'react';
import NavBar from './NavBar';
import Login from './Login';
import Banner from './Banner';
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
      .then(data => setPosts(data))
      }, [])
  
     
    return (
      <div className="App">
        <NavBar user={user} setUser={setUser} /> 
        <Banner />
          <Switch>
            <Route exact path="/">
              <HomePage user={user} posts={posts}/>
              </Route>
              <Route exact path="/login">
                <Login onLogin={setUser}/>
                </Route>
              <Route path="/form">
                <PostForm user={user}/>
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
              {posts.map((post) => {
                return <ExploreDetail 
                key={post.id}
                comments={post.comments}
                posts={posts} />
              })}
              </Route>
            </Switch>
        </div>
    );
  }

  export default App;
