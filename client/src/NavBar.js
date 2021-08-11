import {NavLink, useHistory} from 'react-router-dom';

export default function NavBar() {
    return (
        <div>
           <NavLink to="/">Home </NavLink> 
           <NavLink to="/US"> U.S. </NavLink>
           <NavLink to="/world"> World </NavLink>
           <NavLink to="/myposts"> My Posts </NavLink>
           <NavLink to="/form"> Colaborate with us </NavLink>
           <NavLink to="/login"> Log in </NavLink>
           <button>Log Out</button>
           <br/>

        </div>
    )
}
