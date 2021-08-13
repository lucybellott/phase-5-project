import React from 'react'
import { useParams } from 'react-router-dom'
import Comment from './Comment'

export default function ExploreDetail({posts, comments}) {
   console.log(comments)
    const { id } = useParams();
  
    const singlePost= posts.filter((post) => post.id == id)
    
    const commentArray = comments.map((comment) => {
        return <Comment
            key={comment.id}
            {...comment}
        />
    })

        
    return (
        <div class="card" style={{width: "40rem"}} id="explore-card">
            {
            singlePost.map((post) => (
               
                 <div key={ post.id }>
                    <h3>{post.title}</h3>
                    <img style={{width: "400px"}} src={post.image}/>
                    <h5>Claim:</h5>
                    <p>{post.claim}</p>
                    <h5>Fact:</h5>
                    <p>{post.fact}</p>
                    <a href={post.source_link} target="_blank" >Source Link </a> 
                    <br/>
                    <p style={{marginTop: "15px"}}>Posted by:</p>
                    <img style={{width: "9%"}} src={post.user.image}/>
                    <small style={{fontSize: "15px", fontWeight: "bold"}}> {post.user.name}</small>
                    
                    <h5 style={{marginTop: "20px"}}>Comments:</h5>
                    <ul>{commentArray}</ul>
                </div>
                
              ))}
              </div>
    )
}
