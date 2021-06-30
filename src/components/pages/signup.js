import React, { useState } from 'react';
import {useHistory} from 'react-router-dom'
function SignUp(){
  const [ username, setUsername ] = useState("")
  const [ password, setPassword ] = useState("")
  const history = useHistory()

  const handleSignUp = () => {
      fetch("http://localhost:3000/users", {
          method: 'POST',
          headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
          },
          body: JSON.stringify({
            username: username,
            password: password
          }),
      })
          .then((response) => response.json())
          .then((user) => {
            localStorage.setItem("user", user.id)
            history.push("/home")
          })
        
  }
  console.log("login: ", username, password)
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh'
      }}
    >
      <h1>Sign Up</h1>
      <from>
            <h5 className="loginHFive">username</h5>
            <input className='loginInput' type='username' value={username} onChange={e => setUsername(e.target.value)}/>

              <h5 className="loginHFive">Password</h5>
              <input className='loginInput' type='Password' value={password} onChange={e => setPassword(e.target.value)}/>
              <button  onClick={handleSignUp} className='signInButton'  type='submit'>Sign Up</button>
          </from>
    </div>
  );
};

export default SignUp;