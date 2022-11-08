import { FC, useContext } from "react"
import { Navigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"
interface Props {
    children:any
}

export const PublicRoutes:FC<Props> = ({children}) => {
    const { user } = useContext(AuthContext)
    if(user.logged){
        console.log("está logeado")
    }else{
        console.log("no está log")
    }

    return user.isLogged
        ? <Navigate to='/home' />
        : children
}
