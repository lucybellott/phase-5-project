import React from 'react'
import './App.css';
// import {useEffect, useState} from 'react';
import NewsList from './NewsList'
import Search from './Search'
import { useState } from 'react';
import Banner from './Banner'



export default function HomePage({posts, setPosts, user}) {

     
     const handleDelete = (id) => {
          fetch(`http://localhost:3000/posts/${id}`, {
            method: "DELETE",
          })
            .then((r) => r.json())
            .then(() => {
              const updatedPosts = posts.filter((post) => {
                return post.id !== (id)})
                setPosts(updatedPosts);
            });
        
     }

     const[searchValue, setSearchValue] = useState("")
    
     const handleSearch = (e) => setSearchValue(e.target.value)
 
     const filteredPosts = posts.filter((post) =>{
      
         return (post.title.toLowerCase().includes(searchValue.toLowerCase()))
     })
     
    
    return (
        <div>
           <Banner />
            <Search posts={posts} handleSearch={handleSearch}/>
           
            <NewsList handleDelete={handleDelete} posts={filteredPosts} currentUser={user}/>
        </div>
    )
}
