import React from 'react'
import MyPostsCard from './MyPostsCard'

export default function MyPosts({posts, user}) {
    
    // if (user.posts && user.posts.length < 0) {
    //     console.log(user.posts)
    //     return <h3> You have no posts </h3>
    // }
    
    const myPosts = posts.filter((post) => {
        return post.user.username === user.username
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
       
        <div className="container">
            <h1 style={{marginTop:"20px"}}>My Posts</h1>
            <div className="row row-cols-2">
                {myProps}
            </div>
        </div> 
        
    )
}
