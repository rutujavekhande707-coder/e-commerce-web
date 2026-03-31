import React, { useState } from 'react'
import "./Login.css"


function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleLogin = () => {

    if (!email || !password) {
      setError("Please fill all fields")
    } else {
      setError("")
      alert("Login Successful")
    }
  }

  return (
    <div className="container">
      <h2>Login</h2>

      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button to={"/products"} onClick={handleLogin}>Login</button>
      {error && <div className="error">{error}</div>}
    </div>
  )
}

export default Login
