import React, { useEffect, useState } from 'react';
import Footer from '../../components/footer/footer';
import Navbar from '../../components/navbar/navbar';
import logo from '../../logo.svg'
import './texts.css'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

function Texts() {

  const [posts, setPosts] = useState([]);
  const [interests, setInterests] = useState([]);
  const [filteredposts, setFilteredposts] = useState(null);

  function handleRequest() {
  // get all posts
  console.log("get posts")
  console.log(localStorage.getItem("Business"))
  console.log(localStorage.getItem("Business"))

    let resp = fetch('http://localhost:5000/posts/all', {
      method: 'GET'
    }).then((data)=>{
      data.json().then((properties) => {
        console.log(properties)
        if ("error" in properties) {
          console.log("error")
          setPosts([[-1, "Error Handling the data", "", "Please refresh the page and if the error subsits please contact the administartor", [], []]]);
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
      setPosts([[-1, "Error Handling the data", "", "Please refresh the page and if the error subsits please contact the administartor", [], []]]);
    })
  }

  useEffect(() => {
    handleRequest()
  }, [])

  function handleChange(event) {
    let input = event.target.value
    setFilteredposts(null)
    if (input === "") {
      handleRequest()
      return;
    }
    var oldarray = posts
    let old_array_filtered = oldarray.filter(function(element) {
      if (element[3].toLowerCase().includes(input.toLowerCase()))
        return element });

    console.log(old_array_filtered)

    if (old_array_filtered.length === 0) {
      setFilteredposts([[-1, "Post Not Found", "", "We didn't find no posts with a message like that, please review what was written and try again", [], []]]);
      return;
    }

    setFilteredposts(old_array_filtered)
    return;
  }

  return (
    <div className='App back-color'>

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
      <link href='https://fonts.googleapis.com/css?family=Lato' rel='stylesheet' type='text/css' />

      <br />

      <div class="container" style={{maxWidth:'100%', marginTop: '10rem'}}>
        <div class="row">
          <div class="col-md-10">
            <input class="form-control" id="myInput" type="text" placeholder="Search.." onChange={handleChange}/>
          </div>
          <div class="col-md-2">
            <button class="button-3" role="button" onClick={() => {
              console.log(localStorage.getItem("Business"))
              console.log(localStorage.getItem("Reflections"))
            }}><i class="fa fa-search fa-fw w3-margin-right"></i>Search</button>
          </div>
        </div>
      </div>

      <div class="w3-container w3-content" style={{maxWidth:'80%', marginTop: '2em'}}>
        <div class="w3-row">

          <div class="w3-col m9">
            {filteredposts === null ? posts.map(function(item) {

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

                if ( ! interests.includes(inters[interest])) {
                  console.log(inters[interest])
                  console.log(interests)
                  var oldarray = interests
                  oldarray.push(inters[interest])
                  setInterests(oldarray)
                  console.log(interests)
                }
              }

              return (<div class="w3-container w3-row-padding w3-card w3-white w3-round" style={{marginRight: '2rem', marginBottom: '2rem'}}><br />
              <img src={logo} alt="Avatar" class="w3-left w3-circle w3-margin-right" style={{width:'60px'}} />
              <span class="w3-right w3-opacity"> {item[2]} </span>
              <h4 class="w3-left"> {item[1]} </h4><br />
              <hr class="w3-clear" />
              <p> {item[3]} </p>
              {photos_updated.length !== 0 ?
                <Slide>
                  {photos_updated.map((image, index)=> (
                    <div className="each-slide" key={index}>
                      <img class="image-upload" src={"data:image/png;base64," + image} alt="Card image cap" />
                    </div>
                  ))} 
                </Slide>: <>
                </>}
              <p>
                <div style={{float: 'left', paddingRight: '3px', paddingBottom: '2px'}}>
                  {indents}
                </div>
              </p>
              <br />
            </div>)
            }) : filteredposts.map(function(item) {

              if (item[5].length !== 0) {
                var inters = item[5].split(",")
              }
              if (item[4].length !== 0) {
                var photos = item[4].split(",")
              }

              var indents = [];
              for (var interest in inters) {
                indents.push(<span class="w3-tag w3-small w3-theme" style={{marginLeft: '1rem'}}> {inters[interest]} </span>);

                if ( ! interests.includes(inters[interest])) {
                  console.log(inters[interest])
                  console.log(interests)
                  var oldarray = interests
                  oldarray.push(inters[interest])
                  setInterests(oldarray)
                  console.log(interests)
                }
              }

              return (<div class="w3-container w3-row-padding w3-card w3-white w3-round" style={{marginRight: '2rem', marginBottom: '2rem'}}><br />
              <img src={logo} alt="Avatar" class="w3-left w3-circle w3-margin-right" style={{width:'60px'}} />
              <span class="w3-right w3-opacity"> {item[2]} </span>
              <h4 class="w3-left"> {item[1]} </h4><br />
              <hr class="w3-clear" />
              <p> {item[3]} </p>
              <p>
                <div style={{float: 'left', paddingRight: '3px', paddingBottom: '2px'}}>
                  {indents}
                </div>
              </p>
              <br />
            </div>)
            })}
          </div>

          <div class="w3-col m3">
            <div class="w3-card w3-round w3-white w3-hide-small">
              <div class="w3-container">
                <h3>Interests</h3>
                <div class="w3-row">
                  <p>
                    <div style={{float: 'left', paddingRight: '3px', paddingBottom: '2px'}}>
                      {interests.map(function(element) {
                        return <span class="w3-tag w3-small w3-theme" style={{marginLeft: '1rem'}}> {element} </span>
                      })}
                    </div>
                  </p>
                </div>
                <div class="w3-row">
                  <button class="button-3" role="button" style={{width: '50%', marginBottom: '1rem', marginTop: '1rem'}}><i class="fa fa-filter fa-fw w3-margin-right"></i>Filter</button>
                </div>
              </div>
            </div>
            <br />
          </div>

        </div>
      </div>

      <Footer />

    </div>
  );
}

export default Texts;
