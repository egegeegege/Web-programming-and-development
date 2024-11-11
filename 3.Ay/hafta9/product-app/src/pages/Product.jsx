import axios from 'axios'
import React, { useEffect, useState } from 'react'
import LoadingImage from '../assets/img/loading-spinner.gif'
import { Link } from 'react-router-dom'
import { BsFillStarFill,BsBasketFill  } from "react-icons/bs";
import Basket from '../components/Basket'


function Product() {
    const[products,setProducts] = useState([])
    const[loading,setLoading] = useState(true)
    const[basketProducts,setBasketProducts] = useState([])

    useEffect(()=>{
        axios.get('https://dummyjson.com/products')
        .then((response)=>{
            if(response.status === 200){
                console.log(response.data.products)
                setProducts(response.data.products)
                setLoading(false)
            }
        })
        .catch((e)=>{
            console.log(e)
        })
    },[])  
  return (
    <>
        {loading ?
            <div className='loading d-flex justify-content-center'>
                <img src={LoadingImage} />
            </div> : 
            <div className='product-wrapper container'>
                <div>
                    <Basket products={basketProducts} />
                </div>
                <div className='row d-flex justify-content-center'>
                {
                    products.map((product)=>(
                        <div className='product col-md-3' key={product.id}>
                            <Link to={'product/'+product.id}>
                                <img src={product.thumbnail}  className='image' alt={product.title}/>
                                <div className='info'>
                                    <div className='header'>
                                        <p className='title'>{product.title}</p>
                                        <div className='rate'>
                                            <BsFillStarFill  className='icon'/>
                                            <span>{product.rating}</span>
                                         </div>
                                    </div>
                                    <div className='description'>
                                        <p>{product.description}</p>
                                    </div>
                                    <div className='price-box'>
                                        <p className='discount'>${Math.ceil(Math.round(product.discountPercentage * product.price) / 100) + Math.round(product.price)}</p>
                                        <p className='price'>${product.price}</p>
                                    </div>
                                </div>
                                </Link>
                                    <button className='btn btn-danger' onClick={()=> setBasketProducts({product})}>
                                        <span className='basket-icon'><BsBasketFill /></span>
                                        <span>Add To Cart</span>
                                    </button>
                                    <div className={product.stock > 0 ? 'in-stock' : 'out-stock' }>
                                        <span>{product.stock > 0 ? 'Avaiable Stock' : 'Out Of Stock' }</span>
                                    </div>
                            </div>
                    ))
                }    
                </div>
            </div>   
        }
    </>

  )
}

export default Product