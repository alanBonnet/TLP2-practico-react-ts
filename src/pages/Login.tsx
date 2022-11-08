import React from 'react'

interface Props {
    
}

export const Login = (props: Props) => {
    return (
        <form className='bg-light rounded p-4 border border-4 w-50 mx-auto my-5'>
            <h2 className='mb-3 text-center'>Iniciar Sesión</h2>
            <hr />
            <div className='mb-3'>
                <label htmlFor='exampleInputEmail1' className='form-label'>Email address</label>
                <input type='email' className='form-control' id='exampleInputEmail1' aria-describedby='emailHelp'/>
                    {/* <div id='emailHelp' className='form-text'>No compartiremos tu email con otros.</div> */}
            </div>
            <div className='mb-3'>
                <label htmlFor='exampleInputPassword1' className='form-label'>Password</label>
                <input type='password' className='form-control' id='exampleInputPassword1'/>
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


