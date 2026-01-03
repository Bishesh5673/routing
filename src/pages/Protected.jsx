import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Protected({comp}) {
    const navigate = useNavigate();
    let isLogin = false

    useEffect(()=>{
        if(!isLogin){
            navigate("/login");
        }
    },[navigate])
  
    return comp
}

export default Protected
