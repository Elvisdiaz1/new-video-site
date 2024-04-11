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
        <h1>hel</h1>
        <video controls autoPlay={true} muted id="video">
          <source src="videos/test.mp4" type="video/mp4" />
        </video>
        <div id="description-container">
          <p>Published on 4/23/24</p>
          <p id="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            itaque reprehenderit impedit esse enim? Cum dolor magnam
            voluptatibus magni! Aliquam ad totam hic explicabo necessitatibus.
          </p>
        </div>
        <Comments />
      </div>

      <Side_Videos />
    </div>
  );
};

export default Main_Page;
