// import { Button } from 'bootstrap'
import React from 'react'
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addVedio } from '../services/allAPI';


function Add({setAddVedioResponse}) {

  const [videoDetails, setVedioDetails] = useState({ caption: '', imageUrl: '', youtubeUrl: '' })

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [isInvalidUrl, setIsInvalidUrl] = useState(false)

  const getEmbedUrl = (link) => {

    if (link.includes('v=')) {

      let vedioId = link.split('v=')[1].slice(0, 11)
      setVedioDetails({ ...videoDetails, youtubeUrl: `https://www.youtube.com/embed/${vedioId}` })
      setIsInvalidUrl(false)

      console.log(vedioId);

    }
    else {

      setIsInvalidUrl(true)

    }
  }


  const handleUpload = async() => {

    const { caption, imageUrl, youtubeUrl } = videoDetails
    if (caption && imageUrl && youtubeUrl) {

        try {
          const result = await addVedio(videoDetails)
          setAddVedioResponse(result.data)
          console.log(result);
          if (result.status>=200 && result.status<300) {

            setVedioDetails({ caption: '', imageUrl: '', youtubeUrl: '' })
            toast.success(`${result.data.caption} added to your collection`)
            handleClose()
            
          }
          
        } catch (err) {
          console.log(err);
          
          
        }

    }
    else {
      toast.warning("Enter The Field Completely")
    }
  }

  console.log(videoDetails);


  return (
    <>
      <div className="d-flex align-items-center">
        <button onClick={handleShow} className="btn btn-warning fs-5 rounded-circle ms-3 fw-bolder">+</button>
        <h4 className="text-info">Add New Vedio</h4>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className='text-warning'>Vedio Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Please Fill Following Details.

            <div className='border border-3 border-info rounded p-3'>

              {/* Vedio Caption */}

              <FloatingLabel controlId="floatingInputcaption" label="Video caption" className="mb-3">
                <Form.Control onChange={e => setVedioDetails({ ...videoDetails, caption: e.target.value })} type="text" placeholder="Enter Vedio Caption" />
              </FloatingLabel>

              {/* image Url */}

              <FloatingLabel controlId="floatingInputImage" label="Image Url" className="mb-3">
                <Form.Control onChange={e => setVedioDetails({ ...videoDetails, imageUrl: e.target.value })} type="text" placeholder="Enter Image Url" />
              </FloatingLabel>

              {/* youtube Url */}

              <FloatingLabel controlId="floatingInputUrl" label="Youtube Url" className="mb-3">
                <Form.Control onChange={e => getEmbedUrl(e.target.value)} type="text" placeholder="Enter Youtube Url" />
              </FloatingLabel>

              {
                isInvalidUrl &&
                <p className='text-danger'>Invalid Url</p>
              }

            </div>


          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleUpload} variant="info">Upload</Button>
        </Modal.Footer>
      </Modal>




    </>
  )
}

export default Add