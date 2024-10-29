import './App.css'
import {useState} from 'react'

function App() {
  console.log("Hello") // Burası bir state set edildiğinde gelir.
  // var sayi = 10  // buradaki değişkenler reactive değildir. Değişiklikl DOM a yansımaz
  const [sayi, setSayi] = useState(10)//  ilk değer state adı (sayi), ikinci state set edecek method (setSayi) useStatein içindeki değer initial value
  const [ad, setAd] = useState("")
  const Arttir = () => {
    setSayi(sayi + 1)
    console.log(sayi)
  }
  return (
    <>
      <p>{sayi}</p> {/* stateler reactivedir. Tepkisel */}
      <button onClick={Arttir}>Arttır</button>
      <p>{ad}</p>
      <button onClick={() => setAd("Adem")}>Adı Değiştir</button>
    </>
  )
}

export default App
