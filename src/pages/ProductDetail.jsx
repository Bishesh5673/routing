import React from 'react'
import { useParams } from 'react-router-dom'

function ProductDetail() {
    const data=useParams()
  return (
    <div>
      Product Detail : {data.id}
    </div>
  )
}

export default ProductDetail
