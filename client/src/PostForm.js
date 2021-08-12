import React from 'react'

export default function PostForm() {
    return (
        <div>
           <form>
               <label>Title</label>
               <input type="text"/>
               <br/>
               <label>Image Url</label>
               <input type="text"/>
               <br/>
               <label>Claim</label>
               <input type="text"/>
               <br/>
               <label>Fact</label>
               <input type="text"/>
               <br/>
               <label>Link to Source</label>
               <input type="text"/>
               <br/>
               <button type="submit">Submit</button>
           </form>
        </div>
    )
}
