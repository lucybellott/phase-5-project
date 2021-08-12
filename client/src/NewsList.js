import React from 'react'
import NewsCard from './NewsCard'

export default function NewsList({posts}) {
    
    const postArray = posts.map((post) => {
        
        return <>
            <div className="col">
                <NewsCard
                key={post.id}
                {...post}
                post={post}
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
