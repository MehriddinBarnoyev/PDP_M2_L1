import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import "./Section31.scss"
import rasm1 from "../../images/row_col1.jpg"
import colls from "../../images/mine2.jpg"
import rasm4 from "../../images/nature2.avif"
import rasm5 from "../../images/slide1.jpg"
import rasm6 from "../../images/uni.jpg"
import rasm7 from "../../images/travel.jpg"
import rasm8 from "../../images/Bussines.jpg"
import rasm9 from "../../images/Marketing.jpg"
import rasm10 from '../../images/Photography.jpg'
import rasm11 from '../../images/Sports.jpg'


export default function Section3() {
    return (
        <div>
            <div className="inform56">
                <div className="info1 d-flex">
                    <FontAwesomeIcon icon={faBookmark} className='py-2'></FontAwesomeIcon>
                    <p className='h3 ms-3'>Last week top highlights</p>
                </div>
                <p>Check last weeks top highlights, news, stories and headline news
                </p>
            </div>

            <div className="row">
                <div className="col informations">
                    <div className='infor'>
                        <div className="buttons">
                            <button className='btn btn-primary'>Bussines</button>
                            <button className='btn btn-dark'>Sponsored</button>
                        </div>
                        <div className="info1 text-white">
                            <p className='h3'>Never Understemate the influence of the social media</p>
                            <div className="small d-flex">
                                <img src={colls} alt="" />
                                <p className='mt-3 ms-3'>By Mehriddin   *     April 29, 2024    *    5 min read</p>
                            </div>
                        </div>
                    </div>
                    <img src={rasm4} alt="" className='w-150 nature' />
                </div>
                <div className="col">
                    <div className="row">
                        <div className="col d-flex cardimg">
                            <img src={rasm1} alt="" width={"150px"} />
                            <div className='ms-3'>
                                <button className='btn btn-danger'>Life style</button>
                                <p className='mt-3 h5'>The pros and cons of business agency</p>
                                <div className='d-flex'>
                                    <img src={rasm5} alt="" width={"20px"} className='mine1' />
                                    <p className='ms-3 h6'>By Mehriddin   *   April 29 2024</p>
                                </div>
                            </div>
                        </div>
                        <div className="col d-flex cardimg mt-3">
                            <img src={rasm6} alt="" width={"150px"} />
                            <div className='ms-3'>
                                <button className='btn btn-danger'>Life style</button>
                                <p className='mt-3 h5'>The pros and cons of business agency</p>
                                <div className='d-flex'>
                                    <img src={rasm5} alt="" width={"20px"} className='mine1' />
                                    <p className='ms-3 h6'>By Mehriddin   *   April 29 2024</p>
                                </div>
                            </div>
                        </div>
                        <div className="col d-flex cardimg mt-3">
                            <img src={rasm1} alt="" width={"150px"} />
                            <div className='ms-3'>
                                <button className='btn btn-danger'>Life style</button>
                                <p className='mt-3 h5'>The pros and cons of business agency</p>
                                <div className='d-flex'>
                                    <img src={rasm5} alt="" width={"20px"} className='mine1' />
                                    <p className='ms-3 h6'>By Mehriddin   *   April 29 2024</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className='mt-5 sectionFOoter ps-3' >
                <div className='Topic d-flex justify-content-between'>
                    <p className='h3'>Trending topics</p>
                    <p className='pe-3'>Wiew all Trending</p>
                </div>
                <div className="col secondCard py-5">
                    <div className="row d-flex">
                        <div className="col">
                            <p className='h4 text36 text-white ms-5 mt-5'>Travel</p>
                            <img src={rasm7} alt="" />
                        </div>
                        <div className="col">
                            <p className='h4 text36 text-white ms-5 mt-5'>Bussines</p>
                            <img src={rasm8} alt="" />
                        </div>
                        <div className="col">
                            <p className='h4 text36 text-white ms-5 mt-5'>Marketing</p>
                            <img src={rasm9} alt="" />
                        </div>
                        <div className="col">
                            <p className='h4 text36 text-white ms-5 mt-5'>Sport</p>
                            <img src={rasm10} alt="" />
                        </div>
                        <div className="col">
                            <p className='h4 text36 text-white ms-5 mt-5'>Photogrphy</p>
                            <img src={rasm11} alt="" />
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}
