import React,{FC} from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { DashboardRoutes } from './DashboardRoutes'
import { DashPrivate } from './DashPrivate'
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
                <Route path="/user/*" element={
                    <PrivateRoutes>
                        <DashPrivate/>
                    </PrivateRoutes>
                
                }/>

            </Routes>
        </BrowserRouter>
    )
}
