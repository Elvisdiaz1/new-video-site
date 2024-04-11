import React from "react";
import Menu from "./Menu";
import Side_Videos from "./Side_Videos";
import Comments from "./Comments";
// import video from "../public/videos/test.mp4";

const Main_Page = () => {
  return (
    <div id="main-container">
      <Menu />
      <div id="video-body">
        <h3>hel</h3>
        <video controls autoPlay={true} muted id="video">
          <source src="videos/test.mp4" type="video/mp4" />
        </video>
        <Comments />
      </div>

      <Side_Videos />
    </div>
  );
};

export default Main_Page;
