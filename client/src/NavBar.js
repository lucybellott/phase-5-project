import {NavLink, useHistory} from 'react-router-dom';

export default function NavBar({user, setUser}) {
   
    let history = useHistory()

    function handleLogout() {
        async function logout() {
        const res = await fetch("/logout", {
            method: 'DELETE'
        })
        if (res.ok) {
            setUser(null)
            history.push('/')
        }
        }
        logout()
    }
     return (
        <div style={{height: "60px"}} className="nav-bar">
            {user ?
            <div style={{marginLeft: "10px", marginRight: "10px"}}>
                <img className="hello-image"src={user.image} style={{borderRadius: "28px", marginRight:"10px", width:"40px", marginLeft:"10px"}}/>
                <small style={{fontSize:"larger", marginRight:"10px", marginLeft:"5px", fontWeight: "bold"}}>Hello {user.name}</small>
                <NavLink to="/" style={{color: "antiquewhite", marginLeft:"20px", marginRight: "15px"}}>Home</NavLink> 
                <NavLink to="/US" style={{color: "antiquewhite", marginRight: "15px"}}>U.S.🇺🇸</NavLink>
                <NavLink to="/world" style={{color: "antiquewhite", marginRight: "15px"}}>World🌎</NavLink>
                <NavLink to="/myposts" style={{color: "antiquewhite", marginRight: "15px"}}>MyPosts</NavLink>
                <NavLink to="/form" style={{color: "antiquewhite"}}>Colaborate with us</NavLink>
                <button class="btn btn-dark" style={{backgroundColor: "black", borderColor: "black", color: "rgb(228, 124, 124)", float:"right", fontWeight: "bold", marginRight: "10px"}} onClick={handleLogout}>Log Out</button>  
                </div>
                :
                <div style={{marginLeft: "auto", marginRight: "auto", marginTop:"3px", textAlign: "center"}} >
                <NavLink to="/" style={{color: "antiquewhite", marginLeft:"auto", marginRight: "8px"}}>Home</NavLink> 
                <NavLink to="/US" style={{color: "antiquewhite", marginRight: "10px"}}> U.S.🇺🇸</NavLink>
                <NavLink to="/world" style={{color: "antiquewhite", marginRight: "10px"}}>World🌎</NavLink>
                <NavLink to="/login" style={{color: "rgb(74, 153, 218)", float:"right", marginLeft:"-130px", marginRight:"14px"}}> Log in/Sign up </NavLink>
            </div> }
           <br/>

        </div>
    )
}
