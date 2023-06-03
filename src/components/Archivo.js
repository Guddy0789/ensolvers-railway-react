import React, { useEffect, useState } from 'react'
import axios from 'axios';
import DataTable from 'react-data-table-component';
import { AiFillEdit,AiFillDelete,AiOutlineUpload } from "react-icons/ai";

import Swal from 'sweetalert2'
export const Archivo = () => {
  const [data, setData] = useState(null);
  const [filterRecord,setFilterRecords] = useState([]);
  useEffect(() => {
    axios.get('/api/note/archive')
      .then(response => {
        console.log(response.data)
        setData(response.data);
        setFilterRecords(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  function handleFilter(event){
    const newData = filterRecord.filter(row=>{    return row.categories.toLowerCase().includes(event.target.value.toLowerCase())})
    setData(newData);
  }

  const handleEdit = (row) => {
    // Lógica para editar el elemento proporcionado
  };

  const handleArchive = (row) => {
    console.log(JSON.stringify(row))
     // Lógica para archivar el elemento proporcionado
        axios.put(`/api/note/up/${row.id}`) // Reemplaza `/api/items` con la ruta adecuada en tu backend
                    
        .then((response) => {
            // Manejar la respuesta exitosa del backend, si es necesario
            console.log(response.data);
        })
        .catch((error) => {
            // Manejar el error en caso de que ocurra
            console.error(error);
        });
        window.location.href = '/active';
  };

  const handleDelete = (row) => {
    // Lógica para eliminar el elemento proporcionado
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
            axios.delete(`/api/note/delete/${row.id}`) // Reemplaza `/api/items` con la ruta adecuada en tu backend
            .then((response) => {
                // Manejar la respuesta exitosa del backend, si es necesario
                console.log(response.data);
            })
            .catch((error) => {
                // Manejar el error en caso de que ocurra
                console.error(error);
            });
            Swal.fire({
                title: 'Deleted!',
                text: 'Your file has been deleted.',
                icon: 'success',
                timer: 5000, // Tiempo en milisegundos (3 segundos)
               
              });
             window.location.href = '/archive';
           
        }
      })
                  
       
  };



  const columns = [
    {
        name: 'Title',
        selector: row => row.title,
       
    },
    {
        name: 'Content',
        selector: row => row.content,
    },
    {
      name: 'Categories',
      selector: row => row.categories,
  },
  {
    name: 'Acciones',
    cell: (row) => (
        <div className="d-flex gap-1">
        
        <button  onClick={() => handleArchive(row)} type="button" class="btn btn-secondary"><AiOutlineUpload size="1em"/></button>
        
        <button  onClick={() => handleEdit(row)} type="button" class="btn btn-success"><AiFillEdit size="1em"/></button>
        <button  onClick={() => handleDelete(row)} type="button" class="btn btn-danger"><AiFillDelete size="1em"/></button>
        
      </div>
    ),
    width: '200px',
    button: true,
  },
];
  return (
    <>
  
      <hr></hr>
      <div className='row mt-2 '>
          <div className="col-md-6 ">
              <h3 className='text-start text-primary'>Archive Notes</h3>
          </div>
          <div className="col-md-6">
          <div className='text-end'>
            <input type="text" placeholder='Search by category' onChange={handleFilter}></input>
          </div>
        </div>
        </div>
          
          
          {data !== null && data.length > 0 ? (
              <DataTable
              columns={columns}
              data={data}
              pagination
              />
          ) : (
            <h5 className='text-start text-secondary'>No archive notes</h5>
          )}
       
          
        
        </>  )
}
