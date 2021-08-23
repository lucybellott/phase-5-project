import WorldCard from "./WorldCard"

export default function World({posts}) {
       const worldPosts = posts.filter((post) => {
        return post.category === "World"
        })
    
   const worldProps = worldPosts.map((worldPost) => {
    
        return <div className="col">
            <WorldCard key ={worldPost.id}
            {...worldPost}
            post={worldPost}/>
           </div> 
    })
   
    
    return (
        <div className="container" >
            <h1 style={{marginTop:"20px"}}>World</h1>
        <div className="row row-cols-2">
            {worldProps}
        </div>
    </div>
    )
}
