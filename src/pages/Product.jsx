import React from 'react'
import { useNavigate } from 'react-router-dom'

function Product() {
  const navigate=useNavigate()
  return (
    <div>
      <div 
        onClick={()=>{
          navigate("/productdetail/1")
        }}
      >Product 1</div>
      <div 
        onClick={()=>{
          navigate("/productdetail/2")
        }}
      >Product 2</div>
      <div 
        onClick={()=>{
          navigate("/productdetail/3")
        }}
      >Product 3</div>
    </div>
    
  )
}

export default Product
