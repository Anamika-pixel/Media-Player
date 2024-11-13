import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import VideoCard from '../Components/VideoCard'
import { getAllVedios } from '../services/allAPI'



function View({addVedioResponse}) {


  const [allVedios, setAllVedios] = useState([])

  const [deleteResponse,setDeleteResponse]=useState("")

  useEffect(() => {

    getVedios()

  }, [addVedioResponse,deleteResponse])

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


  return (
    <>

      

          <Row className='border border-3 p-3'>
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