import React, { useEffect, useState } from 'react';
import Footer from '../../components/footer/footer';
import Navbar from '../../components/navbar/navbar';
import './texts.css'
// import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { useLocation } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalComp({ closeModal, data }) {

  console.log("modal here")
  console.log(data)

  var inters = []

  if (data[5].length !== 0) {
    inters = data[5].split(",")
  }

  var indents = [];
    for (var interest in inters) {
      indents.push(<span style={{textAlign: 'left', padding: "0 5px 0 5px"}}> {inters[interest]} </span>);
    }

  return (
    <Modal
      show={true}
      onHide={() => closeModal()}
      size="lg"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          <h3>{data[1]} - {data[2]}</h3>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p style={{fontSize: 18}}>
          {data[3]}
        </p>
      </Modal.Body>
      <Modal.Footer>
        {indents}
        <Button onClick={closeModal}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function Texts() {

  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");
  const [interests, setInterests] = useState([]);
  const [filteredposts, setFilteredposts] = useState(null);

  const [present_item, setPresentItem] = useState([]);

  const location = useLocation();

  const [modal, setModal] = useState({ show: false, data: null });

  const handleClose = () => {
    setModal({ show: false, data: null });
  };

  useEffect(() => {
    console.log("Location changed");
    handleRequest()
  }, [location]);

  function handleRequest() {
    setError("")
    setFilteredposts(null)

    // get all posts
    console.log("get posts")
    var db = "all";
    if (location["hash"] === "#reflections") {
      db = "Reflections"
    }
    if (location["hash"] === "#business") {
      db = "Business"
    }

    fetch('http://localhost:5000/posts/'+db, {
      method: 'GET'
    }).then((data)=>{
      data.json().then((properties) => {
        if ("error" in properties) {
          console.log("error")
          setPosts([[-1, "Error Handling the data", "", "Please refresh the page and if the error subsits please contact the administartor", [], []]]);
          setError("error")
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
      setError("error")
    })

  }

  useEffect(() => {
    if (posts.length >= 2)
      setPresentItem([posts[posts.length-1], posts[posts.length-2]])
    else if (posts.length == 1)
      setPresentItem([posts[posts.length-1]])
    else 
      setPresentItem([])
  }, [posts]);

  useEffect(() => {
    handleRequest()
  }, [])

  function searchFor(item) {
    setError("")

    if (item === "All") {
      handleRequest()
      return;
    }


    setFilteredposts(null)

    var oldarray = posts
    
    let old_array_filtered = oldarray.filter(function(element) {
        if (element[5].split(",").includes(item))
          return element });

    setFilteredposts(old_array_filtered)
    return;
  }

  function ItemMap(item) {
    var inters = []
    var photos = []

    if (item[5].length !== 0) {
      inters = item[5].split(",")
    }
    if (item[4].length !== 0) {
      photos = item[4].split(",")
    }

    var photos_updated = []
    if (photos.length !== 0) {
      for (var i = 0; i < photos.length; i++) {
        if (i % 2 !== 0) {
          photos_updated.push(photos[i])
        }
      }
    }

    var indents = [];
    for (var interest in inters) {
      indents.push(<span style={{textAlign: 'left', padding: "0 5px 0 5px"}}> {inters[interest]} </span>);

      if ( ! interests.includes(inters[interest])) {
        var oldarray = interests
        oldarray.push(inters[interest])
        setInterests(oldarray)
      }
    }

    return (
      <div class="w3-row">
        <div class="w3-col m9">
          <div class="w3-container" style={{borderRight: "2px solid black", cursor: "pointer"}} onClick={() => setModal({ show: true, data: item })}>
            <h3 style={{textAlign: 'right'}}> {item[1]} </h3>
            <h4 style={{textAlign: 'right', opacity: 0.6}}> {item[2]} - {item[6]}</h4>
            <p class="w3-right"> {item[3].length <= 150 ? item[3] : item[3].substring(0,150) + "..."} </p>
            <br />
            <hr class="w3-clear" style={{border: "1px solid black", marginBottom: '1rem'}}/>
          </div>
        </div>
        <div class="w3-col m3" style={{height: "100%"}}>
          <div class="w3-container">
            <h5 style={{textAlign: 'left', fontSize: 17, paddingLeft: "2rem"}}> 
              {indents} 
            </h5>
            <hr class="w3-clear" style={{border: "1px solid black", marginBottom: '1rem'}}/>
          </div>
        </div>
      </div>
    )
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

      <h1 style={{fontSize: 40}}>Articles</h1>

      {/* <h4>Search for a specific text!</h4> */}
      {/* <div class="container" style={{maxWidth:'100%'}}>
        <div class="row">
          <div class="col-md-10">
            <input class="form-control" id="myInput" type="text" placeholder="Search.." onChange={handleChange}/>
          </div>
          <div class="col-md-2">
            <button class="button-3" role="button"><i class="fa fa-search fa-fw w3-margin-right"></i>Search</button>
          </div>
        </div>
      </div> */}

      {error === "" ?
      <div class="w3-container w3-content" style={{maxWidth:'80%', marginTop: '2rem'}}>
        <div class="w3-row">
          <div class="w3-col m4">
            <h2 style={{textAlign: 'right', fontSize: 35, paddingRight: "2rem"}}> Recent Articles </h2>
            <h3 style={{textAlign: 'right', fontSize: 20, paddingRight: "2rem"}}> The last articles that were added </h3>
          </div>
          <div class="w3-col m8 trans">
            {present_item.map(function(item) {
              return (
                  <div class="w3-container" style={{borderLeft: "2px solid black", cursor: "pointer"}} onClick={() => setModal({ show: true, data: item })}>
                    <h3 style={{textAlign: 'left'}}> {item[1]} </h3>
                    <h4 style={{textAlign: 'left', opacity: 0.6}}> {item[2]} - {item[6]}</h4>
                    <p class="w3-left"> {item[3].length <= 130 ? item[3] : item[3].substring(0,130) + "..."} </p>
                    <br />
                    <hr class="w3-clear" style={{border: "1px solid black", marginBottom: '1rem'}}/>
                  </div>
              )
            })}
          </div>
        </div>
      </div>
      : <></> }

      <button class="btn-interest" onClick={() => searchFor("All")}>All</button>
      {interests.map(function(item) {
        return (
          <button class="btn-interest" onClick={() => searchFor(item)}>{item}</button>
        )
      })}


      {modal.show && modal.data && <ModalComp closeModal={handleClose} data={modal.data} />}

      <div class="w3-container w3-content" style={{maxWidth:'80%', marginTop: '2rem'}}>
        <div class="w3-row">
            {filteredposts === null ? posts.map(function(item) {return ItemMap(item)}) : filteredposts.map(function(item) {return ItemMap(item)})}
        </div>
      </div>

      <Footer />

    </div>
  );
}

export default Texts;


// {photos_updated.length !== 0 ?
//   <Slide>
//     {photos_updated.map((image, index)=> (
//       <div className="each-slide" key={index}>
//         <img class="image-upload" src={"data:image/png;base64," + image} alt="Card image cap" />
//       </div>
//     ))} 
//   </Slide>: <>
//   </>}