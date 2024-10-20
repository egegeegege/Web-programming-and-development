import './App.css'
import PropComponents from './components/PropComponents'
function App() {
  var data = "Hello Prop"
  var sayi = 20
  return (
    <>
     <PropComponents message={data} number={sayi}/> {/* prop passing (prop geçme) */}
    </>
  )
}

export default App
