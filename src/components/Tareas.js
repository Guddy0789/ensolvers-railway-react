import React from 'react'
import { AiFillDelete,AiFillEdit } from 'react-icons/ai';
import { BsFillArchiveFill } from "react-icons/bs";

export const Tareas = ({tarea, completada}) => {
  return (
    <>
    {/* Lista de tareas */}

<hr></hr>
        <div className='row mt-2 '>
        
                <div className={`${completada ? 'text-decoration-line-through' : 'text-decoration-line-through'} col-md-9 pt-3`}>
                  {tarea}
                </div>
                <div class="col-md-1 d-grid gap-2  ">
                  <button type="submit" class="btn btn-danger">< AiFillDelete size='1em' /></button>
                </div>
                <div class="col-md-1 d-grid gap-2  ">
                  <button type="submit" class="btn btn-danger"><  AiFillEdit size='1em' /></button>
                </div>
                <div class="col-md-1 d-grid gap-2  ">
                  <button type="submit" class="btn btn-danger">< BsFillArchiveFill size='1em' /></button>
                </div>
          
        </div>
        </>  )
}
