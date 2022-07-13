import React, { useEffect, useState } from 'react';
import Navbar from '../../components/navbar/navbar';
import logo from '../../logo.svg'

function Texts() {

  const [posts, setPosts] = useState([]);
  const [interests, setInterests] = useState([]);
  const [filteredposts, setFilteredposts] = useState(null);

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

  const postPosts = () => {
    var post = {author: 'Filipe', photos: [], message: 'sim tudo bem', interests: ['Interest 69']}
    // var post = {author: 'Sandra Leonor', photos: [], message: 'ola ines tudo bem ?', interests: ['Interest 1', 'Interest 3']}

    console.log(post)

    let formData = new FormData();

    formData.append("message", post["message"]);
    formData.append("author", post["author"]);
    formData.append("photos", post["photos"]);
    formData.append("interests", post["interests"]);
    

    let resp = fetch('http://localhost:5000/posts/all', {
      method: 'POST',
      body: formData
    }).then((data)=>{
      data.json().then((properties) => {
        console.log(properties)
        if ("error" in properties) {
          console.log("error")
          return
        }

        handleRequest()

      })
    }).catch((error) => {
      console.log("error")
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
          <div class="col-md-9">
            <input class="form-control" id="myInput" type="text" placeholder="Search.." onChange={handleChange}/>
          </div>
          <div class="col-md-2">
            <button class="button-3" role="button"><i class="fa fa-search fa-fw w3-margin-right"></i>Search</button>
          </div>
          <div class="col-md-1">
            <button class="button-3" role="button" onClick={postPosts}>Post</button>
          </div>
        </div>
      </div>

      <div class="w3-container w3-content" style={{maxWidth:'80%', marginTop: '2em'}}>
        <div class="w3-row">

          <div class="w3-col m9">
            {/* <div class="w3-container w3-row-padding w3-card w3-white w3-round" style={{marginRight: '2rem'}}><br />
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
            </div> */}
            {filteredposts === null ? posts.map(function(item) {

              console.log(item)

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

    </div>
  );
}

export default Texts;
