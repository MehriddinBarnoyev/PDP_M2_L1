// Section2.js
import React from 'react';
import { faBullhorn } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import rasm6 from "../../images/forcard.jpg";
import "./Section2.scss";

export default function Section2({ dark }) {
  return (
    <div>
      <div className="row">
        <div className="col d-flex align-items-center">
          <FontAwesomeIcon icon={faBullhorn} className={`fontAwesome mt-2 text-${dark ? "white" : "dark"}`} style={{ fontSize: '2rem' }} />
          <p className={`h1 ms-3 text-${dark ? "white" : "dark"}`}>Today's top highlights</p>
        </div>
      </div>

      <p className={`text-${dark ? "white" : "dark"}`}>Latest breaking news, pictures, videos, and special reports</p>
      <div className="cards">
        <div className="row">
          <div className="col d-flex">
            {/* Cards */}
          </div>
        </div>
      </div>

      <div className="section pt-5 py-3">
        <div className="row section12">
          <div className="row title">
            <div className="col">
              <div>
                <p>The Blogize</p>
                <p className='h2'>Save on Premium Membership</p>
              </div>
            </div>
            <div className="col button1">
              <button className='btn btn-primary'>View Pricing</button>
            </div>
          </div>
          <img src={rasm6} alt="" />
        </div>
      </div>
    </div>
  );
}
