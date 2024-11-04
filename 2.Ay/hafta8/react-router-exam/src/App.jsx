import './App.css'
import Header from './components/Header'
import About from './views/About'
import Contact from './views/Contact'
import Head from './views/Head'
import Home from './views/Home'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'

function App() {

  return (
    <div>
    <Router>
      <Header />
      <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='about' element={<About/>}></Route>
          <Route path='contact' element={<Contact/>}></Route>
          <Route path='head' element={<Head/>}></Route>
      </Routes>
    </Router>
    </div>
    
  )
}

export default App
