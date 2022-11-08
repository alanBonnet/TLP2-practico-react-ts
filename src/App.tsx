import { useState } from 'react'
import './App.css'
import { AuthContext } from './context/AuthContext';
import { AppRouter } from './routers/AppRouter';

function App() {
    const [user,setUser] = useState({
        isLogged:false,
        username:"Ejemplo"
    })
    const tasks = [
        {
            id: 1,
            title: "Completar prácticos",
            descripction: "Completar el práctico de useContext"
        }
    ];
    return (
        <AuthContext.Provider value={{
            user,
            setUser,
            tasks
        }}>
            <AppRouter/>
        </AuthContext.Provider>
    )
}

export default App
