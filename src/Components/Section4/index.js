import { faGamepad } from '@fortawesome/free-solid-svg-icons/faGamepad'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import "./Section4.scss"
import rasm1 from "../../images/section41.jpg"
import rasm2 from "../../images/section42.jpg"
import { faBullhorn } from '@fortawesome/free-solid-svg-icons'

export default function Section4() {
    return (
        <div>
            <div className="infor84">

                <div className='d-flex'>
                    <FontAwesomeIcon icon={faGamepad} className='pt-2' style={{ fontSize: '2rem' }}></FontAwesomeIcon>
                    <p className='h3 ps-2'>Sports update</p>
                </div>
                <div>
                    <p>Get the latest sports news and updates from football, tennis, formula one, cricket, NBA, and golf with live scores and stats</p>
                </div>

                <div className="row d-flex ">
                    <div className="col">
                        <div className="titlee1 ps-3">
                            <button className='btn btn-danger'>Travel</button>
                            <p className='h3 text-white'>8 initial problems of startups and <br /> their solutions</p>
                        </div>
                        <img src={rasm1} alt="" className='w-100' />
                    </div>
                    <div className="col ssd2">
                        <div className="titlee1 ps-3">
                            <button className='btn btn-warning'>Information</button>
                            <p className='h3 text-white'>Bussines ideas that will <br /> boom in upcoming years</p>
                        </div>
                        <img src={rasm2} alt="" className='w-100' />
                    </div>
                </div>
            </div>
            <div className="sections mt-5" >
                <div className="d-flex infromation">
                    <FontAwesomeIcon icon={faBullhorn} className='py-2' style={{ fontSize: '2rem' }}></FontAwesomeIcon>
                    <p className='h3 ms-3'>Sponsored news</p>
                </div>
                <div className="row d-flex mt-3">
                    <div className="col d-flex ">
                        <img src={rasm1} alt="" style={{ width: "200px" }} />
                        <div className='ms-2'>
                            <button className='btn btn-outline-danger text-bold'> lifestyle</button>
                            <p className='ms-2 mt-2 h4'>The pros and cons of bussines <br />agency</p>
                            <p className='h6'>Mehriddin</p>
                        </div>
                    </div>
                    <div className="col d-flex ">
                        <img src={rasm1} alt="" style={{ width: "200px" }} />
                        <div className='ms-2'>
                            <button className='btn btn-outline-danger text-bold'> lifestyle</button>
                            <p className='ms-2 mt-2 h4'>The pros and cons of bussines <br />agency</p>
                            <p className='h6'>Mehriddin</p>
                        </div>
                    </div>
                </div>
                <div className="row d-flex mt-3">
                    <div className="col d-flex ">
                        <img src={rasm1} alt="" style={{ width: "200px" }} />
                        <div className='ms-2'>
                            <button className='btn btn-outline-danger text-bold'> lifestyle</button>
                            <p className='ms-2 mt-2 h4'>The pros and cons of bussines <br />agency</p>
                            <p className='h6'>Mehriddin</p>
                        </div>
                    </div>
                    <div className="col d-flex ">
                        <img src={rasm1} alt="" style={{ width: "200px" }} />
                        <div className='ms-2'>
                            <button className='btn btn-outline-danger text-bold'> lifestyle</button>
                            <p className='ms-2 mt-2 h4'>The pros and cons of bussines <br />agency</p>
                            <p className='h6'>Mehriddin</p>
                        </div>
                    </div>
                </div>
                <div className="row d-flex mt-3">
                    <div className="col d-flex ">
                        <img src={rasm1} alt="" style={{ width: "200px" }} />
                        <div className='ms-2'>
                            <button className='btn btn-outline-danger text-bold'> lifestyle</button>
                            <p className='ms-2 mt-2 h4'>The pros and cons of bussines <br />agency</p>
                            <p className='h6'>Mehriddin</p>
                        </div>
                    </div>
                    <div className="col d-flex ">
                        <img src={rasm1} alt="" style={{ width: "200px" }} />
                        <div className='ms-2'>
                            <button className='btn btn-outline-danger text-bold'> lifestyle</button>
                            <p className='ms-2 mt-2 h4'>The pros and cons of bussines <br />agency</p>
                            <p className='h6'>Mehriddin</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
