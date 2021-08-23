import React from 'react'

export default function Comment({id, content, username, user, currentUser, handleDeleteComment}) {
         console.log(username)
   const handleDeleteClick = () => {
        handleDeleteComment(id)
   }
    return (
        <div style={{textAlign:"left", alignItems:"left", flex:"0", width:"700px"}}>
            <br/> 
            <div className="comment-section">
            <img alt="user"style={{width: "10%", marginRight: "5px", borderRadius:"50px"}} src={user.image}/>
            <small style={{textAlign: 'left', fontWeight:"bold", fontSize:"90%"}}>{username}</small>
            <li style={{textAlign: 'left', marginTop:"7px"}}>{content}</li>
            {currentUser ? currentUser.username === user.username || currentUser.level === "adm" ?
            <button onClick={handleDeleteClick} style={{marginLeft:"320px", marginTop:"-60px", marginBottom:"-10px"}} class="btn btn-link">Delete</button> 
            : null :null}
            </div>
         </div>
    )
}
