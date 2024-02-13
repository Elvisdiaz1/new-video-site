import React from "react";
import Menu from "./Menu";
import Side_Videos from "./Side_Videos";
// import video from "../public/videos/test.mp4";

const Main_Page = () => {
  return (
    <div id="main-container">
      <Menu />
      <div>
        <h3>hel</h3>
        <video controls autoPlay={true} muted>
          <source src="videos/test.mp4" type="video/mp4" />
        </video>
      </div>

      <Side_Videos />
    </div>
  );
};

export default Main_Page;
