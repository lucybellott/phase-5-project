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

        
            function handleDeleteComment(deleteId) {
                // console.log(deleteId)
                fetch(`http://localhost:3000/comments/${deleteId}`, {
                    method: "DELETE",
                    credentials: 'include'
                })
                .then(() => {
                    let updatedComments = comments.filter(comment => comment.id !== deleteId)
                    setComments(updatedComments)
                    
                })
        
            
            }
            const commentsArray = filteredComments.map((comment) => {
                return <Comment
                    key={comment.id}
                    {...comment} 
                    currentUser={currentUser}
                    handleDeleteComment={handleDeleteComment}
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
        <div>
            <h1 style={{marginTop:"20px", marginBottom:"20px"}}>The Fake News Buster</h1>
        <div class="card" style={{width: "60rem", padding:"100px"}} id="explore-card">
           
            <div>
            {
            singlePost.map((post) => (
               
                 <div key={ post.id }>
                     
                    <h3>{post.title}</h3>
                    <br/>
                    <img alt="user" style={{width: "400px"}} src={post.image}/>
                    <br/><br/><br/>
                    <div style={{textAlign: "left"}}>
                    <h5 style={{color: "red", fontWeight: "bold"}}>Claim:</h5>
                    <p>{post.claim}</p>
                    <h5 style={{color:"green", fontWeight: "bold"}}>Fact:</h5>
                    <p>{post.fact}</p>
                    <a style={{fontWeight:"bold"}} href={post.source_link} target="_blank" rel="noreferrer" >Source Link </a> 
                    <br/>
                    </div>
                    <p style={{marginTop: "15px"}}>Posted by:</p>
                    <img alt="user" style={{width: "9%", borderRadius:"50px", marginRight:"6px", marginTop:"-10px"}} src={post.user.image}/>
                    <small style={{fontSize: "17px", fontWeight: "bold"}}> {post.user.name}</small>
                    </div>
            ))}
            </div>
                    <div style={{textAlign: "left"}}>
                    <h5 style={{marginTop: "20px", marginLeft:"40px"}}>Comments:</h5>
                    <ul style={{width: "600px"}}>{commentsArray}</ul>
                    { currentUser ?
                    <div className="form-inputs">
                    <form onSubmit={handleCommentSubmit}>
                        <input style={{width:"410px", marginLeft:"40px", marginBottom:"2px"}} onChange={handleComment} value={addComment} type="text" placeholder="Add a comment"/>
                        <br/>
                        <button style={{marginLeft:"50px", borderRadius:"50px"}} type="submit" class="btn btn-dark">Submit</button>
                    </form>
                    <br/>
                    </div>
                    : null}
                    </div>
              </div>
         </div>

    )
}
