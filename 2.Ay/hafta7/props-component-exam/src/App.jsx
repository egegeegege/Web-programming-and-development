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

  return (
    <>
      {
        kisiler.map((kisi,index)=>{
          return(
            <div key={index}>
              <Kisi name={kisi.ad} age={kisi.yas}  />
            </div>
          )
        })
      }
    </>
  )
}

export default App
