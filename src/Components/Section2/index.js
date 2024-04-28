import React from 'react'
import { Card } from 'react-bootstrap'
// import rasm1 from "../../images/mine.jpg"
import rasm2 from "../../images/slide1.jpg"
import rasm3 from "../../images/slide2.jpg"
import rasm4 from "../../images/adv-3.png"
import rasm5 from "../../images/image.png"


import "./Section2.scss"
import { faBullhorn } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Section2() {
  return (
    <div>
      <div className="row">
        <div className="col d-flex">

      <FontAwesomeIcon icon={faBullhorn} className='fontAwesome mt-2' style={{fontSize:'2rem'}} />
      <p className='h1 ms-3'>  Today's top highlights</p>
        </div>
      </div>

      <p>Latest breaking news, pictures, videos, and special reports</p>
      <div className="cards">
        <div className="row">
          <div className="col d-flex">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={rasm3} />
              <Card.Body>
                <Card.Title>Lorem Ipsum is simply dummy text of the</Card.Title>
                <div className="little d-flex">
                  <div className="imgmine">
                    <img src={rasm2} alt="" />
                  </div>
                  <div>
                    <p className='ms-2'>By Mehriddin   *    April 28  2024</p>
                  </div>
                </div>
              </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }} className='ms-4'>
              <Card.Img variant="top" src={rasm3} />
              <Card.Body>
                <Card.Title>Lorem Ipsum is simply dummy text of the</Card.Title>
                <div className="little d-flex">
                  <div className="imgmine">
                    <img src={rasm2} alt="" />
                  </div>
                  <div>
                    <p className='ms-2'>By Mehriddin   *    April 28  2024</p>
                  </div>
                </div>
              </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }} className='ms-4'>
              <Card.Img variant="top" src={rasm3} />
              <Card.Body>
                <Card.Title>Lorem Ipsum is simply dummy text of the</Card.Title>
                <div className="little d-flex">
                  <div className="imgmine">
                    <img src={rasm2} alt="" />
                  </div>
                  <div>
                    <p className='ms-2'>By Mehriddin   *    April 28  2024</p>
                  </div>
                </div>
              </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }} className='ms-4'>
              <Card.Img variant="top" src={rasm3} />
              <Card.Body>
                <Card.Title>Lorem Ipsum is simply dummy text of the</Card.Title>
                <div className="little d-flex">
                  <div className="imgmine">
                    <img src={rasm2} alt="" />
                  </div>
                  <div>
                    <p className='ms-2'>By Mehriddin   *    April 28  2024</p>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>

      <div className="section pt-5 py-3">
        <div className="row">
          <img src={rasm4} alt="" />          
        <img src={rasm5} alt="" />
        </div>
      </div>
    </div>
  )
}
