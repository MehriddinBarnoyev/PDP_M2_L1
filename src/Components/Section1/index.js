// Section1.js
import React from 'react';
import "./Section1.scss";
import colls from "../../images/mine2.jpg";

export default function Section1() {
    return (
        <div className='section1 text-white'>
            <div className="row">
                <div className="col">
                    <div className='title'>
                        <p className='h2'>Initial problems of start-ups and their solutions</p>
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
    );
}
