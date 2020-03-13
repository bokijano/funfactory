import React from "react";
import "./Home.css";

import Music from "./Music";
import Movies from "./Movies";
import Games from "./Games";

function Home() {
  return (
    <React.Fragment>
      <div className="home-display">
        <div className="music-display">
          <Music />
        </div>
        <div className="movies-display">
          <Movies />
        </div>
        <div className="games-display">
          <Games />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Home;
