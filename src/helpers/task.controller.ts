import { AuthContext } from '../context/AuthContext';
import { useContext } from 'react';

const  CtrlTask = {
    getTasks:async (user:any) =>{
        try {

            let myHeaders = new Headers();
            // console.log(JSON.stringify(user) + "NOPUEDE")
            const token = await user['token'] ?? "none"
            myHeaders.append("Authorization",token);
            let requestOptions:any= {
                method: 'GET',
                headers: myHeaders,
                redirect: 'follow'
            };
            const response = await fetch("http://localhost:3000/task/user",requestOptions);
            const resObject = await response.json();
            return resObject
        } catch (error) {
            return {
                message:"Hubo un error con traer las tareas, intente mas tarde",
                error
            }
        }
    },
    
    postTasks: async (user:any,task:any) =>{
        console.log(task)
        console.log(user)
        try {
            const {title, description, fecha, estado} = task
            const token = await user['token'] ?? "none"
            let myHeaders = new Headers();
            // console.log(JSON.stringify(user) + "NOPUEDE")
            myHeaders.append("Authorization",token);
            myHeaders.append("Content-Type", "application/json");
            const raw = JSON.stringify({
                title,
                description,
                fecha,
                estado
            });
            let requestOptions:any= {
                method: 'POST',
                headers: myHeaders,
                body: raw
            };
            const response = await fetch("http://localhost:3000/task",requestOptions);
            const resObject = await response.json();
            console.log(resObject)
            return resObject
        } catch (error) {
            return {
                message:"Hubo un error con traer las tareas, intente mas tarde",
                error,
                ok:false
            }
        }
    }
}

export default  CtrlTask;