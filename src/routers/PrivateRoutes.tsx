import React, { FC, useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

interface Props {
    children:any;
}

export const PrivateRoutes:FC<Props> = ({children}) => {
    const { user } = useContext(AuthContext)
    return user.isLogged
            ? children
            : <Navigate to="/login"/>
}
