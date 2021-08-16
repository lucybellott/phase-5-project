import React from 'react'
import { useParams } from 'react-router-dom'
import {useState, useEffect} from 'react'
import Comment from './Comment'

export default function ExploreDetail({posts}) {
  
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

        // const displayComment = (newComment) => {
        //     let commentArray = [...comments, newComment]
        //     return setComments(commentArray)
        // }

        const commentsArray = filteredComments.map((comment) => {
            return <Comment
                key={comment.id}
                {...comment}
                // addComment={addComment}
                // setAddComment={setAddComment}
                // displayComment={displayComment}
               
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
                    </div>
            ))}

                    <h5 style={{marginTop: "20px"}}>Comments:</h5>
                    <ul style={{width: "600px"}}>{commentsArray}</ul>
                    <form>
                        <input type="text" placeholder="Add a comment"/>
                        <button type="submit">Submit</button>
                    </form>
                    <br/>
              </div>
    )
}
