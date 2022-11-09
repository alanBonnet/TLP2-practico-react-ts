import { useState } from 'react'
import './App.css'
import { AuthContext } from './context/AuthContext';
import { AppRouter } from './routers/AppRouter';

function App() {
    const [user,setUser] = useState({
        isLogged:false,
        username:"Ejemplo"
    })
    
    return (
        <AuthContext.Provider value={{
            user,
            setUser
        }}>
            <AppRouter/>
        </AuthContext.Provider>
    )
}

export default App
