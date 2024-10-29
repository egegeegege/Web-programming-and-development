import './App.css'
import Product from './components/Product'

function App() {
  const products = [
    {
      productName: "Iphone 16",
      description: "Iphone 16 pro max 1 tb",
      price: 100000,
      image: "https://cdn.akakce.com/z/apple/iphone-16-pro-max.jpg"
    },
    {
      productName: "Samsung Monitör",
      description: "32 inc curve monitör",
      price: 30000,
      image: "https://cdn.dsmcdn.com/ty946/product/media/images/20230608/15/383308435/965741934/1/1_org.jpg"
    },
    {
      productName: "Mouse",
      description: "Logitech mouse",
      price: 300,
      image: "https://resource.logitech.com/content/dam/logitech/en/products/mice/m650/product-gallery/m650-large-graphite-top.png"
    }
  ]
  return (
    <>
    <div className='product-wrapper'>
      {
        products.map((urun,key)=>{
          return(
            <Product product={urun} key={key}/>
          )
        })
      }
    </div>
      
    </>
  )
}

export default App
