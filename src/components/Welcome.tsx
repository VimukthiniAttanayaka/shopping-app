import React from "react";

const Welcome: React.FC = () => {
    return(
        <div className="video-section controls autoplay pd-0">
            <video style ={{width:"100%",height:"auto"}}>
                <source src="https://cdn.shopify.com/s/files/1/1241/4530/files/Slider_ENG.mp4?v=1624947009" 
                type="video/mp4" ></source>
            </video>
        </div>
    );
}
export default Welcome;