import React from 'react';
import Navbar from '../../components/navbar/navbar';
import logo from '../../logo.svg'

function AboutMe() {
  return (
    <div className='App back-color' style={{height: '200vh'}}>

      <Navbar />

      <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
      <link rel="stylesheet" href="https://www.w3schools.com/lib/w3-theme-blue-grey.css" />
      <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Open+Sans' />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous" />
      <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" />

      <br />

      <div class="w3-container w3-content" style={{maxWidth:'80%', marginTop: '10rem'}}>
        <div class="w3-row">
            
          <div class="w3-col m12">
            <div class="w3-card w3-round w3-white">
              <div class="w3-container">
              <h3 class="w3-center">My Profile</h3>
              <p class="w3-center"><img src={logo} class="w3-circle" style={{height:'106px', width:'106px'}} alt="Avatar" /></p>
              <hr />
              <p><i class="fa fa-pencil fa-fw w3-margin-right w3-text-theme"></i> Sandra Inês Henriques Leonor </p>
              <p><i class="fa fa-home fa-fw w3-margin-right w3-text-theme"></i> Cacia, Portugal &#x1F1F5;&#x1F1F9;</p> 
              <p><i class="fa fa-birthday-cake fa-fw w3-margin-right w3-text-theme"></i> June, 7, 2001</p>
              </div>
            </div>

        </div>
      </div>

    </div>
    </div>
  );
}

export default AboutMe;
