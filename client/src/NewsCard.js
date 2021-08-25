
import {Link} from 'react-router-dom'
// import Comment from './Comment'

export default function NewsCard({id, image, title, claim, user, post, handleDelete, currentUser}) {
    
    const handleDeleteClick = () => { 
        handleDelete(id) 
      }
     
    return (
        <div className="container">
          <div className="row">
            <div className="col-6 col-sm-3">   
                <div className="news-card">
                    {currentUser? post.user.id === currentUser.id || currentUser.level === "adm" ? 
                    <button style={{float:"right", width:"10%", borderWidth:"0px", fontWeight:"bold", marginLeft:"3px", marginRight:"-7px"}} onClick={handleDeleteClick}>
                    🗑
                    </button>
                    : null : null }
                    <h4>{title}</h4>
                    <br/>
                    <img alt="user" style={{width: "300px", height:"200px"}} src={image}/>
                    <br/>
                    <br/>
                    <h5>Claim:</h5>
                    <p style={{fontSize: "90%"}}>{claim.substring(0, 250)}...</p>
                    <Link style={{float: 'right'}} to={`/posts/${post.id}`}>Read more</Link>
            
                    <br/>
                    <em style={{marginTop: "15px"}}>Posted by:</em>
                    <br/><br/>
                    <img alt="user"  style={{width: "11%", borderRadius:"50px"}} src={user.image}/>
                    <small style={{fontSize: "15px", fontWeight: "bold"}}> {user.name}</small>
                    <br/>
                    <br/>
           
                </div>
            </div>
         </div>
    </div>
    )
}
