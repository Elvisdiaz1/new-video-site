import React from "react";
import placeholder from "./images/beach-ocean-sunset copy.gif";
import placeholder2 from "./images/black suit spiderman copy.jpeg";
import placeholder3 from "./images/working on computer copy.jpeg";

const Side_Videos = () => {
  return (
    <div id="side-videos">
      <img className="small-vid" src={placeholder} alt="placeholder 1" />
      <p>Title</p>
      <p>by Creator</p>
      {/* Need to make Creator and Title insertable by the creator */}
      <span> 20 views</span>
      <span> * 5 hours ago</span>
      <img className="small-vid" src={placeholder2} alt="placeholder 2" />
      <p>Titles</p>
      <p>by Creator B</p>
      {/* Need to make Creator and Title insertable by the creator */}
      <span> 50 views</span>
      <span> * 2 hours ago</span>
      <img className="small-vid" src={placeholder3} alt="placeholder 3" />
      <p>Titley</p>
      <p>by Creator C</p>
      {/* Need to make Creator and Title insertable by the creator */}
      <span> 100,863 views</span>
      <span> * 30 mins ago</span>
    </div>
  );
};

export default Side_Videos;
