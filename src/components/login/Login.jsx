import React, {useState} from 'react'
import '../../css/login/Login.css'
import { useHistory } from "react-router-dom";
import { auth } from '../firebase/firebase'

function Login(){
    const history = useHistory()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)

    const handleOnSubmit = e => {
        e.preventDefault()
        auth.signInWithEmailAndPassword(email,password)
        .then(() => {
            if(auth){
                history.push('/')
            }           
        })
        .catch(error => setError(error.message))
    }  

    const handleOnRegister = () => {
        auth.createUserWithEmailAndPassword(email, password)
        .then(() => {
            if(auth){
                history.push('/')
            }
        })
        .catch(error => setError(error.message))
    }

    return(
        <div className="login-container">
            <h2>Welcome to <img src='http://acsonsonido.com/wp-content/uploads/2020/08/LOGO-ACSON-BLANCO.png' alt="logo"/></h2>
            <form onSubmit={handleOnSubmit} className="login-form">
                <label htmlFor="email">E-mail</label>
                <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} required/>
                <span className="login-error">{error ? error : ""}</span>
                <label htmlFor="password">Contraseña</label>
                <input type="password" id="password" value={password} onChange={e => setPassword(e.target.value)} required/>
                <span className="login-error">{error ? error : ""}</span>                
                <button onClick={handleOnSubmit} type="submit" className="login-btn-ing">INGRESAR</button>
                
                <p>Al continuar, aceptas las Condiciones de uso y el Aviso de privacidad de Acson.</p>
                <button onClick={handleOnRegister} type="submit" className="login-btn-reg">REGISTRARSE</button>
            </form>
        </div>
    )
}

export default Login