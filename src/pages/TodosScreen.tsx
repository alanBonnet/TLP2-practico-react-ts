import React from 'react'
import { Navbar } from '../ui/Navbar'

interface Props {

}

export const TodosScreen = (props: Props) => {
    return (
        <>
            <Navbar/>
            <h1 className="text-white bg-dark m-5">Logeado</h1>
        </>
    )
}
