import React from "react";
import Menu from "./Menu";
import Side_Videos from "./Side_Videos";
import Comments from "./Comments";
import user from "./images/dummy-user-pic.jpg";
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
        <div id="viewer-interaction">
          <div id="viewer-interaction-first-half">
            <img src={user} alt="account user" />
            <div id="uploader-info">
              <h5>Jan Dae</h5>
              <p> 1,352 Subscribers</p>
            </div>
            <button id="subscribe-button">Subscribe</button>
          </div>

          <div id="viewer-interaction-second-half">
            <p id="view-count">25,935 views</p>
            <div id="like-dislike-button-container">
              <button id="like-button">Like</button>
              <button id="dislike-button">Dislike</button>
            </div>
          </div>
        </div>

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
