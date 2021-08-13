import React from 'react'
import MyPostsCard from './MyPostsCard'

export default function MyPosts({posts, user}) {
    const myPosts = posts.filter((post) => {
        return post.user.username == user.username
        })
    
   const myProps = myPosts.map((myPost) => {
    
        return <div className="col">
            <MyPostsCard key ={myPost.id}
            {...myPost}
            post={myPost}/>
           </div> 
    })
    
     return (
        <div>
            {myProps}
        </div>
    )
}
