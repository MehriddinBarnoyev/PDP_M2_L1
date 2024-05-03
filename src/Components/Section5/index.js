import React from 'react';
import "./Section5.scss";

export default function Section5({ dark }) {
    return (
        <div className={`mt-5 container56 ${dark ? 'dark' : 'white'}`}>
            <div className={`infrt text-${dark ? 'white' : 'dark'} text-center`}>
                <p className={`h2 text-${dark ? 'white' : 'dark'}`}>Never miss a story</p>
                <p>Get the freshest headlines and updates sent uninterrupted to your inbox.</p>
                <div className="row">
                    <div className="col">
                        <input type="email" placeholder='enter your email' />
                        <button className={`btn btn-primary text-${dark ? 'dark' : 'white'}`}>Subscribe</button>
                        <p className={`${dark ? 'text-white' : 'text-dark'}`}>By subscribing you agree to our Privacy Policy</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
