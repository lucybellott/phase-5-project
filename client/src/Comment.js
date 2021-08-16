import React from 'react'

export default function Comment({content, username, setAddComment, addComment, displayComment}) {
            
    
    
    // const handleCommentSubmit = (e) =>{
    //         e.preventDefault()
    //         let commentData = {
    //             username: username,
    //             content: addComment,
                
    //         }
    
    //     fetch('http://localhost:9292/comments', {
    //             method: 'POST',
    //             headers: { 
    //                 'Content-Type': 'application/json',
    //                 },
    //             body: JSON.stringify(commentData),
    //             })
    //             .then((res) => res.json())
    //             .then(singleComment => displayComment(singleComment))
                
    //             setAddComment("")
    
    //         }
    
        
    //     const handleComment = (e) =>{
    //         setAddComment(e.target.value)
    //     }


    return (
        <div>
            <br/>
            <div className="comment-section">
            <h6 style={{textAlign: 'left'}}>{username}</h6>
            <li style={{textAlign: 'left'}}>{content}</li>
            </div>

            
        </div>
    )
}
