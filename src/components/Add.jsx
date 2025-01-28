import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addRecipeApi } from '../services/allApis';

function Add({val}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [recipes,setRecipes]=useState({
        name:"",incredients:"",image:""
    })

    const handleSubmit= async()=>{
        console.log(recipes)
        const {name,incredients,image}=recipes
        if(!name || !incredients || !image){
            alert("Enter valid inputs!!!!")
        }
        else{
            const result=await addRecipeApi(recipes)
            console.log(result)
            if(result.status===201){
              alert("Recipe details added!!!!")
              handleClose()
              setRecipes({name:"",incredients:"",image:""})
              val(result)
            }
            else{
              alert("Adding failed something went wrong!!!!")
            }
        }
        
        
    }

  return (
    <>
        <div className="d-flex justify-content-end">
            <button className="btn btn-outline-dark" onClick={handleShow}>Add New Recipes</button>
        </div>

        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton style={{backgroundColor:"rgba(255, 117, 0, 0.8)"}}>
          <Modal.Title className='text-dark'>New Recipe details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div>
                <input type="text" placeholder="Enter Recipe Name" onChange={(e)=>{setRecipes({...recipes,name:e.target.value})}} className="form-control mb-3" />

                <input type="text" placeholder="Enter Incredients" onChange={(e)=>{setRecipes({...recipes,incredients:e.target.value})}} className="form-control mb-3" />

                <input type="text" placeholder="Enter Recipe Image URL" onChange={(e)=>{setRecipes({...recipes,image:e.target.value})}} className="form-control mb-3" />

            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} className='btn btn-danger'>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>

    </>
  )
}

export default Add