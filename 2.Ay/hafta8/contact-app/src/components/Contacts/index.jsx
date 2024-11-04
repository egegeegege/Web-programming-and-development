import React, { useEffect, useState } from 'react'
import List from '../List'
import Form from '../Form'
import '../../styles/style.scss'
function index() {

  const [contacts,setContacts] = useState(
    [
        {
            fullName:"Tahsin",
            phoneNumber:"5546265452"
        },
        {
            fullName:"Adem",
            phoneNumber:"5433221243"
        },
        {
            fullName:"Berkay",
            phoneNumber:"5422342322"
        },
        {
            fullName:"Eda",
            phoneNumber:"5332301243"
        }
    ]
  ) 
  
  useEffect(()=>{
    console.log(contacts)
  },[contacts]) // contacts state i set edildiğinde ve app.jsx ilk mount olduğunda çalışan effect

  return (
    <div className='contact'>
        <h1>Contacts</h1>
        <List contacts={contacts}/>
        <Form contacts={contacts} addContacts={setContacts}/>
    </div>
  )
}

export default index