import {useState} from 'react'
import { useHistory } from 'react-router-dom'

export default function Login({onLogin}) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [image, setImage] = useState("")
    const [name, setName] = useState("")
    const [errors, setErrors] = useState([])
    const [showSignUp, setShowSignUp] = useState(false) 
    
    let history = useHistory();

    function handleLogin(e) {
        e.preventDefault()
        async function login(){
            const res = await fetch("/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ username, password }),
            })
            if (res.ok) {
                const user = await res.json()
                onLogin(user)
              
                history.push('/') 
            } else {
                const err = await res.json()
                console.log(err)
                setErrors(err.errors)
                
            }
        };
        login()
    }

    function handleSignUp(e) {
        e.preventDefault()
        setErrors([])
        async function signUp(){
            const res =  await fetch("/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    username,
                    password,
                    image
                })
            });
            if(res.ok){
                const user = await res.json()
                onLogin(user)
                history.push('/') 
            } else {
                const err = await res.json()
                setErrors(err.errors)
            };
        };
        signUp();
    }

    function switchToSignup() {
        setShowSignUp(false)
        setUsername("")
        setPassword("")
        setErrors([])
    }

    function switchToLogin() {
        setShowSignUp(true)
        setName("")
        setUsername("")
        setPassword("")
        setErrors([])
    }
    
    console.log(password)
    return (
        <div className="form-body">
        <div className="login" style={{marginTop:"30px", marginBottom:"15px"}}>
        <div class="brand-logo" >
            <img style={{width: "90%", borderRadius: "50%"}} src="https://i.pinimg.com/originals/ea/ef/0f/eaef0f0758dd7e532c87227153a6bf6f.jpg" alt="spy"/>
        </div>
        <br/>
        <h2>Log In</h2>
        
        <div class="form-inputs">
        {showSignUp ? 
        <>
        <form onSubmit={handleSignUp}>
            
            <label>Name</label>
            <input style={{width: "450px"}} type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)}/><br />
            <br/>
            <label>Username</label>
            <input style={{width: "450px"}} type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)}/><br />
            <br/>
            <label>Password</label>
            <input style={{width: "450px"}} type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}/><br />
            <br/>
            <label>Photo</label>
            <input style={{width: "450px"}} type="text" placeholder="Image Url" value={image} onChange={e => setImage(e.target.value)} /><br/>
            <br/>
            <button style={{width:"150px", height:"50px", borderRadius:"20px"}} class="btn btn-danger" type="submit">Create Account</button>
        </form>
        
        <div style={{marginTop: "20px", color: "red"}}>{errors.map(err => <p key={err}>{err}</p>)}</div>
        
        <div>
            <br/>
           Already have an account?
            <button style={{width:"110px", borderRadius:"20px", marginLeft:"10px"}} class="btn btn-dark" onClick={switchToSignup}>Login here</button>
        </div>
        </>
        : 
        <>
        <form onSubmit={handleLogin}>
            <label>Username</label>
            <br/>
            <input style={{width: "450px"}} type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)}/><br />
            <br/>
            <label>Password</label>
            <br/>
            <input style={{width: "450px"}} type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}/><br />
            <br />
            <button style={{width:"110px", borderRadius:"20px"}} class="btn btn-dark" type="submit">Login</button>
        </form>
       
        <div style={{marginTop: "20px", color: "red"}}>{errors.map(err => <p key={err}>{err}</p>)}</div>
        
        <div style={{textAlign: "center"}}>
            Don't have an account?
            <br/>
            <br/>
            <button style={{width:"150px", height:"50px", borderRadius:"20px"}} class="btn btn-danger" onClick={switchToLogin}>Sign up here</button>
        </div>
        </>
        }
        </div>
        </div>
        </div>
    )
}
