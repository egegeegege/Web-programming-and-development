import { useParams } from 'react-router-dom'
import {useEffect , useState} from 'react'
import axios from 'axios'
import LoadingImage from '../assets/img/loading-spinner.gif'

function ProductDetail() {
  const {id} =  useParams()
  const [product,setProduct] = useState([])
  const[loading,setLoading] = useState(true)

  useEffect(()=>{
    axios.get(`https://dummyjson.com/products/${id}`)
    .then((response)=>{
        if(response.status === 200){
            console.log(response.data)
            setProduct(response.data)
            setLoading(false)
        }
    })
    .catch((e)=>{
        console.log(e)
    })
},[])  
  return (
    loading ?
      <div className='loading d-flex justify-content-center'>
          <img src={LoadingImage} />
      </div>: 
      <div className='container product-detail'>
          <div className='row'>
            <div className='col-md-4 detail-img'>
              <img src={product.thumbnail} alt={product.title} />
            </div>
            <div className='col-md-8 detail-info'>
              <p className='title'>{product.title}</p>
              <p className='description'>{product.description}</p>
              <div className='brand'>
                  <p>Brand:</p>
                  <p>{product.brand}</p>
              </div>
              <div className='stock'>
                <p>Stock:</p>
                <p>{product.stock}</p>
              </div>
               <div className='price-box'>
                  <p className='discount'>${Math.ceil(product.discountPercentage * product.price / 100) + Math.round(product.price)}</p>
                  <p className='percentage'>%{Math.ceil(product.discountPercentage)}</p>
                  <p className='price'>${product.price}</p>
              </div>
            </div>
          </div>
      </div>
    
  )
}

export default ProductDetail