import React from "react";
//import ReactPlayer from 'react-player'

const Welcome: React.FC = () => {
    return(
        <div className="video-section controls autoplay pd-0">
 <video style ={{width:"100%",height:"auto"}}>
       <source src="https://cdn.shopify.com/s/files/1/1241/4530/files/Slider_ENG.mp4?v=1624947009" 
       type="video/mp4" ></source>
   </video>
   {/*<ReactPlayer url="https://www.youtube.com/watch?v=x6Q7c9RyMzk&list=RDCMUCIx3RWYwikMlDiJeCEUbfEA&start_radio=1"  />*/}
</div>
    );
}
export default Welcome;