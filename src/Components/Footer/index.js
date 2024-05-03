import React from 'react';
import './Footer.scss';
import logo from "../../images/logo.svg";
import { Button } from 'react-bootstrap';

export default function Footer({ dark }) {
    return (
        <div>
            <hr />
            <div className={`row mt-5 text-${dark ? 'white' : 'dark'}`}>
                <div className="col">
                    <div className="imgage">
                        <img src={logo} alt="Logo" />
                    </div>
                    <div className="info mt-3">
                        <p>The next-generation blog, news, and magazine theme for you to start sharing your stories today! This Bootstrap 5 based theme is ideal for all types of sites that deliver the news</p>
                        <p className='mt-3'>©2023 Webestica. All rights reserved</p>
                    </div>
                </div>
                <div className="col">
                    <div>
                        <p className='text-center h5'>Navigation</p>
                    </div>
                    <div className='row'>
                        <div className='col ms-5'>
                            <p>Features</p>
                            <p>Style guide</p>
                            <p>Contact us</p>
                            <p>Get theme</p>
                            <p>Support</p>
                        </div>
                        <div className='col ms-5'>
                            <p>News</p>
                            <div className='d-flex align-items-center'>
                                <p>Career</p>
                                <button className='btn btn-danger ms-2'>2job</button>
                            </div>
                            <p>Technology</p>
                            <p>Startups</p>
                            <p>Gadgets</p>
                        </div>
                    </div>
                </div>
                <div className="col mt-">
                    <p className='text-center h5'>Browse by Tag</p>
                    <div className='d-flex'>
                        <div className="col">
                            <Button variant="primary" className="mb-2">Primary</Button>
                            <Button variant="primary" className="mb-2">Primary</Button>
                            <Button variant="info">Info</Button>
                        </div>
                        <div className="col ms-4">
                            <Button variant="secondary" className="mb-2">Secondary</Button>
                            <Button variant="secondary" className="mb-2">Secondary</Button>
                            <Button variant="light">Light</Button>
                        </div>
                        <div className="col ms-4">
                            <Button variant="success" className="mb-2">Success</Button>
                            <Button variant="success" className="mb-2">Success</Button>
                            <Button variant="dark">Dark</Button>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <p className='h5 text-center'>Social media</p>
                    <ul className="nav flex-column">
                        <li className="nav-item"><a className="nav-link pt-0" href="#"><i className="fab fa-facebook-square fa-fw me-2 text-facebook"></i>Facebook</a></li>
                        <li className="nav-item"><a className="nav-link" href="#"><i className="fab fa-twitter-square fa-fw me-2 text-twitter"></i>Twitter</a></li>
                        <li className="nav-item"><a className="nav-link" href="#"><i className="fab fa-linkedin fa-fw me-2 text-linkedin"></i>Linkedin</a></li>
                        <li className="nav-item"><a className="nav-link" href="#"><i className="fab fa-youtube-square fa-fw me-2 text-youtube"></i>YouTube</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
