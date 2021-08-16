
import {Link} from 'react-router-dom'
// import Comment from './Comment'

export default function NewsCard({id, image, title, claim, user, post, handleDelete, currentUser}) {
    
    const handleDeleteClick = () => {
        handleDelete(id) 
      }
      console.log(post.user)
      console.log(currentUser)
      console.log(title)
    return (
        <div>
            <h3>{title}</h3>
            {currentUser? post.user.id === currentUser.id || currentUser.level === "adm" ? 
            <button onClick={handleDeleteClick}>Delete</button>
            : null : null }
            <br/>
            <img style={{width: "400px"}} src={image}/>
            <h5>Claim:</h5>
            <p>{claim.substring(0, 250)}...</p>
            <Link to={`/posts/${post.id}`}>Read more</Link>
            
            <br/>
            <p style={{marginTop: "15px"}}>Posted by:</p>
            <img style={{width: "9%"}} src={user.image}/>
            <small style={{fontSize: "15px", fontWeight: "bold"}}> {user.name}</small>
            <br/>
            <br/>
           
        </div>
    )
}
