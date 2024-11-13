import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteHistory, getAllHistory } from '../services/allAPI';





function History() {

      const[vedioHistory,setVedioHistory]=useState([])
      console.log(vedioHistory);
      
        useEffect(() => {
          getHistory()
        }, [])

        const getHistory=async()=>{
          try {
            const result = await getAllHistory()
            // console.log(result);
            setVedioHistory(result.data)
            


          } catch (err) {
            console.log(err);
            
          }
        }

        const delHistory=async(vedioId)=>{
              try {
                await deleteHistory(vedioId)
                getHistory()
              } catch (err) {
                console.log(err);
                
              }
        }
        


  return (
    <>
    <div className='container my-5'>
      <div className="d-flex justify-content-between">
        <h1 className='text-info'>Watch History</h1>
            <Link to={"/home"} style={{textDecoration:'none' , fontSize:'30px'}} className='text-warning'>Back To <i className="fa-solid fa-house"></i></Link>
      </div>

      <table className='table mt-5'>

        <thead>
          <tr>
            <th>#</th>
            <th>Caption</th>
            <th>Link</th>
            <th>Date</th>
            <th><i class="fa-solid fa-ellipsis" style={{color: '#ff0000;'}}></i></th>
          </tr>
        </thead>
        <tbody>
         
          {
            vedioHistory.length>0?

            vedioHistory?.map((item,index)=>(

              <tr key={item?.id}>
              <td>{index+1}</td>
              <td>{item?.caption}</td>
              <td>  <a href={item?.youtubeUrl} target='_blank'>{item?.youtubeUrl}</a></td>
              <td>{item?.formatedDate}</td>
              <td><button onClick={()=>delHistory(item?.id)}   style={{backgroundColor:'black',border:'none'}}><i class="fa-solid fa-trash" style={{color: "#ff0000"}}></i></button></td>
            </tr>

            ))

            :
            <div className='text-danger fw-bold fs-3'>Nothing to Display</div>
          }
         
        </tbody>
      </table>

    </div>
    </>
  )
}

export default History