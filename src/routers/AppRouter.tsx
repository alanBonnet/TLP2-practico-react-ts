import React,{FC} from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { TodosScreen } from '../pages/TodosScreen'
import { DashboardRoutes } from './DashboardRoutes'
import { PrivateRoutes } from './PrivateRoutes'
import { PublicRoutes } from './PublicRoutes'
interface Props {

}

export const AppRouter:FC<Props> = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/*" element={
                    
                    <PublicRoutes>
                        <DashboardRoutes/>
                    </PublicRoutes>
                    
                    
                }/>
                <Route path="/user" element={
                    <PrivateRoutes>
                        <TodosScreen/>
                    </PrivateRoutes>
                
                }/>

            </Routes>
        </BrowserRouter>
    )
}
