import React from 'react'

export default function Comment({id, content, username, user, currentUser, handleDeleteComment}) {
        //  console.log(id)
   const handleDeleteClick = () => {
        handleDeleteComment(id)
   }
    return (
        <div style={{textAlign:"left", alignItems:"left", flex:"0", width:"700px"}}>
            <br/> 
            <div className="comment-section">
            <img alt="user"style={{width: "10%", marginRight: "5px", borderRadius:"50px"}} src={user.image}/>
            <small style={{textAlign: 'left', fontWeight:"bold", fontSize:"90%"}}>{username}</small>
            {user ? currentUser.username === user.username ?
            <button onClick={handleDeleteClick} style={{marginLeft:"250px"}} class="btn btn-link">Delete</button> 
            : null :null}
            <li style={{textAlign: 'left', marginTop:"10px"}}>{content}</li>
            </div>
         </div>
    )
}
