import React from 'react'
import './Footer.scss'
import logo from "../../images/logo.svg"
import { Button } from 'react-bootstrap'
export default function Footer() {
    return (
        <div>
            {/* <div class="row pt-5">
			<div class="col-md-6 col-lg-4 mb-4">
				<img class="dark-mode-item" src={logo} alt="logo"/>
				<p class="mt-3">The next-generation blog, news, and magazine theme for you to start sharing your stories today! This Bootstrap 5 based theme is ideal for all types of sites that deliver the news.</p>
				<div class="mt-4">©2023 <a href="https://www.webestica.com/" class="text-reset btn-link" target="_blank">Webestica</a>. All rights reserved
				</div>
			</div>

			<div class="col-md-6 col-lg-3 mb-4">
				<h5 class="mb-4">Navigation</h5>
				<div class="row">
					<div class="col-6">
						<ul class="nav flex-column">
							<li class="nav-item"><a class="nav-link pt-0" href="#">Features</a></li>
							<li class="nav-item"><a class="nav-link" href="#">Style Guide</a></li>
							<li class="nav-item"><a class="nav-link" href="#">Contact us</a></li>
							<li class="nav-item"><a class="nav-link" href="#">Get Theme</a></li>
							<li class="nav-item"><a class="nav-link" href="#">Support</a></li>
						</ul>
					</div>
 					<div class="col-6">
						<ul class="nav flex-column">
							<li class="nav-item"><a class="nav-link pt-0" href="#">News</a></li>
							<li class="nav-item"><a class="nav-link" href="#">Career <span class="badge text-bg-danger ms-2">2 Job</span></a></li>
							<li class="nav-item"><a class="nav-link" href="#">Technology</a></li>
							<li class="nav-item"><a class="nav-link" href="#">Startups</a></li>
							<li class="nav-item"><a class="nav-link" href="#">Gadgets</a></li>
						</ul>
					</div>
				</div>
			</div>

			<div class="col-sm-6 col-lg-3 mb-4">
				<h5 class="mb-4">Browse by Tag</h5>
				<ul class="list-inline">
					<li class="list-inline-item"><a href="#" class="btn btn-sm btn-primary-soft">Travel</a></li>
					<li class="list-inline-item"><a href="#" class="btn btn-sm btn-warning-soft">Business</a></li>
					<li class="list-inline-item"><a href="#" class="btn btn-sm btn-success-soft">Tech</a></li>
					<li class="list-inline-item"><a href="#" class="btn btn-sm btn-danger-soft">Gadgets</a></li>
					<li class="list-inline-item"><a href="#" class="btn btn-sm btn-info-soft">Lifestyle</a></li>
					<li class="list-inline-item"><a href="#" class="btn btn-sm btn-primary-soft">Vaccine</a></li>
					<li class="list-inline-item"><a href="#" class="btn btn-sm btn-warning-soft">Marketing</a></li>
					<li class="list-inline-item"><a href="#" class="btn btn-sm btn-success-soft">Sports</a></li>
					<li class="list-inline-item"><a href="#" class="btn btn-sm btn-danger-soft">Covid-19</a></li>
					<li class="list-inline-item"><a href="#" class="btn btn-sm btn-info-soft">Politics</a></li>
				</ul>
			</div>

			<div class="col-sm-6 col-lg-2 mb-4">
				<h5 class="mb-4">Our Social handles</h5>
				<ul class="nav flex-column">
					<li class="nav-item"><a class="nav-link pt-0" href="#"><i class="fab fa-facebook-square fa-fw me-2 text-facebook"></i>Facebook</a></li>
					<li class="nav-item"><a class="nav-link" href="#"><i class="fab fa-twitter-square fa-fw me-2 text-twitter"></i>Twitter</a></li>
					<li class="nav-item"><a class="nav-link" href="#"><i class="fab fa-linkedin fa-fw me-2 text-linkedin"></i>Linkedin</a></li>
					<li class="nav-item"><a class="nav-link" href="#"><i class="fab fa-youtube-square fa-fw me-2 text-youtube"></i>YouTube</a></li>
				</ul>
			</div>
		</div> */}
            <hr />

            <div className="row mt-5">
                <div className="col ">
                    <div className="imgage">
                        <img src={logo} alt="" />
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
                            <p>features</p>
                            <p>Style guide</p>
                            <p>Contact us</p>
                            <p>Get theme</p>
                            <p>Support</p>
                        </div>
                        <div className='col ms-5'>
                            <p>News</p>
                            <div className='d-flex'>
                                <p>Career</p>
                                <button className='btn btn-danger'>2job</button>
                            </div>
                            <p>Technology</p>
                            <p>Startups</p>
                            <p>Gadject</p>
                        </div>
                    </div>
                </div>
                <div className="col mt-">
                    <p className='text-center h5'>Browse by Tag</p>
                    <div className='d-flex'>
                        <div className="row ">
                            <Button variant="primary">Primary</Button>{' '}
                            <Button variant="secondary" className='mt-2'>Secondary</Button>{' '}
                            <Button variant="success" className='mt-2'>Success</Button>{' '}
                        </div>
                        <div className="row ms-4">
                            <Button variant="primary">Primary</Button>{' '}
                            <Button variant="secondary" className='mt-2'>Secondary</Button>{' '}
                            <Button variant="success" className='mt-2'>Success</Button>{' '}
                        </div>
                        <div className="row ms-4 mt-2">
                            <Button variant="info" className=''>Info</Button>{' '}
                            <Button variant="light" className='mt-2'>Light</Button>{' '}
                            <Button variant="dark" className='mt-2'>Dark</Button>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <p className='h5 text-center'>Social media</p>
                    <div>
                        <ul class="nav flex-column">
                            <li class="nav-item"><a class="nav-link pt-0" href="#"><i className="fab fa-facebook-square fa-fw me-2 text-facebook"></i>Facebook</a></li>
                            <li class="nav-item"><a class="nav-link" href="#"><i className="fab fa-twitter-square fa-fw me-2 text-twitter"></i>Twitter</a></li>
                            <li class="nav-item"><a class="nav-link" href="#"><i className="fab fa-linkedin fa-fw me-2 text-linkedin"></i>Linkedin</a></li>
                            <li class="nav-item"><a class="nav-link" href="#"><i className="fab fa-youtube-square fa-fw me-2 text-youtube"></i>YouTube</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
