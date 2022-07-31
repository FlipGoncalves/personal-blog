import React, { useEffect, useState } from 'react';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import grey from './grey.jpg'
import './lifestyle.css'

function Lifestyle() {

  const [posts, setPosts] = useState([]);

  function handleRequest() {
    // get all posts
    console.log("get posts")

    let resp = fetch('http://localhost:5000/posts/all', {
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

    <div class="w3-container w3-content" style={{maxWidth:'80%'}}>

      <h1>Photography</h1>

        <div class="w3-row">
            {posts.map(function(item) {

              var photos = []
              if (item[4].length !== 0) {
                photos = item[4].split(",")
              } else {
                return (<></>)
              }

              var photos_updated = []
              if (photos.length !== 0) {
                for (var i = 0; i < photos.length; i++) {
                  if (i % 2 !== 0) {
                    photos_updated.push(photos[i])
                  }
                }
              }
              console.log(photos_updated)
              return (
                <div class="w3-col m6">
                <div class="w3-container w3-row-padding w3-card w3-white w3-round" style={{maxWidth:'100%', marginBottom: '2rem', marginLeft: '1rem', marginRight: '1rem'}}>
                      {photos_updated.length > 0 && photos_updated.length < 4 ? 
                      <div class="row-img" style={{margin: '1rem'}}>
                        <div class="column-img">
                          {photos_updated.map(function(image, index) {
                            return (
                                <img class="image-upload" src={"data:image/png;base64," + image} alt="Card image cap" />
                            )}
                          )}
                        </div>
                      </div> : <></>}
                      {photos_updated.length === 4? 
                      <div class="row-img" style={{margin: '1rem'}}>
                        <div class="column-img">
                          <img class="image-upload" src={"data:image/png;base64," + photos_updated[0]} alt="Card image cap" />
                          <img class="image-upload" src={"data:image/png;base64," + photos_updated[1]} alt="Card image cap" />
                        </div>
                        <div class="column-img">
                          <img class="image-upload" src={"data:image/png;base64," + photos_updated[2]} alt="Card image cap" />
                          <img class="image-upload" src={"data:image/png;base64," + photos_updated[3]} alt="Card image cap" />
                        </div>
                      </div> : <></>}
                      {photos_updated.length > 4? 
                      <div class="row-img" style={{margin: '1rem'}}>
                        <div class="column-img">
                          <img class="image-upload" src={"data:image/png;base64," + photos_updated[0]} alt="Card image cap" />
                          <img class="image-upload" src={"data:image/png;base64," + photos_updated[1]} alt="Card image cap" />
                        </div>
                        <div class="column-img">
                          <img class="image-upload" src={"data:image/png;base64," + photos_updated[2]} alt="Card image cap" />
                          <img class="image-upload" src={grey} alt="Card image cap"/>
                        </div>
                      </div> : <></>}
                </div>
                </div>
              )
            })}
          </div>
        </div>

    <Footer />

    </div>
  );
}

export default Lifestyle;
