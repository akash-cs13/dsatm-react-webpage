import './styles.css';
import {  Link, Route } from 'react-router-dom';
import React, { useRef, useState, useEffect, Component } from 'react'
import { render } from "react-dom";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import Homebtn from './Homebtn';
import Exitbtn from './Exitbtn';
import Searchdata from './Searchlistitmes.json'


import * as tf from "@tensorflow/tfjs";
import Webcam from "react-webcam";
import { nextFrame } from "@tensorflow/tfjs";
import {drawRect} from "./utilities"; 


function Search() {
  
  const [filterData, setFileredData] = useState([]);

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    const newFilter = Searchdata.filter((value)=>{
      return value.item.toLowerCase().includes(searchWord.toLowerCase());
    });
    setFileredData(newFilter);
  };


  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  // Main function
  const runCoco = async () => {
    // 3. TODO - Load network 
    const net = await tf.loadGraphModel('https://livelong.s3.au-syd.cloud-object-storage.appdomain.cloud/model.json')
    
    // Loop and detect hands
    setInterval(() => {
      detect(net);
    }, 16.7);
  };

  const detect = async (net) => {
    // Check data is available
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      // Get Video Properties
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      // Set video width
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      // Set canvas height and width
      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      // 4. TODO - Make Detections
      const img = tf.browser.fromPixels(video)
      const resized = tf.image.resizeBilinear(img, [640,480])
      const casted = resized.cast('int32')
      const expanded = casted.expandDims(0)
      const obj = await net.executeAsync(expanded)
      
      const boxes = await obj[4].array()
      const classes = await obj[5].array()
      const scores = await obj[6].array()
    
      // Draw mesh
      const ctx = canvasRef.current.getContext("2d");

      // 5. TODO - Update drawing utility
      // drawSomething(obj, ctx)  
      requestAnimationFrame(()=>{drawRect(boxes[0], classes[0], scores[0], 0.9, videoWidth, videoHeight, ctx)}); 

      tf.dispose(img)
      tf.dispose(resized)
      tf.dispose(casted)
      tf.dispose(expanded)
      tf.dispose(obj)

    }
  };

  useEffect(()=>{runCoco()},[]);






  

  return (

    <div >
        <div className='webcam-box'>
        <Webcam
          ref={webcamRef}
          muted={true} 
          className="webcam"
        />

        </div>
       


        <div className="search">
            <div className="search-comp">
                <input type="text" className="search-bar-txt" onChange={handleFilter}/>
                {/* <button className="mainpagebtn searchbtn" ><i className="fa-solid fa-magnifying-glass"></i></button>  */}
            </div>
            { filterData.length != 0 && (
            <div className="search-results">
              {filterData.map((value, key)=>{
                return <Link className='searchitems' to={value.link}>
                  <p>
                    {value.item}
                  </p>
              </Link>; 

              })}
            </div>
            )}
        </div>

    

 
        <Homebtn />
        <Exitbtn />
    </div>
  )
}

export default Search