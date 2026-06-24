import React, { useState } from 'react'

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); 

  function login(){


  }

  return (
    <>
     <h1>Porfavor logueate</h1>

      <label htmlFor=""> Email
        <input type="text"
         value={email}
         onClick={() => setEmail()}
         />
      </label> <br />

      <label htmlFor=""> Contraseña
        <input type="text" value={password} />
      </label>

      <button onClick={() => login()}></button>

    </>
  )
}

export default Login