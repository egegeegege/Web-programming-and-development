import React from 'react'

function Product({product}) {
  return (
    <div className='product'>
        <img src={product.image}/>
        <h4>{product.productName}</h4>
        <p>{product.description}</p>
        <button>{product.price}</button>
    </div>
  )
}

export default Product