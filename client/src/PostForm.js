import React from 'react'
import {useState} from 'react'
import {useHistory} from 'react-router-dom'

export default function PostForm({user, addPost}) {
     const [selected, setSelected] = useState("Select")
     const [title, setTitle] = useState("")
     const [image, setImage] = useState("")
     const [claim, setClaim] = useState("")
     const [fact, setFact] = useState("")
     const [link, setLink] = useState("")
     const history = useHistory();
    
    const handleSelect = (e) => {   
        console.log(e.target.value)
        setSelected(e.target.value)
    }

    const handleTitle = (e) => setTitle(e.target.value)
    const handleImage = (e) => setImage(e.target.value)
    const handleClaim = (e) => setClaim(e.target.value)
    const handleFact = (e) => setFact(e.target.value)
    const handleLink = (e) => setLink(e.target.value)

   
    function handleSubmit(e){
        e.preventDefault()
        let formData = { post: {
            title: title,
            category: selected,
            image: image,
            claim: claim,
            fact: fact,
            source_link: link,
            user_id: user.id
        }}

        fetch('http://localhost:3000/posts', {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                },
            body: JSON.stringify(formData),
            })
            .then((res) => res.json())
            .then(postData => addPost(postData))
            history.push("/");

            // const clearForm =[setTitle(""), setSelected("Select"), setImage(""), setClaim(""), setFact(""), setLink("")]
         }
    
    return (
        <div>
           <form onSubmit={handleSubmit}>
               <label>Title</label>
               <input type="text" value={title} onChange={handleTitle}/>
               <br/>
               <label>Category</label>
               <select onChange={handleSelect} value={selected}>
                   <option value="Select">Select</option>
                   <option value="U.S.">U.S.</option>
                   <option value="World">World</option>
                </select>
                <br/>
               <label>Image Url</label>
               <input value={image} onChange={handleImage} type="text"/>
               <br/>
               <label>Claim</label>
               <input type="text" value={claim} onChange={handleClaim}/>
               <br/>
               <label>Fact</label>
               <input type="text" value={fact} onChange={handleFact}/>
               <br/>
               <label>Link to Source</label>
               <input type="text" value={link} onChange={handleLink}/>
               <br/>
               <button type="submit">Submit</button>
           </form>
        </div>
    )
}
