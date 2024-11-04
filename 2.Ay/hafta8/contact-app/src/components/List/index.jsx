import React, { useState } from 'react'

function index({contacts}) {
  const[filterText,setFilterText] = useState('')

  const filtered = contacts.filter((contact)=>{
    return Object.keys(contact).some((key) =>
        contact[key].toString().toLowerCase().includes(filterText.toLowerCase())
    )
  })
  return (
    <div className='contact-list'>
        <div className='filter'>
            <input type='text' placeholder='Search Contact' value={filterText} onChange={(e)=>setFilterText(e.target.value)} />
        </div>
        <ul className='list'>
        {
            filtered.map((contact,key)=>(
                <div key={key}>
                        <li>
                            <span>{contact.fullName}</span>
                            <span>{contact.phoneNumber}</span>
                        </li>
                        <hr/>
                </div>
            ))
        }
        </ul>
        <div className='contact-count'>
            <p>
                Contact Count: {filtered.length > 0 ? filtered.length : "Not Found"}
            </p>
        </div>
    </div>
  )
}

export default index