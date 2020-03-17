import React from "react";

import Music from "./Music";
import Movies from "./Movies/Movies";
import Games from "./Games/Games";

function Home() {
  return (
    <React.Fragment>
      <div className="home-display">
        <div className="music-display">
          <Music />
        </div>
        <div className="movies-display">
          <Movies />
          <Games />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Home;
