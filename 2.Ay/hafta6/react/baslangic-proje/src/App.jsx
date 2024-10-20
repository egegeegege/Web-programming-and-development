import reactResmi from './assets/react.svg' /* dışarıdan dosya import etme */
import './App.css' // import için kısayol => imp
import FirstComponent from './components/FirstComponent'
import SecondComponent from './components/SecondComponent'
export default function App() {
  var message = "React Başlangıç Projesi"
  return (
    /* JSX => Javascriptin özel bir işaretlemesidir.
       Kurallar ve Özellikler
       Jsx te js değişkenleri {} ile kullanılabilir. Objectler {{}} kullanılır.
       Jsx te fragment <> </> vardır yani Kapsayıcı. Kapsayıcıları kullanmak zorundayız.
       Jsx te tek farklılık class yerine className kullanılmasıdır.
    */
    <> {/* jsx tek bir blok içinde dönmeli */}
      <div>
        <p>{message}</p>
        <img src={reactResmi} className='logo' />
      </div>
      <FirstComponent />
      <FirstComponent />
      <FirstComponent />
      <SecondComponent />
    </>
  )
}

// Dışarıya aktar
