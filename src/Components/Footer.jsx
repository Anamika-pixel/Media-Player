import React from 'react'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <>
    <div className='  row d-flex p-5 justify-content-between' >
      <div className='col-lg-4 mb-5'style={{width:'350px', textAlign:'justify'}} >
        <h4> <i className='fa-solid fa-music'> &nbsp; </i> MEDIA PLAYER</h4>
    
        <p>Lorem ipsum dolor sit amet consectetur,  adipisicing elit. Doloremque laudantium ipsum sapiente id quidem eligendi, eos, molestiae omnis neque non quas nobis, beatae exercitationem minus! In, animi ?</p>
        <h5>Code is licensed by Luminar</h5>
        <h6>currently V5.3.2</h6>
    
      </div>
      <div className='col-lg-2 mb-5'>
        <h4  >Links</h4>
         
          <div><Link to={'/'} style={{textDecoration:'none',color:'white'}} >Landing</Link></div>
          <div><Link to={'/home'} style={{textDecoration:'none',color:'white'}} >Home</Link></div>
          <div><Link to={'/history'} style={{textDecoration:'none',color:'white'}} >History</Link></div>



      </div>

      <div className='col-lg-3 mb-5' >
        <h4 >Guides</h4>
       
        <div><Link to={'/'} style={{textDecoration:'none',color:'white'}} >React</Link></div>
          <div><Link to={'/home'} style={{textDecoration:'none',color:'white'}} >React Bootstrap</Link></div>
          <div> <a href="" style={{textDecoration:'none',color:'white'}} ></a>React Router</div>


      </div>
      <div className='col-lg-3'>
         <h4>        Contact Us        </h4>
        <div className='d-flex justify-content-between'>
          <input type="text" className='form-control'  placeholder='Enter email.....'/>
          <button className='btn btn-info ms-3' ><i class="fa-solid fa-arrow-right"></i></button>
       </div>
        <div className='d-flex justify-content-between mt-3' >
               <a href="" style={{fontSize:'20px',color:'white'}}> <i  className="fa-brands fa-facebook"></i></a>
               <a href="" style={{fontSize:'20px',color:'white'}}><i className="fa-brands fa-twitter"></i></a>
              <a href="" style={{fontSize:'20px',color:'white'}}>  <i className="fa-brands fa-instagram"></i></a>
              <a href="" style={{fontSize:'20px',color:'white'}}>  <i className="fa-brands fa-linkedin"></i></a>
              <a href="" style={{fontSize:'20px',color:'white'}}>  <i className="fa-brands fa-github"></i></a>
              <a href="" style={{fontSize:'20px',color:'white'}}>   <i className="fa-solid fa-phone"></i></a>

        </div>
      </div>

      <p className='text-center mt-5'>Copyright &copy; july 2024 Batch.,Media Player,Built with react</p>

    </div>


    



    </>
  )
}

export default Footer