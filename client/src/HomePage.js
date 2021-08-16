import React from 'react'
import './App.css';
// import {useEffect, useState} from 'react';
import NewsList from './NewsList'
import Search from './Search'



export default function HomePage({posts, setPosts}) {

     
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
    
    return (
        <div>
            <Search />
           
            <NewsList handleDelete={handleDelete} posts={posts}/>
        </div>
    )
}
