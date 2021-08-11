import React from 'react'
import './App.css';
import {useEffect, useState} from 'react';
import NewsList from './NewsList'
import Search from './Search'


export default function HomePage() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/posts')
        .then(resp => resp.json())
        .then(data => setPosts(data))
        }, [])
        



     return (
        <div>
            <h1>hi</h1>
            <Search />
            <NewsList  posts={posts}/>
        </div>
    )
}
