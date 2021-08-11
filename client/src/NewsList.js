import React from 'react'
import NewsCard from './NewsCard'

export default function NewsList({posts}) {
    
    const postArray = posts.map((post) => {
        
        return <>
            <div className="col-4" style={{ marginBottom: '20px',  }}>
                <NewsCard
                key={post.id}
                {...post}
            />
            </div>
            <br />
        </>
    })
    
    return (
        <div>
            {postArray}
        </div>
    )
}
