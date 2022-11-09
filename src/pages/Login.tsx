import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContext';

interface Props {
    
}
const headers = {
    'Content-Type': 'application/json'
}

export const Login = (props: Props) => {
    const {setUser} = useContext(AuthContext)
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const HandleSubmit = (e:any) => {
        e.preventDefault();
        console.log("logeando");
        (async () => {
            try {
                // setLoading(true)
                const resp = await fetch('http://localhost:3000/login', {
                    headers,
                    method: 'POST',
                    body: JSON.stringify({ username, password })
                })
                if (!resp.ok) {
                    const errorcito = await resp.json();
                    console.log(errorcito)
                    // setError(errorcito.message)
                    // setLoading(false)
                    setTimeout(() => {
                        // setError("")
                    }, 2000)
                    return false
                }
                setTimeout(() => {
                    // setError("")
                    // setLoading(false)
                }, 3000)
                const data = await resp?.json();
                setUser({
                    isLogged:true,
                    username,
                    token:data.token
                })
                // localStorage.setItem('login', data.token)
                // setIsLogged(true)
                // console.log(localStorage.getItem('login'))
                
            } catch (error) {
                return ('no se pudo conectar con el servidor');
            }
        })()
    }
    return (
        <form className='bg-light rounded p-4 border border-4 w-50 mx-auto my-5'
            onSubmit={HandleSubmit}
            
            >
            <h2 className='mb-3 text-center'>Iniciar Sesión</h2>
            <hr />
            <div className='mb-3'>
                <label htmlFor='username' className='form-label'>Username</label>
                <input type='text' onChange={(e)=>{setUsername(e.target.value)}} className='form-control' id='username' aria-describedby='emailHelp'/>
                    {/* <div id='emailHelp' className='form-text'>No compartiremos tu email con otros.</div> */}
            </div>
            <div className='mb-3'>
                <label htmlFor='exampleInputPassword1' className='form-label'>Password</label>
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


