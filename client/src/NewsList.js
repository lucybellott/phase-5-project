import React from 'react'
import NewsCard from './NewsCard'

export default function NewsList({posts, handleDelete, currentUser}) {
    
    const postArray = posts.map((post) => {
        
        return <>
            <div className="col">
                <NewsCard
                key={post.id}
                {...post}
                post={post}
                handleDelete={handleDelete}
                currentUser={currentUser}
            />
            </div>
           
        </>
    })
    
    return (
        <div className="container" >
            <div className="row row-cols-2">
                {postArray}
            </div>
        </div>
    )
}
