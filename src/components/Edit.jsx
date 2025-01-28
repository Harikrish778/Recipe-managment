import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { UpdateRecipeApi } from '../services/allApis';

function Edit({recipe,edit}) {
    const [show, setShow] = useState(false);
    const [data,setData]=useState({
      name:recipe.name,incredients:recipe.incredients,image:recipe.image
    })

    const updateRecipe=async()=>{
      const {name,incredients,image}=data
      if(!name || !incredients || !image){
        alert("Enter valid inputs!!!")
      }
      else{
        const result=await UpdateRecipeApi(recipe.id,data)
        console.log(result)
        if(result.status==200){
          alert("Recipe Details Updated!!!")
          handleClose()
          edit(result)
        }
        else{
          alert("Something Went Wrong!!!")
        }
      }
    }
    
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
  return (
    <>
      <button className='btn btn-warning me-4' onClick={handleShow}>Edit</button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton style={{backgroundColor:"rgba(255, 117, 0, 0.8)"}}>
          <Modal.Title className='text-dark'>Edit Recipe details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div>
                <input type="text" defaultValue={recipe?.name} onChange={(e)=>{setData({...data,name:e.target.value})}} placeholder="Enter Recipe Name" className="form-control mb-3" />

                <input type="text" defaultValue={recipe?.incredients} onChange={(e)=>{setData({...data,incredients:e.target.value})}} placeholder="Enter Incredients" className="form-control mb-3" />

                <input type="text" defaultValue={recipe?.image} onChange={(e)=>{setData({...data,image:e.target.value})}} placeholder="Enter Recipe Image URL" className="form-control mb-3" />

            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} className='btn btn-danger'>
            Close
          </Button>
          <Button variant="primary" onClick={updateRecipe}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>

    </>
  )
}

export default Edit