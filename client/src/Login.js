import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './login.css'; // Import the CSS file

export default function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [errors, setErrors] = useState([]);
  const [showSignUp, setShowSignUp] = useState(false);

  let history = useHistory();

  function handleLogin(e) {
    e.preventDefault();

    async function login() {
      const res = await fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, password }),
      });

      if (res.ok) {
        const user = await res.json();
        onLogin(user);
        history.push('/');
      } else {
        const err = await res.json();
        console.log(err);
        setErrors(err.errors);
      }
    }

    login();
  }

  function handleSignUp(e) {
    e.preventDefault();
    setErrors([]);

    async function signUp() {
      const res = await fetch("/signup", {
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

      if (res.ok) {
        const user = await res.json();
        onLogin(user);
        history.push('/');
      } else {
        const err = await res.json();
        setErrors(err.errors);
      }
    }

    signUp();
  }

  function switchToSignup() {
    setShowSignUp(false);
    setUsername("");
    setPassword("");
    setErrors([]);
  }

  function switchToLogin() {
    setShowSignUp(true);
    setName("");
    setUsername("");
    setPassword("");
    setErrors([]);
  }

  return (
    <div className="form-body">
      <div className="login-container">
        <div className="brand-logo">
          <img className="brand-logo-image" src="https://i.pinimg.com/originals/ea/ef/0f/eaef0f0758dd7e532c87227153a6bf6f.jpg" alt="spy" />
        </div>
        <br />
        <h2>Log In</h2>

        <div className="form-inputs">
          {showSignUp ? (
            <>
              <form onSubmit={handleSignUp}>
                <label>Name</label>
                <input className="input-field" type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} /><br />
                <br />
                <label>Username</label>
                <input className="input-field" type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} /><br />
                <br />
                <label>Password</label>
                <input className="input-field" type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} /><br />
                <br />
                <label>Photo</label>
                <input className="input-field" type="text" placeholder="Image Url" value={image} onChange={e => setImage(e.target.value)} /><br />
                <br />
                <button className="signup-button"  type="submit">Create Account</button>
              </form>

              <div className="error-message">{errors.map(err => <p key={err}>{err}</p>)}</div>

              <div>
                <br />
                Already have an account?
                <button className="switch-button" onClick={switchToSignup}>Login here</button>
              </div>
            </>
          ) : (
            <>
              <form onSubmit={handleLogin}>
                <label>Username</label>
                <br />
                <input className="input-field" type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} /><br />
                <br />
                <label>Password</label>
                <br />
                <input className="input-field" type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} /><br />
                <br />
                <button className="login-button" type="submit">Login</button>
              </form>

              <div className="error-message">{errors.map(err => <p key={err}>{err}</p>)}</div>

              <div className="signup-container">
                Don't have an account?
                <br />
                <br />
                <button className="signup-button" onClick={switchToLogin}>Sign up here</button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
