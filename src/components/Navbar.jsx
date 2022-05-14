import React from "react";
import { useVideo } from "../context/VideoContext";

const Navbar = () => {
  const { query, setQuery } = useVideo();

  return (
    <div>
      <nav>
        <div className="company__logo">
          <img
            src="https://res.cloudinary.com/dgwzpbj4k/image/upload/v1652554000/muscleclub_bxf3ys.png"
            alt="company__logo"
          />
        </div>
        <div className="search__bar">
          <input
            type="search"
            placeholder="Search video here..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <div className="profile__img">
          <img
            src="https://res.cloudinary.com/dgwzpbj4k/image/upload/v1650457646/baatchit/boy_urhxrp.png"
            alt="profile__img"
          />
        </div>
      </nav>
    </div>
  );
};

export { Navbar };
