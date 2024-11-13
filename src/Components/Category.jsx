import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addCategory, getAllCategory } from '../services/allAPI';



function Category() {

  const [show, setShow] = useState(false);
  const [categoryName,setCategoryName]=useState("")
  console.log(categoryName);
  
  const [allCategory,setAllCategory]=useState([])
  console.log(allCategory);

  

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  useEffect(() => {
    getCategory()
  }, [])
  

    const handleAddCategory=async()=>{

      if (categoryName) {

        // api call

        try {
          await addCategory({categoryName,allVedios:[]})
          handleClose()
          getCategory()
          
        } catch (error) {
          
        }
        
      }
       else {
        toast.warning("Fill The Category Name")
      }
    }

    const getCategory=async()=>{

      try {
        const result = await getAllCategory()
        setAllCategory(result.data)
        
      } catch (err) {
        console.log(err);
        
      }
    }

  return (
    <>
      <div className="d-flex justify-content-around"></div>
      <button onClick={handleShow} className="btn btn-warning fs-5 rounded-circle ms-3 fw-bolder">+</button>
      <span className="text-info" style={{ fontSize: '30px', fontWeight: '600' }}>All Categories</span>

      {
        allCategory.length>0?

          allCategory?.map(category=>(
            <div className="container-fluid mt-3">
        <div className="border border-3 border-light rounded p-3 mb-3">
          <div className="d-flex justify-content-between">
            <h6>{category.categoryName}</h6>
            <button style={{backgroundColor:'black',border:'none'}}><i class="fa-solid fa-trash" style={{color: "#ff0000"}}></i></button>
          </div>
        </div>
      </div>
          ))
        
      :
      <div className='text-danger fw-bold fs-3'>Category Not Added Yet</div>
      }



      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='text-warning'>Category Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="p-3 border border-3 border-info rounded">
            <FloatingLabel controlId="categoryName" label="category">
              <Form.Control onChange={(e)=>setCategoryName(e.target.value)} type="text" placeholder="Category" />
            </FloatingLabel>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="info" onClick={handleAddCategory}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>



      <ToastContainer position="top-right" autoClose={5000} theme="light" />

    </>
  )
}

export default Category