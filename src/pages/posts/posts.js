import React from 'react';
import './uploadimage.css'
import ImageUploading from 'react-images-uploading';

import Navbar from '../../components/navbar/navbar';

function Posts() {

  const [images, setImages] = React.useState([]);
  const maxNumber = 20;
  const [interests, setInterests] = React.useState([]);
  const [error, setError] = React.useState(null);

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  const addInterest = () => {
    var interest = document.getElementById("addInterest").value;
    if (interest !== "") {
        if (! interests.includes(interest)) {
            setInterests(oldArray => [...oldArray, interest]);
            document.getElementById("addInterest").value = "";
        }
        // error message here
    }
    console.log(interests)
  }

  const postPosts = () => {
    setError("");
    var post = {author: 'Sandra Leonor', photos: images.map(function(item) {return item["data_url"]}), message: document.getElementById("message").value, interests: interests}

    console.log(post)

    var business = document.getElementById("business").checked
    console.log(business)

    if (post["message"] == "") {
        console.log("message");
        setError("You didn't add a message!")
        return;
    }

    if (post["interests"].length == 0) {
        console.log("interests");
        setError("You didn't add any interests!")
        return;
    }

    let formData = new FormData();

    formData.append("message", post["message"]);
    formData.append("author", post["author"]);
    formData.append("photos", post["photos"]);
    formData.append("interests", post["interests"]);
    formData.append("type", business ? "Business" : "Reflections");
    

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
      })
    }).catch((error) => {
      console.log("error")
    })

    setInterests([]);
    setImages([]);
  }

  return (
    <div className='App back-color' style={{height: '100vh'}}>

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

        <div class="container w3-content" style={{maxWidth:'80%'}}>
            {error !== "" ? 
            <div class="row">
                <h2 class="col-md-4"></h2>
                <h2 class="col-md-4" style={{textAlign: "center", color: "red"}}>{error}</h2>
            </div> : <></>}

            <div class="row">
                <textarea class="form-control" name="paragraph_text" placeholder="Write something..." id="message" rows="8"></textarea>
            </div>

            <div class="row" style={{marginTop: '2rem'}}>
                <div class="col-md-8">
                    <div class="row">
                        <div class="col-md-9">
                            <input class="form-control" id="addInterest" type="text" placeholder="Search.."/>
                        </div>
                        <div class="col-md-3">
                            <button class="button-3" role="button" onClick={addInterest}>Add Interest</button>
                        </div>
                    </div>
                    <div class="row" style={{marginTop: '1rem'}}>
                        <div class="col-md-12">
                            <input type="checkbox" id="business" name="scales"/>
                            <label>Business</label>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="w3-card w3-round w3-white w3-hide-small">
                        <div class="w3-container">
                            <h3>Interests</h3>
                            <div class="w3-row">
                                <p>
                                    <div style={{float: 'left', paddingRight: '3px', paddingBottom: '2px'}}>
                                    {interests.map(function(element) {
                                        console.log(interests)
                                        return <span class="w3-tag w3-small w3-theme" style={{marginLeft: '1rem'}}> {element} </span>
                                    })}
                                    </div>
                                </p>
                            </div>
                        </div>
                        <br />
                    </div>
                </div>
            </div>

            <div class="row" style={{marginTop: '2rem'}}>
                <div class="container w3-card w3-round w3-white w3-hide-small">
                    <h3>Add Images</h3>
                    <div class="row">
                        <ImageUploading
                            multiple
                            value={images}
                            onChange={onChange}
                            maxNumber={maxNumber}
                            dataURLKey="data_url"
                        >
                            {({
                            imageList,
                            onImageUpload,
                            onImageRemove,
                            isDragging,
                            dragProps,
                            }) => (
                            // write your building UI
                            <div className="upload__image-wrapper">
                                <button
                                className="button-upload"
                                style={isDragging ? { color: 'red' } : undefined}
                                onClick={onImageUpload}
                                {...dragProps}
                                >
                                <i class="fa fa-image fa-3x"></i>
                                </button>

                                {imageList.map((image, index) => (
                                <>
                                <div key={index} className="image-item">
                                    <div className="image-item__btn-wrapper">
                                    <button onClick={() => onImageRemove(index)} className="button-upload">&#10060;</button>
                                    </div>
                                    <img src={image['data_url']} alt="" width="100" />
                                </div>
                                </>
                                ))}
                            </div>
                            )}
                        </ImageUploading>
                    </div>
                </div>
            </div>
            <button class="button-3" role="button" style={{marginTop: '2rem'}} onClick={postPosts}>Post</button>
        </div>

    </div>
  );
}

export default Posts;