import React, {useState} from 'react'

export default function NewsCard({id, image, title, claim, fact, source_link, user, comments}) {
    return (
        <div>
            <h3>{title}</h3>
            <img style={{width: "400px"}} src={image}/>
            <h5>Claim:</h5>
            <p>{claim}</p>
            <h5>Fact:</h5>
            <p>{fact}</p>
            <a href={source_link} target="_blank" >Source Link </a>
            <p>Posted by:</p>
            <img style={{width: "9%"}} src={user.image}/>
            <small style={{fontSize: "15px", fontWeight: "bold"}}> {user.name}</small>
            
            <h5 style={{marginTop: "20px"}}>Comments:</h5>
            <p>deal with comments later</p>
        </div>
    )
}
