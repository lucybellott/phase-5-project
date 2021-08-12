import React from 'react'
import './App.css';
// import {useEffect, useState} from 'react';
import NewsList from './NewsList'
import Search from './Search'


export default function HomePage({posts}) {

     return (
        <div>
            <Search />
            <NewsList  posts={posts}/>
        </div>
    )
}
