import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import VideoCard from '../Components/VideoCard'
import {addVedio,  getAllVedios, getSingleCategory,updateCategory } from '../services/allAPI'



function View({addVedioResponse,deleteVideoCateoryResponse,setDeleteVideoViewResponse}) {


  const [allVedios, setAllVedios] = useState([])

  const [deleteResponse,setDeleteResponse]=useState("")

  useEffect(() => {

    getVedios()

  }, [addVedioResponse,deleteResponse,deleteVideoCateoryResponse])

  console.log(allVedios);



  const getVedios = async () => {
    try {
      const result = await getAllVedios()
      console.log(result.data);

      setAllVedios(result.data)


    } catch (err) {
      console.log(err);

    }
  }

  const dragOverView=(e)=>{

    e.preventDefault()

  }

  const dropCategoryVideo=async(e)=>{
    const {videoDetails,CategoryId}= JSON.parse(e.dataTransfer.getData("dataShare"))
    console.log(videoDetails,CategoryId);


    try {
      const {data}= await getSingleCategory(CategoryId)
      console.log(data);


      const updatedCategoryVideoList = data.allVedios.filter(item=>item.id!=videoDetails.id)
      console.log(updatedCategoryVideoList);

      const {id,categoryName}=data

      const  categoryResult = await updateCategory(id,{id,categoryName,allVedios:updatedCategoryVideoList})
      setDeleteVideoViewResponse(categoryResult.data)
          await addVedio(videoDetails)
            getVedios()

            
        } catch (err) {
      console.log(err);
      
    }
    
  }


  return (
    <>

      

          <Row droppable={true} onDrop={e=>dropCategoryVideo(e)} onDragOver={(e)=>dragOverView(e)} className='border border-3 p-3'>
            {
                      allVedios.length > 0 ?

              allVedios?.map(vedio =>(
                <Col key={vedio?.id} lg={4} md={6} sm={12}>
                  <VideoCard  displayData={vedio} setDeleteResponse={setDeleteResponse}/>
                </Col>
              ))
            :
            <div className='text-danger fs-3 fw-solid'>Nothing To Display</div>
            }
          </Row>
          
      


    </>
  )
}

export default View