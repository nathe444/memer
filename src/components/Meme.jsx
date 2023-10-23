import React from "react"
import { useState } from "react";

import object from "./data"

function Meme(){

  
    let random=Math.floor(Math.random()*100);
    let array=object.data.memes;

    let randomUrl=array[random].url;
  

  // let [url,setUrl]=useState("")

  let [meme,setMeme]=useState({
    topText:"",
    bottomText:"",
    randomImage:randomUrl
  })

  const [allMemeImages, setAllMemeImages] =useState(object)

  function getUrl(event){
    setMeme((prevMeme)=>{
      return {
        ...prevMeme,
        randomImage:randomUrl,  
      }
    })
  }

  console.log(meme);

  function handelChange(event){
    setMeme((prevMeme)=>{
      return {
        ...prevMeme,
        [event.target.name]:event.target.value,
      }
  } )}

  return(
  <div className="meme-container">

    <div>
    <div className="input-container">
      <input  className="input" placeholder="Top Text" name="topText" onChange={handelChange} value={meme.topText}/>


      <input  className="input" placeholder="Bottom text" name="bottomText" onChange={handelChange}
      value={meme.bottomText}/>
    </div>
   
    <button onClick={getUrl}>Get a new meme image 🖼</button>
    </div>


    <p className="top-text">{meme.topText}</p>
    <p className="bottom-text">{meme.bottomText}</p>
    
     <img src={meme.randomImage} alt="" className="meme-image"/>
    

    
  </div>
  )
}

export default Meme