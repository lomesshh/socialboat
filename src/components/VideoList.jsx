import React from "react";
import { VideoCard } from "./VideoCard";
import { useVideo } from "../context/VideoContext";

const VideoList = () => {
  const { count, setCount, videoArr, query } = useVideo();

  return (
    <div className="video__list--outer">
      <div className="video__heading">
        <h1>VideoList</h1>
        <p>Select how many results you want</p>
        <div>
          <button onClick={() => setCount((prev) => prev + 1)}>
            <i class="fa-solid fa-arrow-up-long"></i>
          </button>
          <h3>{count}</h3>
          <button
            disabled={count <= 1}
            onClick={() => setCount((prev) => prev - 1)}
          >
            <i class="fa-solid fa-arrow-down-long"></i>
          </button>
        </div>
      </div>
      {query !== "" && (
        <div className="video__list">
          {videoArr?.length < 1 && (
            <h2>No videos to display search something !</h2>
          )}
          {videoArr.map((video) => (
            <VideoCard video={video} />
          ))}
        </div>
      )}
    </div>
  );
};

export { VideoList };
