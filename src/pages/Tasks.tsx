import React, { useContext, useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext'
import { TaskContext } from '../context/TaskContext'

interface Props {

}
//helper
import CtrlTask from '../helpers/task.controller';

const headers = {
    'Content-Type': 'application/json'
}

export const Tasks = (props: Props) => {
    const { tasks, setTasks } = useContext(TaskContext)
    const { user } = useContext(AuthContext)
    const [error, setError] = useState("");
 

    //Traer tareas
    const getTaskPrint = () =>{
        (async() =>{
            try {
                const getTaskArray = await CtrlTask.getTasks(user);
                setTasks(getTaskArray.Tasks)
            } catch (error) {
                setError("error con traer tareas")
                setTimeout(() => {
                    setError("")
                }, 3000)
            }
        })()
    }
    //crear tarea
    const [titleTask,setTitleTask] = useState("")
    const [descriptionTask,setDescriptionTask] = useState("")
    const [dateTask,setDateTask] = useState("")
    const [timeTask,setTimeTask] = useState("")
    const [statusTask,setStatusTask] = useState(1)
    const task = {
        title:titleTask,
        description:descriptionTask,
        date:`${dateTask}T${timeTask}:00Z`,
        status:statusTask
    }
    const HandleSubmit = (e:any) => {
        e.preventDefault();
        console.log("creandotarea");
        (async () => {
            try {
                const fetching = await CtrlTask.postTasks(user,task)
                if(!fetching.ok){
                    return "No se pudo crear la tarea"
                }
                console.log(fetching)
                return "asd"
            } catch (error) {
                return ('no se pudo conectar con el servidor');
            }
        })()
    }
    return (
        <>
            <div className='container my-5 bg-light bg-opacity-25 p-5 rounded'>
                
                <div className="bg-light bg-opacity-50 rounded py-2 mb-3 row">
                {/* <!-- Button trigger modal --> */}
                    <button 
                        className="btn btn-primary border border-dark border-2 mx-auto mb-2 col offset-1"
                        onClick={getTaskPrint}
                        >
                            TraerTareas
                        </button>
                    <button type="button" className="btn btn-success mx-auto mb-2 border border-dark border-2 col offset-1" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <i className="bi bi-plus-circle fw-bold fs-4"></i>
                    </button>
                </div>
                <div className="row">
                    {error}
                    {tasks && tasks.map((task:any,index:any)=>{
                        return(
                            <div className="col-12 col-md-6 col-lg-4 my-2" id={task._id} key={index}>
                                <div className="card p-2">
                                <img src={`https://picsum.photos/200/10${index}`} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">{task.title}</h5>
                                    <p className="card-text"> {task.description} </p>
                                    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                                </div>
                                </div>
                            </div>)
                        })
                    }
                </div>
            </div>


                {/* <!-- Modal --> */}
                <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <form action="" 
                            onSubmit={HandleSubmit}
                            >
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="exampleModalLabel">Crear Tarea</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <div className="mb-3">
                                        <label htmlFor="titleTask" className="form-label">Titulo </label>
                                        <input type="text" className="form-control" id="titleTask" onChange={(e)=>{setTitleTask(e.target.value)}} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="descriptionTask" className="form-label">Descripción</label>
                                        <textarea className="form-control" id="descriptionTask" onChange={(e)=>{setDescriptionTask(e.target.value)}}/>
                                    </div>
                                    <div className="mb-3 input-group">
                                        <label className="input-group-text border border-3 " htmlFor="dateTask">Fecha y Hora</label>
                                        <input type="date" className="form-control p-2 border border-3  text-center" id="dateTask"onChange={(e)=>{setDateTask(e.target.value)}} />
                                        <input type="time" className="form-control p-2 border border-3  text-center" id="dateTask"onChange={(e)=>{setTimeTask(e.target.value)}} />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label" htmlFor="statusTask">Estado</label>
                                        <select name="" id="statusTask" className="form-select" onChange={(e)=>{setStatusTask(parseInt(e.target.value))}}>
                                            <option value="1">Pendiente</option>
                                            <option value="2">En Proceso</option>
                                            <option value="3">Completado</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="submit" className="btn btn-primary">Save changes</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
        </>
    )
}
