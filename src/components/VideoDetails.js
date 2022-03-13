import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return (
      <div className="ui segment">
        <p></p>
        <div className="ui active dimmer">
          <div className="ui loader"></div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
