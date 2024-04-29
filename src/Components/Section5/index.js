import React from 'react'
import "./Section5.scss"
import rasm1 from "../../images/forSectionss5.jpg"

export default function Section5() {
    return (
        <div className='mt-5 container56'>
            <div className="infrt text-white text-center">
                <p className='h2 '>Never miss a story</p>
                <p>Get the freshest headlines and updates sent uninterrupted to your inbox.</p>
                <div className="row">
                    <div className="col">
                        <input type="email" placeholder='enter your email' />
                        <button className='btn btn-primary'>Subscribe</button>
                        <p>By subscribing you agree to our Privacy Policy</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
