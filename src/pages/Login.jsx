import React from 'react'
import { useLocation } from 'react-router-dom'

function Login() {
  const location=useLocation();
  // const {name,age}=location.state
  return (
    <div>
      <h1>Login</h1>
      {/* <h2>{name}</h2>
      <h2>{age}</h2> */}
    </div>
  )
}

export default Login
