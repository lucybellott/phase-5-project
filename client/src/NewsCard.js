
import {Link} from 'react-router-dom'
// import Comment from './Comment'

export default function NewsCard({id, image, title, claim, user, post, handleDelete, currentUser}) {
    
    const handleDeleteClick = () => {
        handleDelete(id) 
      }
     
    return (
        <div className="container">
            <div className="row">
            <div class="col-6 col-sm-3">   
                <div className="news-card">
                    <h4>{title}</h4>
                    {currentUser? post.user.id === currentUser.id || currentUser.level === "adm" ? 
                    <button onClick={handleDeleteClick}>Delete</button>
                    : null : null }
                    <br/>
                    <img style={{width: "300px", height:"200px"}} src={image}/>
                    <br/>
                    <br/>
                    <h5>Claim:</h5>
                    <p style={{fontSize: "90%"}}>{claim.substring(0, 250)}...</p>
                    <Link style={{float: 'right'}} to={`/posts/${post.id}`}>Read more</Link>
            
                    <br/>
                    <em style={{marginTop: "15px"}}>Posted by:</em>
                    <br/><br/>
                    <img style={{width: "11%", borderRadius:"50px"}} src={user.image}/>
                    <small style={{fontSize: "15px", fontWeight: "bold"}}> {user.name}</small>
                    <br/>
                    <br/>
           
        </div>
        </div>
        </div>
        </div>
    )
}
