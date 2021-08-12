import React from 'react'
import {Link} from 'react-router-dom'

export default function WorldCard({id, title, category, image, claim, fact, source_link, comments, user, post}) {
    return (
        <div>
        {/* <h3>{title}</h3>
        <img style={{width: "400px"}} src={image}/>
        <h5>Claim:</h5>
        <p>{claim}</p>
        <h5>Fact:</h5>
        <p>{fact}</p>
        <a href={source_link} target="_blank" >Source Link </a> 
        <br/>
        <p style={{marginTop: "15px"}}>Posted by:</p>
        <img style={{width: "9%"}} src={user.image}/>
        <small style={{fontSize: "15px", fontWeight: "bold"}}> {user.name}</small>
        
        <h5 style={{marginTop: "20px"}}>Comments:</h5>
        <p>deal with comments later</p> */}
            <h3>{title}</h3>
            <img style={{width: "400px"}} src={image}/>
            <h5>Claim:</h5>
            <p>{claim.substring(0, 250)}...</p>
            <Link to={`/posts/${post.id}`}>Read more</Link>
            
            <br/>
            <p style={{marginTop: "15px"}}>Posted by:</p>
            <img style={{width: "9%"}} src={user.image}/>
            <small style={{fontSize: "15px", fontWeight: "bold"}}> {user.name}</small>
            
            <h5 style={{marginTop: "20px"}}>Comments:</h5>
            <p>deal with comments later</p>
    </div>
    )
}
