import React from 'react';
import './css/bootstrap.min.css';
import './css/style.css';
import './fonts/icomoon/style.css';

import { Link, NavLink } from 'react-router-dom';


function Navbar() {

  // This styling will be applied to a <NavLink> when the
  // route that it links to is currently selected.
  let activeStyle = {
    textDecoration: "underline",
  };

  let activeClassName = "underline";

  return (
    <div className='Navbar'>
     <div class="site-mobile-menu">
      <div class="site-mobile-menu-header">
        <div class="site-mobile-menu-close mt-3">
          <span class="icon-close2 js-menu-toggle"></span>
        </div>
      </div>
      <div class="site-mobile-menu-body"></div>
    </div>
    
    <header class="site-navbar" role="banner">

      <div class="container">
        <div class="row align-items-center">
          
          <div class="col-md-3 cols-xl-2" style={{font: 'cursive'}}>
              {/* <Link to="/"><a class="text-white mb-0">Home</a></Link> */}
            My Name is Inès
          </div>
          <div class="col-md-9 d-none d-xl-block">
            <nav class="site-navigation position-relative text-right" role="navigation">

              <ul class="site-menu js-clone-nav mr-auto d-none d-lg-block">
                <li><NavLink
                        to="/"
                        style={({ isActive }) =>
                          isActive ? activeStyle : undefined
                        }>
                        <span>Home</span>
                    </NavLink></li>
                {/* <li class="has-children">
                  <a href="about.html"><span>Dropdown</span></a>
                  <ul class="dropdown arrow-top">
                    <li><a href="#">Menu One</a></li>
                    <li class="has-children">
                      <a href="#">Dropdown</a>
                      <ul class="dropdown">
                        <li><a href="#">Menu One</a></li>
                        <li><a href="#">Menu Two</a></li>
                        <li><a href="#">Menu Three</a></li>
                        <li><a href="#">Menu Four</a></li>
                      </ul>
                    </li>
                  </ul>
                </li> */}
                <li><NavLink
                        to="/"
                        style={({ isActive }) =>
                          isActive ? activeStyle : undefined
                        }>
                        <span>Pictures</span>
                    </NavLink></li>
                <li><NavLink
                        to="/blog"
                        style={({ isActive }) =>
                          isActive ? activeStyle : undefined
                        }>
                        <span>Blog</span>
                      </NavLink></li>
                <li><NavLink
                        to="/me"
                        style={({ isActive }) =>
                          isActive ? activeStyle : undefined
                        }>
                        <span>About Inès</span>
                  </NavLink></li>
                <li><NavLink
                      to="/"
                      style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                      }>
                      <span>Log In</span>
                </NavLink></li>
              </ul>
            </nav>
          </div>


          <div class="d-inline-block d-xl-none ml-md-0 mr-auto py-3" style={{position: "relative", top: "3px"}}><a href="#" class="site-menu-toggle js-menu-toggle text-white"><span class="icon-menu h3"></span></a></div>

          </div>

        </div>
    </header>
    
    </div>
  );
}

export default Navbar;
