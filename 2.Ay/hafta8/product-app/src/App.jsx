import { useState } from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Product from './pages/Product'
import ProductDetail from './pages/ProductDetail'
import Checkout from './pages/Checkout'
import './styles/style.scss'
function App() {

  return (
    <Router>
        <div className='app'>
            <Routes>
                <Route path='/' element={<Product/>}></Route>
                <Route path='product/:id' element={<ProductDetail/>}></Route>
                <Route path='checkout' element={<Checkout/>}></Route>
            </Routes>
        </div>
    </Router>
  )
}

export default App
