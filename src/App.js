import React from 'react';
import logo from './logo.svg';
import './App.css';

import Navbar from './components/navbar/navbar';

function App() {
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

      <div class="container" style={{maxWidth:'100%', marginTop: '10rem'}}>
        <div class="row">
          <div class="col-md-8">
            <input class="form-control" id="myInput" type="text" placeholder="Search.." />
          </div>
          <div class="col-md-2 dropdown">
            <button class="button-3" role="button"><i class="fa fa-filter fa-fw w3-margin-right"></i>Filter</button>
            <div class="dropdown-content">
              <a>Filter 1</a>
            </div>
          </div>
          <div class="col-md-2">
            <button class="button-3" role="button"><i class="fa fa-search fa-fw w3-margin-right"></i>Search</button>
          </div>
        </div>
      </div>
    

      <div class="w3-container w3-content" style={{maxWidth:'80%', marginTop: '2em'}}>
        <div class="w3-row">
          <div class="w3-col m3">
            <div class="w3-card w3-round w3-white">
              <div class="w3-container">
              <h3 class="w3-center">My Profile</h3>
              <p class="w3-center"><img src={logo} class="w3-circle" style={{height:'106px', width:'106px'}} alt="Avatar" /></p>
              <hr />
              <p><i class="fa fa-pencil fa-fw w3-margin-right w3-text-theme"></i> Filipe </p>
              <p><i class="fa fa-home fa-fw w3-margin-right w3-text-theme"></i> London, UK</p>
              <p><i class="fa fa-birthday-cake fa-fw w3-margin-right w3-text-theme"></i> April 1, 1988</p>
              </div>
            </div>
            <br />

            <div class="w3-card w3-round w3-white w3-hide-small">
              <div class="w3-container">
                <h3>Interests</h3>
                <p>
                  <div style={{float: 'left', paddingRight: '3px', paddingBottom: '2px'}}>
                    <span class="w3-tag w3-small w3-theme"> Interest 1</span>
                  </div>
                </p>
              </div>
            </div>
            <br />
          </div>

          <div class="w3-col m9">
            <div class="w3-container w3-row-padding w3-card w3-white w3-round" style={{marginLeft: '2rem'}}><br />
              <img src={logo} alt="Avatar" class="w3-left w3-circle w3-margin-right" style={{width:'60px'}} />
              <span class="w3-right w3-opacity"> 1914</span>
              <h4 class="w3-left"> H. Rackham </h4><br />
              <hr class="w3-clear" />
              <p>"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."</p>
              <p>
                <div style={{float: 'left', paddingRight: '3px', paddingBottom: '2px'}}>
                  <span class="w3-tag w3-small w3-theme"> Lorem Ipsum </span>
                </div>
              </p>
              <br />
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}

export default App;
