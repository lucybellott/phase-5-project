import React from 'react'

export default function Comment({content, username, user, currentUser}) {
            
   

    return (
        <div style={{textAlign:"left", alignItems:"left", flex:"0"}}>
            <br/> 
            <div className="comment-section">
            <img style={{width: "10%", marginRight: "5px", borderRadius:"50px"}} src={user.image}/>
            <small style={{textAlign: 'left', fontWeight:"bold", fontSize:"90%"}}>{username}</small>
            <li style={{textAlign: 'left', marginTop:"10px"}}>{content}</li>
            </div>

            
        </div>
    )
}
