import React, { useState } from 'react'
import '../components/styles/formulario.css';
import axios from 'axios';
import { AiFillTag } from "react-icons/ai";

export const Formulario = ({setModalOpen, rowData}) => {
  const [data, setData] = useState(null);
  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = async (event) => {
   
    event.preventDefault();
  // Prepare the data object to send in the request
  const data = {
    title: title,
    content: content,
    category: category,
  };
  console.log("ON SUBMIITTT"+JSON.stringify(data))
  try {
    // Send the POST request using Axios
    const response = await axios.post('/api/note/add', data);
    console.log(response.data); // Handle the response as needed
    // Reset the form fields
    setTitle('');
    setContent('');
    setCategory('');
    // Close the modal or perform any necessary action
    setModalOpen(false);
    // window.location.reload();
    window.location.href = '/active';
  } catch (error) {
    console.error(error);
    // Handle any errors that occurred during the request
  }
   
  };

  const handleUpdate = async (event) => {
    const updatedTitle = rowData.title === title ? rowData.title : title;

    event.preventDefault();
  // Prepare the data object to send in the request
  const data = {
    id:rowData.id,
    title: title === '' ? rowData.title : title,
    content: content=== '' ? rowData.content : content,
    category: category=== '' ? rowData.categories : category,
  };
  console.log("ON EDUTTT"+JSON.stringify(rowData.id))
  try {
    // Send the POST request using Axios
    
    const response = await axios.post('/api/note/edit/', data);
    console.log(response.data); // Handle the response as needed
    // Reset the form fields
    setTitle('');
    setContent('');
    setCategory('');
    // Close the modal or perform any necessary action
    setModalOpen(false);
    // window.location.reload();
    window.location.href = '/active';
  } catch (error) {
    console.error(error);
    // Handle any errors that occurred during the request
  }
   
  };
//   tag
// tag
  return (
   
    <div>
         <div className='row justify-content-center '>
          <div className='col-md modalContainer'>
          <div class="row justify-content-center fs-2 text-primary">Note Form</div>
          <hr></hr>
          {/* <form onSubmit={handleSubmit}> */}
          <form onSubmit={rowData ? handleUpdate : handleSubmit}>
          <input type="text" hidden className="form-control" id="title" value={rowData ? rowData.id : ''} onChange={(e) => setTitle(e.target.value)} />
          <div className="row mb-3">
              <label htmlFor="title" className="col-sm-2 col-form-label text-primary">Title</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" id="title" defaultValue={rowData ? rowData.title : title} onChange={(e) => setTitle(e.target.value)} />
              </div>
            </div>
            <div className="row mb-3">
              <label htmlFor="content" className="col-sm-2 col-form-label text-primary">Content</label>
              <div className="col-sm-10">
                <textarea className="form-control" id="content" defaultValue={rowData ? rowData.content : content} onChange={(e) => setContent(e.target.value)}></textarea>
              </div>
            </div>
            <div className="row mb-3">
              <label htmlFor="category" className="col-sm-2 col-form-label text-primary">Category</label>
              <div className="col-sm-10">
                <textarea className="form-control" id="category"  defaultValue={rowData ? rowData.categories : category} onChange={(e) => setCategory(e.target.value)}></textarea>
                
              </div>
            </div>

  

  {/* tagg */}
  
  {/* tag */}

  <div class="row mb-3 justify-content-center">
    <div class="col-auto">
      <button type="button" class="btn btn-secondary" onClick={()=>{setModalOpen(false)}}>Cancel</button>
    </div>
    <div class="col-auto">
        <button type="submit" class="btn btn-primary">{rowData ? 'Edit Note' : 'Create Note'}</button>
    </div>
  </div>
</form>
        </div>
        </div>
    </div>
  )
}
