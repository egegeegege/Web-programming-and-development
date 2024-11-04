import './App.css'
import Kisi from './components/Kisi'
function App() {

  const kisiler = [
    {
      ad: "Ahmet",
      yas: 22
    },
    {
      ad:"Adem",
      yas:25
    },
    {
      ad:"Eda",
      yas:23
    }
  ]

  const isimler = [
    {
      isim:"Ege",
      Soyisim:"Aydın"
    },
    {
      isim:"Cemre",
      Soyisim:"Akkaya"
    },
    {
      isim:"Taner Talip ",
      Soyisim:"Yılmaz"
    },
    {
      isim:"Alperen",
      Soyisim:"Karayol"
    }
  ]

  return (
    <>
      {
        kisiler.map((kisi,index)=>{
          return(
            <div key={index}>
              <Kisi isim={kisi.isim} soyisim={kisi.Soyisim}  />
            </div>
          )
        })
      }
    </>
  )
}

export default App
