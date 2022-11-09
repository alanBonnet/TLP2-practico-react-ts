import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContext';

interface Props {
    
}
const headers = {
    'Content-Type': 'application/json'
}

export const Register = (props: Props) => {
    const {setUser} = useContext(AuthContext)
    const [username,setUsername] = useState("");
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("");
    const HandleSubmit = (e:any) => {
        e.preventDefault();
        console.log("logeando");
        (async () => {
            try {
                // setLoading(true)
                var raw = JSON.stringify({
                    username,
                    email,
                    password
                });

                var requestOptions:any = {
                method: 'POST',
                headers: headers,
                body: raw
                };
                const resp = await fetch('http://localhost:3000/login', requestOptions)
                if (!resp.ok) {
                    const errorcito = await resp.json();
                    console.log(errorcito)
                    return "No se pudo Registrar al usuario"
                }
                return "Usuario Registrado exitosamente"
            } catch (error) {
                return ('no se pudo conectar con el servidor');
            }
        })()
    }
    return (
        <form 
            className='bg-light rounded p-4 border border-4 w-50 mx-auto my-5'
            onSubmit={HandleSubmit}
        >
            <h2 className='mb-3 text-center'>Registrarse</h2>
            <hr />
            <div className='mb-3'>
                <label htmlFor='exampleInputEmail1'  className='form-label'>Email address</label>
                <input type='email' className='form-control' onChange={(e)=>{setEmail(e.target.value)}} id='exampleInputEmail1' aria-describedby='emailHelp'/>
            </div>
            <div className="mb-3">
                <label htmlFor='exampleInputEmail1'  className='form-label'>Username</label>
                <input type='text' className='form-control' onChange={(e)=>{setUser(e.target.value)}} id='exampleInputUsername' aria-describedby='usernameHelp'/>
                {/* <div id='usernameHelp' className='form-text'>No se compartirá tu email con nadie</div> */}
            </div>
            <div className='mb-3'>
                <label htmlFor='exampleInputPassword1'  className='form-label'>Password</label>
                <input type='password' onChange={(e)=>{setPassword(e.target.value)}} className='form-control' id='exampleInputPassword1'/>
            </div>
            <div className='mb-3 form-check'>
                <input type='checkbox' className='form-check-input' id='exampleCheck1'/>
                    <label className='form-check-label' htmlFor='exampleCheck1'>Check me out</label>
            </div>
            <div className="d-grid">
                <button type='submit' className='btn btn-primary'>Enviar</button>
            </div>
        </form>
    )
}
