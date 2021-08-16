import React from 'react'
import './App.css';
// import {useEffect, useState} from 'react';
import NewsList from './NewsList'
import Search from './Search'



export default function HomePage({posts, handleDelete}) {

     
   
    
    return (
        <div>
            <Search />
           
            <NewsList handleDelete={handleDelete} posts={posts}/>
        </div>
    )
}
