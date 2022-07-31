import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import { Slide } from 'react-slideshow-image';

function App() {

  const [posts, setPosts] = useState([]);

  function handleRequest() {
    // get all posts
    console.log("get posts")

    let resp = fetch('http://localhost:5000/posts/date', {
      method: 'GET'
    }).then((data)=>{
      data.json().then((properties) => {
        console.log(properties)
        if ("error" in properties) {
          console.log("error")
          return
        }
        setPosts([])
        var array = properties["posts"]
        array.forEach((item) => {
          setPosts(oldArray => [...oldArray, item]);
        })
      })
    }).catch((error) => {
      console.log("error")
    })
  }

  useEffect(() => {
    handleRequest()
  }, [])

  return (
    <div className='App back-color' style={{height: '100vh'}}>

    <Navbar></Navbar>

    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
    <link rel="stylesheet" href="https://www.w3schools.com/lib/w3-theme-blue-grey.css" />
    <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Open+Sans' />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous" />
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>

    <div class="container" style={{fontSize: 20, textAlign: "left", marginBottom: "3rem"}}>
      <h1 style={{fontSize: 60, textAlign: "center"}}>My Name Inês</h1>
      <p>&emsp;&emsp;&emsp;This is a space that combines different categories that give a certain meaning and feeling of fulfillment to me, Sandra Leonor. I decided that it made sense to share with the world these interests as it is a way to add value in a different format (rather than only through conversation), to share experiences, and hopefully inspire other human beings to be creative, curious, and exciting about life. Because it is so intimate and, in a way, personal, it made all the sense to be called Inês - how my family calls me.</p>
      <p>&emsp;&emsp;&emsp;To you, explorer of ideas, thank you for the time you took to be here. "The journey of a thousand miles begins with a single step" - Lao Tzu</p>
    </div>



    <div class="w3-container w3-content" style={{maxWidth:'80%'}}>
        <div class="w3-row">

          <div class="w3-col m12">
            {posts.map(function(item) {

              console.log(item)
              var inters = []
              var photos = []

              if (item[5].length !== 0) {
                inters = item[5].split(",")
              }
              if (item[4].length !== 0) {
                photos = item[4].split(",")
              }

              console.log(photos)
              var photos_updated = []
              if (photos.length !== 0) {
                for (var i = 0; i < photos.length; i++) {
                  if (i % 2 !== 0) {
                    photos_updated.push(photos[i])
                  }
                }
              }
              console.log(photos_updated)

              var indents = [];
              for (var interest in inters) {
                indents.push(<span class="w3-tag w3-small w3-theme" style={{marginLeft: '1rem'}}> {inters[interest]} </span>);
              }

              return (<div class="w3-container w3-row-padding w3-card w3-white w3-round" style={{marginRight: '2rem', marginBottom: '2rem'}}><br />
                <img src={logo} alt="Avatar" class="w3-left w3-circle w3-margin-right" style={{width:'60px'}} />
                <span class="w3-right w3-opacity"> {item[2]} </span>
                <h4 class="w3-left"> {item[1]} </h4><br />
                {photos_updated.length !== 0 ?
                <div class="w3-row">
                  <div class="w3-col m6">
                    <Slide arrows={true}>
                      {photos_updated.map((image, index)=> (
                        <div className="each-slide" key={index}>
                          <img class="image-upload" src={"data:image/png;base64," + image} alt="Card image cap" />
                        </div>
                      ))} 
                    </Slide>
                  </div>
                  <div class="w3-col m6">
                    <hr class="w3-clear" />
                    <p> {item[3]} </p>
                  </div>
                </div> : 
                <div class="w3-col m12">
                  <hr class="w3-clear" />
                  <p> {item[3]} </p>
                </div>}
              <p>
                <div style={{float: 'left', paddingRight: '3px', paddingBottom: '2px'}}>
                  {indents}
                </div>
              </p>
              <p>
                <div style={{float: 'right', paddingLeft: '3px', paddingBottom: '2px'}}>
                <span class="w3-tag w3-small w3-theme" style={{marginRight: '1rem'}}> {item[6]} </span>
                </div>
              </p>
              <br />
            </div>)
            })}
          </div>
        </div>
        </div>

    <Footer />

    </div>
  );
}

export default App;
