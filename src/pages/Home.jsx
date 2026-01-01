import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()
  const user={
    name:'Ereeeen',
    age:22
  }
  return (
    <div>
      <h1>Welcome to home page</h1>
      <button
      onClick={()=>{
        navigate('/login',{state:user})
      }}>
        Go to login page{""}
      </button>
    </div>
  )
}

export default Home
