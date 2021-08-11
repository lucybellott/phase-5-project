import React, {useState} from 'react'

export default function NewsCard({id, image, title, claim, fact, source_link, user}) {
    return (
        <div>
            <img style={{width: "5%"}} src={user.image}/>
            <small>{user.name}</small>
            <h3>{title}</h3>
            <img style={{width: "400px"}} src={image}/>
            <h5>Claim:</h5>
            <p>{claim}</p>
            <h5>Fact:</h5>
            <p>{fact}</p>
        </div>
    )
}
