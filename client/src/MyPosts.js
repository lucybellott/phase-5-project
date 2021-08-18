import React from 'react'
import MyPostsCard from './MyPostsCard'

export default function MyPosts({posts, user}) {
    console.log(user)
   
    if (!user.posts.length > 0) {
        return <h3> You have no posts </h3>
    }
    const myPosts = posts.filter((post) => {
        return post.user.username == user.username
        })

    
   const myProps = myPosts.map((myPost) => {
    
        return <div className="col">
            <MyPostsCard key ={myPost.id}
            {...myPost}
            post={myPost}
            currentUser={user}/>
           </div> 
    })
    
     return (
       
        <div>
        
            {myProps}
           
        </div> 
        
    )
}
