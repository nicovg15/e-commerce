import React, { useState } from 'react'
import '../css/Consults.css'


function Consults() {
    const [consult, setConsult] = useState([])

    const handleOnChange = (event) => {
        const value = event.target.value;
        setConsult({
          ...consult,
          [event.target.name]: value,
        });
      };

    const handleOnSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <form onSubmit={handleOnSubmit} className="consults-form">
            <label htmlFor="name">Name</label><br/>
            <input 
                type="text" 
                placeholder="John" 
                name="name" 
                value={consult.name}
                onChange={handleOnChange}
            /><br/>
                    
            <label htmlFor="lastname">Last name</label><br/>
            <input 
                type="text" 
                placeholder="Doe" 
                name="lastname" 
                value={consult.lastname}
                onChange={handleOnChange}
            /><br/>
                    
            <label htmlFor="email">E-mail</label><br/>
            <input 
                type="email" 
                placeholder="abc@abc.com" 
                name="email" 
                value={consult.email}
                onChange={handleOnChange}
            /><br/>

            <textarea 
                rows={10} 
                placeholder="Write your consult here.." 
                name="textconsult" 
                value={consult.textconsult}
                onChange={handleOnChange}
            >
            </textarea><br/>

            <button type="submit">Send</button>                  
        </form>

    )
}

export default Consults
