import React from "react";

const VideoCard = ({ video }) => {
  return (
    <div className="video__card">
      <div className="video__display">
        <iframe
          frameborder="0"
          name="muscle_video"
          src={video.video}
          title="video"
        ></iframe>
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
