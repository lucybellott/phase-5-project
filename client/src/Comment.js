import React from 'react'

export default function Comment({content, username, setAddComment, addComment, displayComment, currentUser}) {
            
   

    
        
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
