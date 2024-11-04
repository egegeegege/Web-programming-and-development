import React, { useEffect, useState } from 'react'

function index({contacts,addContacts}) {
  const initialFormValues = {fullName:'',phoneNumber:''}
  const[form,setForm] = useState(initialFormValues)

  useEffect(()=>{
    setForm(initialFormValues)
  },[contacts])

  const onInputChange = (e) => {
    setForm({...form,[e.target.name]: e.target.value})
  }

  const onFormSubmit = (e) =>{
    e.preventDefault()
    if(form.fullName === '' || form.phoneNumber === ''){
       alert("Lütfen alanları doldurunuz")
       return false
    }

    addContacts([...contacts,form])
  }

  return (
    <form onSubmit={onFormSubmit}>
      <div>
          <input type='text' placeholder='Full Name' value={form.fullName} name='fullName' onChange={onInputChange}/>
      </div>
      <div>
          <input type='text' placeholder='Phone Number' value={form.phoneNumber} name='phoneNumber' onChange={onInputChange}/>
      </div>
      <div>
        <button>Add Contacts</button>
      </div>
    </form>
  )
}

export default index