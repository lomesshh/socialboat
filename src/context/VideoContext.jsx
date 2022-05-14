import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const videoContext = createContext();

const VideoProvider = ({ children }) => {
  const [query, setQuery] = useState("");
  const [count, setCount] = useState(1);
  const [videoArr, setVideoArr] = useState([]);

  useEffect(() => {
    (async () =>
      await axios
        .get(
          `https://asia-south1-socialboat-dev.cloudfunctions.net/assignmentVideos?q=${query}&numResults=${count}`
        )
        .then((res) => setVideoArr(res.data.results))
        .catch((error) => console.error(error)))();
  }, [query, count]);

  return (
    <div>
      <videoContext.Provider
        value={{ query, setQuery, count, setCount, videoArr }}
      >
        {children}
      </videoContext.Provider>
    </div>
  );
};

const useVideo = () => useContext(videoContext);

export { useVideo, VideoProvider };
