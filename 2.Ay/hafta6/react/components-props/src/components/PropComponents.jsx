import React from 'react'

function PropComponents({message,number}) { // prop yakalama
//   console.log("Componentte yakalanan prop",props)
  return (
    <div>
        <p>{message}</p>
        <p>{number}</p>
    </div>
  )
}

export default PropComponents