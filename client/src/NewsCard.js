
import {Link} from 'react-router-dom'
// import Comment from './Comment'

export default function NewsCard({id, image, title, claim, fact, source_link, user, comments, post}) {
    
    // const commentsArr = comments.map(comment => {
    //     console.log(comment)
    //     return <Comment key={comment.id} {...comment} />
    // })



    return (
        <div>
            <h3>{title}</h3>
            <img style={{width: "400px"}} src={image}/>
            <h5>Claim:</h5>
            <p>{claim.substring(0, 250)}...</p>
            <Link to={`/posts/${post.id}`}>Read more</Link>
            
            <br/>
            <p style={{marginTop: "15px"}}>Posted by:</p>
            <img style={{width: "9%"}} src={user.image}/>
            <small style={{fontSize: "15px", fontWeight: "bold"}}> {user.name}</small>
            
            {/* <h5 style={{marginTop: "20px"}}>Comments:</h5>
            <ul>{commentsArr}</ul> */}
        </div>
    )
}
