import React from 'react';
import './navbar.css'

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';


function NavbarComp() {

  let activeStyle = {
        textDecoration: "underline",
      };

  return (
      <Navbar expand="lg" variant="light" bg="none" style={{marginBottom: "3rem"}} sticky="top" className="navbar">
        <Container>
          <Navbar.Brand href="/">My Name Inês</Navbar.Brand>
          <Nav className="me-auto">
            <NavDropdown title="Articles">
              <NavDropdown.Item href="/blog">All</NavDropdown.Item>
              <NavDropdown.Item href="/blog#reflections">Reflections</NavDropdown.Item>
              <NavDropdown.Item href="/blog#business">Business</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Lifestyle">
              <NavDropdown.Item href="/life">All</NavDropdown.Item>
              <NavDropdown.Item href="/life#photos">Photography</NavDropdown.Item>
              <NavDropdown.Item href="/life#recipes">Recipes</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/me">About Me</Nav.Link>
            <Nav.Link href="/post">Posts</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  );
}


// function Navbar() {

//   // This styling will be applied to a <NavLink> when the
//   // route that it links to is currently selected.
//   let activeStyle = {
//     textDecoration: "underline",
//   };

//   return (
//     <div className='Navbar'>
//      <div class="site-mobile-menu">
//       <div class="site-mobile-menu-header">
//         <div class="site-mobile-menu-close mt-3">
//           <span class="icon-close2 js-menu-toggle"></span>
//         </div>
//       </div>
//       <div class="site-mobile-menu-body"></div>
//     </div>
    
//     <header class="site-navbar" role="banner">

//       <div class="container">
//         <div class="row align-items-center">
          
//           <div class="col-md-3 cols-xl-2" style={{font: 'cursive'}}>
//               {/* <Link to="/"><a class="text-white mb-0">Home</a></Link> */}
//             My Name Inês
//           </div>
//           <div class="col-md-9 d-none d-xl-block">
//             <nav class="site-navigation position-relative text-right" role="navigation">

              // <ul class="site-menu js-clone-nav mr-auto d-none d-lg-block">
              //   <li><NavLink
              //           to="/"
              //           style={({ isActive }) =>
              //             isActive ? activeStyle : undefined
              //           }>
              //           <span>Home</span>
              //       </NavLink></li>
              //   <li class="has-children">
              //     <NavLink 
              //         to="/life" 
              //         style={({ isActive }) =>
              //           isActive ? activeStyle : undefined
              //         }><span>Lifestyle</span>
              //       </NavLink>
              //     <ul class="dropdown arrow-top">
              //     <li>
              //       <NavLink 
              //         to="/life#recipes"
              //         style={({ isActive }) =>
              //           isActive ? activeStyle : undefined
              //         }><span>Recipes</span>
              //       </NavLink></li>
              //       <li>
              //       <NavLink 
              //         to="/life#photo"
              //         style={({ isActive }) =>
              //           isActive ? activeStyle : undefined
              //         }><span>Photography</span>
              //       </NavLink></li>
              //     </ul>
              //   </li>
              //   <li class="has-children">
              //     <NavLink 
              //         to="/blog" 
              //         style={({ isActive }) =>
              //           isActive ? activeStyle : undefined
              //         }><span>Articles</span>
              //       </NavLink>
              //     <ul class="dropdown arrow-top">
              //       <li>
              //       <NavLink 
              //         to="/blog#reflections"
              //         style={({ isActive }) =>
              //           isActive ? activeStyle : undefined
              //         }><span>Reflections</span>
              //       </NavLink></li>
              //       <li>
              //         <NavLink 
              //         to="/blog#business"
              //         style={({ isActive }) =>
              //           isActive ? activeStyle : undefined
              //         }><span>Business</span>
              //       </NavLink></li>
              //     </ul>
              //   </li>
              //   <li><NavLink
              //           to="/me"
              //           style={({ isActive }) =>
              //             isActive ? activeStyle : undefined
              //           }>
              //           <span>About</span>
              //     </NavLink></li>
              //     <li><NavLink
              //           to="/post"
              //           style={({ isActive }) =>
              //             isActive ? activeStyle : undefined
              //           }>
              //           <span>Post</span>
              //     </NavLink></li>
              // </ul>
//             </nav>
//           </div>
//           </div>

//         </div>
//     </header>
    
//     <br style={{marginBottom: '10rem'}} />
//     </div>
//   );
// }

export default NavbarComp;
