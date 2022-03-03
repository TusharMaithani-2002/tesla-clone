import React from 'react'
import Fade from 'react-reveal/Fade'
// import styled from "styled-components"
function Section(props) {
   console.log(props);
//    let mystyle = {
//        backgroundImage: `url("public/images/model-3.jpg")`
//    }
  
  return (

     <div id="wrap" style={{
        //  backgroundImage: `url('${props.image}')`
        backgroundImage: `url(${props.image})`,
        
     }}>
       <Fade bottom>

        <div id="item-text">
            <h1>{props.title}</h1>
            <p>{props.description}</p>
        </div>
        {/* <div className="image-conatainer">
            <img src={props.image} alt="" height="100px" width = "120px"/>
        </div> */}
        <div id="button-grp">
         <button id="left-btn" className="my-btn">
             Custom Order
         </button>
         <button id="right-btn" className="my-btn">
             Existing Invetory
         </button>     
        </div>
       
        </Fade>

     
   </div>
   
  )
}

export default Section

// const Wrap = styled.div`
//  padding-top: 8vh;
//  height:100vh;
//  width:100vw;
//  background-color: orange; 
//  background-position: center;
//  background-repeat: no-repeat;

//  background-image: ${props => `url("/pulbic/images/${props.bgimg}")`};
//  background-size: cover;
//  display: flex;
//  justify-content: space-around;
//  align-items: center;
//  flex-direction: column;
// `