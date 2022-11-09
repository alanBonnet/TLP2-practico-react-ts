import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { TaskContext } from '../context/TaskContext'
import { Home } from '../pages/Home'
import { Tasks } from '../pages/Tasks'
import { Navbar } from '../ui/Navbar'

interface Props {
    
}

export const DashPrivate = (props: Props) => {
    const [tasks,setTasks] = useState("");
    return (
        <>
            <Navbar/>
            <Routes>
                <Route path="tasks" element={
                    <TaskContext.Provider value={{tasks,setTasks}}>
                        <Tasks/>
                    </TaskContext.Provider>
                }/>
                <Route index element={<Home/>}/>
            </Routes>
        </>
    )
}
