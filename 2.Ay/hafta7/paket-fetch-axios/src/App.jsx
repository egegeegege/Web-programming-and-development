import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios' // axios u import etme
import { ToastContainer, toast } from 'react-toastify';
import Slider from "react-slick";
import 'react-toastify/dist/ReactToastify.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  const [users, setUsers] = useState([])
  const [photos, setPhotos] = useState([])

  useEffect(()=>{
    // native fetch
    // fetch('https://jsonplaceholder.typicode.com/users') // fetch ile servicelere gidip get,post,put,delete işlemleri yapabiliriz.
    // .then((response) => response.json()) // dönen response u json a çevirmemiz gerekiyor.
    // .then((response)=>{
    //   console.log(response)
    //   setUsers(response)
    // })
    // .catch((e) => {
    //   console.log(e)
    // })

    axios.get('https://jsonplaceholder.typicode.com/users')
    .then((response)=>{
      if(response.status == 200){
        setUsers(response.data)
        toast.success("Success", {
          position: "bottom-right",
          autoClose: 500,
        });
      }
    })
    .catch((e)=>{
      toast.error(e.message, {
        position: "bottom-right",
        autoClose: 500,
      });
      
    })

    axios.get('https://dummyjson.com/products')
    .then((response)=>{
      console.log(response.data)
      setPhotos(response.data.products)
    })
    .catch((e)=>{
      console.log(e)
    })


  },[])
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
   
    <div>
     <Slider {...settings}>
        {
          photos.map((photo,key)=>{
            return(
              <div key={key}>
                <img src={photo.thumbnail}  />
              </div>
            )
           
          })
        }
     </Slider>
      {
        users.map((user,key)=>{
          return(
            <div key={key}>
                <p>{user.name}</p>
                <p>{user.email}</p>
            </div>
          )
        })
      }
      <ToastContainer />

    </div>
  )
}

export default App
