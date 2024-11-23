import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addCategory, deleteCategory, deleteVedio, getAllCategory, getSingleVedio, updateCategory } from '../services/allAPI';
import VideoCard from './VideoCard';






function Category({setDeleteVideoCateoryResponse,deleteVideoViewResponse}) {

  const [show, setShow] = useState(false);
  const [categoryName,setCategoryName]=useState("")
  console.log(categoryName);
  
  const [allCategory,setAllCategory]=useState([])
  console.log(allCategory);

  

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  useEffect(() => {
    getCategory()
  }, [deleteVideoViewResponse])
  

    const handleAddCategory=async()=>{

      if (categoryName) {

        // api call

        try {
          await addCategory({categoryName,allVedios:[]})
          handleClose()
          getCategory()
          setCategoryName("") // Clear the input field after adding the category

          
        } catch (error) {
          console.log(error);
          
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


    const delCategory=async(categoryId)=>{

      try {
        await deleteCategory(categoryId)
        getCategory()
        
      } catch (err) {
        console.log(err);
        
      }

    }

        const vedioDropped=async(e,categoryId)=>{
              console.log(`vedio dropped in category with id ${categoryId}`);
              const vedioId=e.dataTransfer.getData(`vedioId`)
              console.log(`dragged vedio with id ${vedioId} and dropped in category id ${categoryId} `);

              try {

                const {data}= await getSingleVedio(vedioId)
                console.log(data);

                const selectedCategory = allCategory.find(item=>item.id==categoryId)
                selectedCategory.allVedios.push(data)
                console.log(selectedCategory);
                


                await updateCategory(categoryId,selectedCategory)
                getCategory()
                
                const result = await deleteVedio(vedioId)
                setDeleteVideoCateoryResponse(result.data)

                
              } catch (err) {
                console.log(err);
                
              }
              

              
        }


        const dragOverCategory=(e)=>{
          e.preventDefault()
        }

        const dragStarted=(e,videoDetails,CategoryId)=>{

                    console.log(videoDetails);
                    

                console.log(`Dragging Started At category with video : ${videoDetails} and category Id : ${CategoryId}`);
                const dataShare = {videoDetails,CategoryId}
                e.dataTransfer.setData("dataShare",JSON.stringify(dataShare))
        }



  return (
    <>
      <div className="d-flex justify-content-around"></div>
      <button onClick={handleShow} className="btn btn-warning fs-5 rounded-circle ms-3 fw-bolder">+</button>
      <span className="text-info" style={{ fontSize: '30px', fontWeight: '600' }}>All Categories</span>


      <div className="container-fluid mt-3">

      {
        allCategory.length>0?

          allCategory?.map(category=>(
        <div droppable={true} onDragOver={(e)=>dragOverCategory(e)} onDrop={(e)=>vedioDropped(e,category.id)} className="border border-3 border-light rounded p-3 mb-3">
          <div className="d-flex justify-content-between">
            <h6>{category.categoryName}</h6>
            <button onClick={()=>delCategory(category?.id)} style={{backgroundColor:'black',border:'none'}}><i class="fa-solid fa-trash" style={{color: "#ff0000"}}></i></button>
          </div>

          <div className='row mt-3'>
            
            {
              category.allVedios?.length > 0 &&

              category.allVedios?.map(video=>(


                <div draggable={true} onDragStart={(e)=>dragStarted(e,video,category.id)} className='col-lg-6'>

                  <VideoCard displayData={video}  insideCategory={true}/>

            </div>
              ))
              
            
            }

          </div>
        </div>
   
          ))

          
        
      :
      <div className='text-danger fw-bold fs-3'>Category Not Added Yet</div>
      }

       </div>

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



      <ToastContainer position="top-right" autoClose={5000} theme="colored" />

    </>
  )
}

export default Category