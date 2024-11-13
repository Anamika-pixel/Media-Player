import React from 'react'
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { deleteVedio, saveHistory } from '../services/allAPI';




function VideoCard({displayData,setDeleteResponse}) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async() => {
    
    const {caption,youtubeUrl}=displayData
    const localTime = new Date()
    console.log(localTime);
    const formatedDate = localTime.toLocaleString()
    const vedioHistory ={caption,youtubeUrl,formatedDate}
    
    try {
      await saveHistory(vedioHistory)
    } catch (err) {

      console.log(err);
      
      
    }
    
    setShow(true)
  
  
  };

  const handleRemoveVedio=async(vedioId)=>{
    try {
      const result = await deleteVedio(vedioId)
      console.log(result);
      setDeleteResponse(result.data)

      
      
    } catch (err) {
      console.log(err);
      
      
    }
  }



  return (
    <>
      <Card>
        <Card.Img onClick={handleShow} style={{height:'200px'}} variant="top" src={displayData?.imageUrl} />
        <Card.Body className='d-flex align-items-center justify-content-center'>
          
              <h5>{displayData?.caption}</h5>
              <button onClick={()=>handleRemoveVedio(displayData?.id)} className='btn'><i class="fa-solid fa-trash" style={{color: "#ff0000" , fontSize:'20px'}}></i></button>

        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>{displayData?.caption} </Modal.Title>
        </Modal.Header>
        <Modal.Body>


        <iframe width="100%" height="514" src={`${displayData?.youtubeUrl}?autoplay=1`} title="Armadham | Aavesham | Jithu Madhavan |Fahadh Faasil | Sushin Shyam | Vinayak| Nazriya| Anwar Rasheed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


        </Modal.Body>
        
      </Modal>


    </>
  )
}

export default VideoCard