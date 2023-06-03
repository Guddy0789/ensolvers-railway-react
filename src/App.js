
import './App.css';

import { Tareas } from './components/Tareas';
import { Formulario } from './components/Formulario';
import { Archivo } from './components/Archivo';
import { Active } from './components/Active';
import { useState } from 'react';
import { AiOutlinePlusSquare } from "react-icons/ai";
import { BsArchive } from "react-icons/bs";
import {Routes,Route,Link} from "react-router-dom"


function App({}) {
   const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="App">
     <div className='container'>
     <div className='row'>
          <div className='col-md'>
             <p className='text-primary h3 '> My Notes</p>
             <hr></hr>
          </div>
     </div>
     <div class="row justify-content-end">
        <div class="col-auto">
        <Link to={`/archive`}><button type="button" class="btn btn-secondary"><BsArchive size="1em"/>  Archive</button></Link>
        </div>
        <div class="col-auto">
        <Link to={`/active`}><button type="button" class="btn btn-success"><BsArchive size="1em"/>  Active</button></Link>
        </div>
        <div class="col-auto">
          <button type="button" class="btn btn-primary" onClick={() => {setModalOpen(true);}}><AiOutlinePlusSquare size="1.1em"/>  Add Note</button>
        </div>
        {modalOpen && <Formulario setModalOpen={setModalOpen} />}
    </div>
            <Routes>
              <Route path='/' element={<Tareas tarea="Guddytest"/>} />
              <Route path='/archive' element={<Archivo/>} />
              <Route path='/active' element={<Active/>} />
              <Route path='*' element={<h1>Postulante: Armando Zeballos Duran</h1>} />
            </Routes>
      
      </div>
    </div>
  );
}

export default App;
