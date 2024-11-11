import React, { useState } from 'react'
import { BsFillBasketFill  } from "react-icons/bs";
import { Link } from 'react-router-dom';

function Basket({products}) {
  const [basketProduct,setBasketProduct] = useState([])

  Object.entries(products).map((product)=>{
    if(product && product.length > 0){
      basketProduct.push(products)
    }
  })

  return (
    <div className='basket'>
      <span className='basket-count'>
          {basketProduct.length>0 ? basketProduct.length : 0}
      </span>
      <Link to={'checkout'} state={basketProduct}>
        <BsFillBasketFill className='basket-icon'/>
      </Link>
    </div>
  )
}

export default Basket