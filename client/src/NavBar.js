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
        <div>
            {user ?
            <div>
           <NavLink to="/">Home </NavLink> 
           <NavLink to="/US"> U.S. </NavLink>
           <NavLink to="/world"> World </NavLink>
           <NavLink to="/myposts"> My Posts </NavLink>
           <NavLink to="/form"> Colaborate with us </NavLink>
           <button onClick={handleLogout}>Log Out</button> 
           </div>
           :
           <div>
           <NavLink to="/">Home </NavLink> 
           <NavLink to="/US"> U.S. </NavLink>
           <NavLink to="/world"> World </NavLink>
           <NavLink to="/login"> Log in/Sign up </NavLink>
            </div> }
           <br/>

        </div>
    )
}
