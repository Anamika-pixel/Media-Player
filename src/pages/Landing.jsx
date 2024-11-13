import React from 'react'
import { Link } from 'react-router-dom'
import landingImage from '../assets/music-beat.gif'
import Card from 'react-bootstrap/Card';
import card1 from '../assets/card1.png'
import card2 from '../assets/card2.jpg'
import card3 from '../assets/card3.jpg'


function Landing() {
  return (
    <>
    <div className='container landingsection'>
      <div className='row align-items-center my-5'>
        <div className='col-lg-5'>
          <h2>welcome to <span className='text-info'>Media Player</span></h2>
          <p style={{textAlign:"justify"}}> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque nobis facilis aliquam eius tenetur commodi id, distinctio enim repellendus quisquam explicabo sint quam laboriosam tempore consequuntur, maiores perspiciatis nihil tempora!</p>
          <Link to={"/home"} className='btn btn-info mt-4'>Get Started</Link>
        </div>
        <div className='col'></div>
        <div className='col'></div>

        <div className='col-lg-6'>
          <img src={landingImage} alt="" />
        </div>
      </div>
    </div>

          {/* features */}

          <div className='feature container my-5'>
            <h1 className='text-center text-info'>Features</h1>
            <div className='row mt-5 ms-5'>
              <div className='col-lg-4'>
                {/* card 1*/}
                <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={card1} />
      <Card.Body>
        <Card.Title>Managing Vedios</Card.Title>
        <Card.Text>
          Users can upload , view and remove he vedios
        </Card.Text>
      </Card.Body>
    </Card>
                
              </div>

              <div className='col-lg-4'>
                {/* card 2*/}
                <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={card2} />
      <Card.Body>
        <Card.Title>Categorize Vedios</Card.Title>
        <Card.Text>
          Users can Categorize the Vedio By Drag and Drop Features .
        </Card.Text>
      </Card.Body>
    </Card>
                
              </div>

              <div className='col-lg-4'>
                {/* card 3*/}
                <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={card3} />
      <Card.Body>
        <Card.Title>Managing History</Card.Title>
        <Card.Text>
          Users can Manage The Watch History All vedio .
        </Card.Text>
      </Card.Body>
    </Card>
                
              </div>


            </div>
          </div>



          {/* landing footer */}

          <div className='container my-5 p-5 border border-white  border-3 rounded'>
      <div className='row'>
        <div className="col-lg-6">
          <h3 className="text-info">Simple , Fast , Powerful</h3>
          <div className="mt-5 text-white">
            <p><span className='fs-5 fw-bold'>Play Everything : </span> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus iste totam placeat aspernatur, necessitatibus quasi qui ad suscipit eveniet facilis voluptatem magni nemo hic nobis dolorem omnis, molestiae ratione unde.</p>
            <p><span className='fs-5 fw-bold'>Play Everything : </span> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus iste totam placeat aspernatur, necessitatibus quasi qui ad suscipit eveniet facilis voluptatem magni nemo hic nobis dolorem omnis, molestiae ratione unde.</p>
            <p><span className='fs-5 fw-bold'>Play Everything : </span> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus iste totam placeat aspernatur, necessitatibus quasi qui ad suscipit eveniet facilis voluptatem magni nemo hic nobis dolorem omnis, molestiae ratione unde.</p>
          </div>
        </div>
        <div className="col-lg-6 p-5">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/d9MyW72ELq0?si=NI6-YAFW5B1ppYv-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
    </div>



    </>
  )
}

export default Landing