import React from "react";

const VideoCard = ({ video }) => {
  return (
    <div className="video__card">
      <div className="video__display">
        <video width="320" height="190" controls>
          <source src={video.video} type="video/mp4" />
        </video>
      </div>
      <div className="video__heading">
        <h3>{video.heading}</h3>
      </div>
      <div className="video__tags">
        {video.tags.map((tag) => (
          <p>{tag}</p>
        ))}
      </div>
    </div>
  );
};

export { VideoCard };
