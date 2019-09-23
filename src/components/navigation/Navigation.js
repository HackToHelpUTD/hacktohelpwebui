import React from 'react';

import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">Hack to Help</a>
          <button className="navbar navbar-toggler navbar-light bg-faded"type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
             
              <li className="nav-item">
                  <a className="nav-link" href="#">
                    <NavLink to='/'>About</NavLink>
                  </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <NavLink to='/contact'>Contact</NavLink>
                </a>
              </li>

              <li className="nav-item">
                  <a className="nav-link" href="#">
                    <NavLink to='/events'>Events</NavLink>
                  </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <NavLink to='/join-us'>Join Us</NavLink>
                </a>
              </li>
              <li className="nav-item">
                  <a className="nav-link" href="#">
                    <NavLink to='/team'>Our Team</NavLink>
                  </a>
              </li>

            </ul>
          </div>
        </nav>




    );
}

export { Navigation };