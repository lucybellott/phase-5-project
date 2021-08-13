import React from 'react'
import {Link} from 'react-router-dom'

export default function MyPostsCard({id, title, category, image, claim, comments, user, post}) {
    
//    console.log(user.posts)

    return (
        <div>
            {/* { user.posts.length > 3 ? */}
            <div>
            <h3>{title}</h3>
            <img style={{width: "400px"}} src={image}/>
            <h5>Claim:</h5>
            <p>{claim.substring(0, 250)}...</p>
            <Link to={`/posts/${post.id}`}>Read more</Link>
            
            <br/>
            <p style={{marginTop: "15px"}}>Posted by:</p>
            <img style={{width: "9%"}} src={user.image}/>
            <small style={{fontSize: "15px", fontWeight: "bold"}}> {user.name}</small>
            </div>
             {/* :
            <div>
            <h1>you have no posts</h1>
            </div>
            } */}
              
              
        </div>
    )}
