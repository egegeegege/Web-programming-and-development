import React from 'react'
import { useLocation } from 'react-router-dom'

function Checkout() {
  let {state} = useLocation()
  const basketProducts = state;
  return (
    <div className='container'>
        <div className='row'>
            {
              basketProducts && basketProducts.length > 0 ?
              basketProducts.map((p,key)=>(
                <div className='checkout-list' key={key}>
                    <div className='col-md-3'>
                        <img src={p.product.thumbnail} alt={p.product.title} className='product-img' />
                    </div>
                    <div className='col-md-9'>
                      <p className='product-title'>{p.product.title}</p>
                      <p className='product-description'>{p.product.description}</p>
                      <div className='product-stock-price'>
                        <p className='price'>${p.product.price}</p>
                        <span className='seperator'>|</span>
                        <span className='stock'>{p.product.stock > 0 ? 'Avaiable Stock' : 'Out Of Stock' }</span>
                      </div>
                    </div>
                </div>
              ))
              :
              <div>
                Empty Basket
              </div>
            }
        </div>
    </div>
  )
}

export default Checkout