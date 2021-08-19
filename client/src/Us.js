import React from 'react'
import UsCard from './UsCard'

export default function Us({posts}) {
    
    const usPosts = posts.filter((post) => {
        return post.category === "U.S."
        })
    
   const usProps = usPosts.map((usPost) => {
    
        return <div className="col">
            <UsCard key ={usPost.id}
            {...usPost}
            post={usPost}/>
           </div> 
    })
   
    
    return (
        <div className="container" >
        <div className="row row-cols-2">
            {usProps}
        </div>
    </div>
    )
}
