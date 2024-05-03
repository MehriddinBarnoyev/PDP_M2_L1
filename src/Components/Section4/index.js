import React from 'react';
import { faGamepad } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import rasm1 from "../../images/section41.jpg";
import rasm2 from "../../images/section42.jpg";
import { faBullhorn } from '@fortawesome/free-solid-svg-icons';
import "./Section4.scss";

export default function Section4({ dark }) {
    return (
        <div className={`section4 ${dark ? 'dark' : 'light'}`}>
            <div className="infor84">

                <div className='d-flex'>
                    <FontAwesomeIcon icon={faGamepad} className='pt-2' style={{ fontSize: '2rem' }}></FontAwesomeIcon>
                    <p className={`h3 ps-2 text-${dark ? 'white' : 'dark'}`}>Sports update</p>
                </div>
                <div>
                    <p>Get the latest sports news and updates from football, tennis, formula one, cricket, NBA, and golf with live scores and stats</p>
                </div>

                <div className="row d-flex ">
                    <div className="col">
                        <div className={`titlee1 ps-3 ${dark ? 'dark' : 'light'}`}>
                            <button className='btn btn-danger'>Travel</button>
                            <p className={`h3 text-${dark ? 'white' : 'dark'}`}>8 initial problems of startups and <br /> their solutions</p>
                        </div>
                        <img src={rasm1} alt="" className='w-100' />
                    </div>
                    <div className="col ssd2">
                        <div className={`titlee1 ps-3 ${dark ? 'dark' : 'light'}`}>
                            <button className='btn btn-warning'>Information</button>
                            <p className={`h3 text-${dark ? 'white' : 'dark'}`}>Business ideas that will <br /> boom in upcoming years</p>
                        </div>
                        <img src={rasm2} alt="" className='w-100' />
                    </div>
                </div>
            </div>
            <div className="sections mt-5" >
                <div className="d-flex infromation">
                    <FontAwesomeIcon icon={faBullhorn} className='py-2' style={{ fontSize: '2rem' }}></FontAwesomeIcon>
                    <p className={`h3 ms-3 ${dark ? 'text-white' : 'text-dark'}`}>Sponsored news</p>
                </div>
                <div className="row  mt-3">
                    {[...Array(2)].map((_, index) => (
                        <div className="col d-flex" key={index}>
                            <img src={rasm1} alt="" style={{ width: "200px" }} />
                            <div className='ms-2'>
                                <button className={`btn btn-danger text-bold ${dark ? 'dark' : 'light'}`}> lifestyle</button>
                                <p className={`ms-2 mt-2 h4 ${dark ? 'text-white' : 'text-dark'}`}>The pros and cons of business <br />agency</p>
                                <p className={`${dark ? 'text-white' : 'text-dark'}`}>Mehriddin</p>
                            </div>
                        </div>
                    ))}                    
                </div>
                <div className="row mt-3">
                {[...Array(2)].map((_, index) => (
                        <div className="col d-flex" key={index}>
                            <img src={rasm1} alt="" style={{ width: "200px" }} />
                            <div className='ms-2'>
                                <button className={`btn btn-danger text-bold ${dark ? 'dark' : 'light'}`}> lifestyle</button>
                                <p className={`ms-2 mt-2 h4 ${dark ? 'text-white' : 'text-dark'}`}>The pros and cons of business <br />agency</p>
                                <p className={`${dark ? 'text-white' : 'text-dark'}`}>Mehriddin</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="row mt-3">
                {[...Array(2)].map((_, index) => (
                        <div className="col d-flex" key={index}>
                            <img src={rasm1} alt="" style={{ width: "200px" }} />
                            <div className='ms-2'>
                                <button className={`btn btn-danger text-bold ${dark ? 'dark' : 'light'}`}> lifestyle</button>
                                <p className={`ms-2 mt-2 h4 ${dark ? 'text-white' : 'text-dark'}`}>The pros and cons of business <br />agency</p>
                                <p className={`${dark ? 'text-white' : 'text-dark'}`}>Mehriddin</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
