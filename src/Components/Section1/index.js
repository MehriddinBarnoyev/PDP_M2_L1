import React from 'react'
import "./Section1.scss"
// import slide1 from "../../images/slide1.jpg"
// import slide2 from "../../images/slide2.jpg"
// import slide3 from "../../images/uni.jpg"
import colls from "../../images/mine2.jpg"

export default function Section1() {
    return (
        <div className='section1 text-white'>
            <div className="row">
                <div className="col">
                    <div className='title'>
                        <p className='  h2'>Initial problems ofstart-ups and <br />
                            their solutions</p>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                        <div className="row d-flex">
                            <div className="col">

                        <img src={colls} alt="" />
                        <p>By Mehriddin</p>
                            </div>
                        </div>


                    </div>
                </div>


            </div>
        </div>
    )
}
