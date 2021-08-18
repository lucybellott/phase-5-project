import React from 'react'
import { useParams } from 'react-router-dom'
import {useState, useEffect} from 'react'
import Comment from './Comment'

export default function ExploreDetail({posts, currentUser}) {

    const { id } = useParams();
    const[comments, setComments] = useState([])
    const[addComment, setAddComment] = useState("")
  
    const singlePost= posts.filter((post) => post.id == id)
    
    useEffect(() => {
        fetch('http://localhost:3000/comments')
        .then(resp => resp.json())
        .then(data => setComments(data))
       
        }, [])

        const filteredComments = comments.filter((comment) => {
            return comment.post.id == id
        })

        const displayComment = (newComment) => {
            let commentArray = [...comments, newComment]
            return setComments(commentArray)
        }

        const commentsArray = filteredComments.map((comment) => {
            return <Comment
                key={comment.id}
                {...comment} 
                currentUser={currentUser}
                />
        })

         const handleCommentSubmit = (e) =>{
            e.preventDefault()
          
            let commentData = {
                post_id: id,
                user_id: currentUser.id,
                content: addComment,
                }
    
        fetch('http://localhost:3000/comments', {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json',
                    },
                body: JSON.stringify(commentData),
                })
                .then((res) => res.json())
                .then(singleComment => displayComment(singleComment))
                
                setAddComment("")
    
            }

            const handleComment = (e) =>{
                setAddComment(e.target.value)
            }

        
    return (
        <div class="card" style={{width: "60rem", padding:"50px"}} id="explore-card">
            <div>
            {
            singlePost.map((post) => (
               
                 <div key={ post.id }>
                    <h3>{post.title}</h3>
                    <br/>
                    <img style={{width: "400px"}} src={post.image}/>
                    <br/><br/>
                    <div style={{textAlign: "left"}}>
                    <h5>Claim:</h5>
                    <p>{post.claim}</p>
                    <h5>Fact:</h5>
                    <p>{post.fact}</p>
                    <a href={post.source_link} target="_blank" >Source Link </a> 
                    <br/>
                    </div>
                    <p style={{marginTop: "15px"}}>Posted by:</p>
                    <img style={{width: "9%", borderRadius:"50px", marginRight:"6px"}} src={post.user.image}/>
                    <small style={{fontSize: "17px", fontWeight: "bold"}}> {post.user.name}</small>
                    </div>
            ))}
            </div>
                    <div style={{textAlign: "left"}}>
                    <h5 style={{marginTop: "20px"}}>Comments:</h5>
                    <ul style={{width: "600px"}}>{commentsArray}</ul>
                    { currentUser ?
                    <div className="form-inputs">
                    <form onSubmit={handleCommentSubmit}>
                        <input style={{width:"330px", marginLeft:"10", marginBottom:"2px"}} onChange={handleComment} type="text" placeholder="Add a comment"/>
                        <br/>
                        <button style={{marginLeft:"10", borderRadius:"50px"}} type="submit" class="btn btn-dark">Submit</button>
                    </form>
                    <br/>
                    </div>
                    : null
                    }
                    </div>
              </div>

    )
}
