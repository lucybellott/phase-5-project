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
            credentials: 'include'
            })
            .then((res) => res.json())
            .then(postData => addPost(postData))
            history.push("/");

            // const clearForm =[setTitle(""), setSelected("Select"), setImage(""), setClaim(""), setFact(""), setLink("")]
         }
    
    return (
        <div className="form-body" style={{marginTop:"0px"}}>
        <div className="form-container" style={{marginTop:"30px", marginBottom:"15px"}}>
            <div className="brand-logo" >
                <img style={{width: "90%", borderRadius: "50%"}} src="https://i.pinimg.com/originals/ea/ef/0f/eaef0f0758dd7e532c87227153a6bf6f.jpg" alt="spy"/>
            </div>
            <div className="brand-title">Bust Fake News with us!</div>
            <br/>
            <em style={{fontSize: "small"}}>*Posts will be reviewed by the page Administrators and may be removed if found to be inaccurate</em>
            <div className="form-inputs">
           <form onSubmit={handleSubmit}>
               <label>Category</label>
                <select onChange={handleSelect} value={selected} style={{width:"100px",borderRadius:"20px", marginLeft:"10px", borderColor:"white"}}>
                   <option value="selected">Select</option>
                   <option value="U.S.">U.S.</option>
                   <option value="World">World</option>
                </select>
                <br/>
                <br/>
               <label>Title</label>
               <br/>
               <input style={{width: "450px"}} type="text" value={title} onChange={handleTitle}/>
               <br/>
               <br/>
                
               <label>Image Url</label>
               <br/>
               <input style={{width: "450px"}} value={image} onChange={handleImage} type="text"/>
               <br/>
               <br/>
               <label>Claim</label>
               <br/>
               <input style={{width: "450px", height: "150px"}} type="text" value={claim} onChange={handleClaim}/>
               <br/>
               <br/>
               <label>Fact</label>
               <br/>
               <input style={{width: "450px", height: "150px"}} type="text" value={fact} onChange={handleFact}/>
               <br/>
               <br/>
               <label>Link to Source</label>
               <br/>
               <input style={{width: "450px"}} type="text" value={link} onChange={handleLink}/>
               <br/>
               <br/>
               <button className="btn btn-dark" type="submit" style={{width:"120px", borderRadius:"20px"}}>Submit</button>
           </form>
           </div>
        </div>
        </div>
    )
}
