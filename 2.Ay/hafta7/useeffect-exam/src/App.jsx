import { useState,useEffect } from 'react'
import './App.css'

function App() {
  const [sayi, setSayi] = useState(0)
  const [ad, setAd] = useState("Ali")

  useEffect(() => { // Bu Effect component mount olduğunda yani ilk ayağa kalktığında ve bir state set edildiğinde çalışır. Bunun kullanımına dikkat etmeliyiz.
    console.log("Full Çalışan")
    // Kesinlikle bu yapıda state set etmiycez.
  })

  useEffect(() => { // state set edildiğin çalışmaz.
    console.log("Component ilk render edildiğinde bir kere çalışır")
  },[]) // dependency Array

  useEffect(() => {  // özel bir state dependency arraye veririz. Bu arrayin içindeki state yada stateler değiştiğinde effect çalışır.
    console.log("Özel bir state bağlı olarak çalışır.")
  }, [sayi])

  useEffect(() => {  
    return () => {
      alert("Component Unmount olduğunda çalışır") // Bu effect bileşen domdan kaldırılmadan hemen önce çalışacaktır. Örneğin sayfa kapatıldığında yada component başka bir component ile yer değiştirdiğinde.
    }
  },[])
  
  
  
  

  return (
    <>
      <p>Use Effect</p>
      <button onClick={()=> setSayi(sayi + 1)}>State Değiştir</button>
      <button onClick={()=> setAd("Ahmet")}>State Değiştir</button>
    </>
  )
}

export default App
