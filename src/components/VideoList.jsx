import React from "react";
import { VideoCard } from "./VideoCard";
import { useVideo } from "../context/VideoContext";

const VideoList = () => {
  const { count, setCount, videoArr } = useVideo();

  return (
    <div className="video__list--outer">
      <div className="video__heading">
        <h1>VideoList</h1>
        <p>Enter how many results you want Ex. 2 or 3</p>
        <div>
          <button onClick={() => setCount((prev) => prev + 1)}>
            <i class="fa-solid fa-arrow-up-long"></i>
          </button>
          <h3>{count}</h3>
          <button onClick={() => setCount((prev) => prev - 1)}>
            <i class="fa-solid fa-arrow-down-long"></i>
          </button>
        </div>
      </div>
      <div className="video__list">
        {videoArr?.length < 1 && (
          <h2>No Video to display search something !</h2>
        )}
        {videoArr.map((video) => (
          <VideoCard video={video} />
        ))}
      </div>
    </div>
  );
};

export { VideoList };
