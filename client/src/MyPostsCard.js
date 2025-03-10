import React from 'react'
import {Link} from 'react-router-dom'

export default function MyPostsCard({id, title, category, image, claim, comments, user, post, currentUser}) {
    
   
    return (
        
        <div className="news-card" style={{margin:"20px"}} >
            {user.posts.length > 0 ? 
            <>
            <div>
                <h3>{title}</h3>
                <img alt="user" style={{width: "300px", height:"200px"}} src={image}/>
                <h5>Claim:</h5>
                <p>{claim.substring(0, 250)}...</p>
                <Link to={`/posts/${post.id}`}>Read more</Link>
                <br/>
                <p style={{marginTop: "15px"}}>Posted by:</p>
                <img alt="user" style={{width: "9%", borderRadius:"50px", marginRight:"6px", marginTop:"-10px"}} src={user.image}/>
                <small style={{fontSize: "15px", fontWeight: "bold"}}> {user.name}</small>
            </div>
            </>
             :
            <div>
                <h1>You have no posts</h1>
            </div>
            } 
        </div> 
       
    )}
