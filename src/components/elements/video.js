import React, { Component } from "react";
import ReactPlayer from "react-player";

class Video extends Component {
  render() {
    return (
      <div className="player-wrapper">
        <ReactPlayer
          className="react-player fixed-bottom"
          muted={true}
          loop={true}
          playing={true}
          playsinline={true}
          url="./assets/movie/video.MP4"
          width="100%"
          height="100%"
          controls={false}
        />
      </div>
    );
  }
}

export default Video;
