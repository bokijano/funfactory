import React from "react";
import "./Home.css";
import Cloud1 from "./pictures/cloud.png";
import Cloud2 from "./pictures/cloud2.png";
import Cloud3 from "./pictures/cloud3.png";

import Music1 from "./pictures/music/music2.jpg";
import Music2 from "./pictures/music/music3.jpg";

function Home() {
  return (
    <React.Fragment>
      <article className="container-cloud">
        <section className="cloud1">
          <img src={Cloud2} alt="second cloud" />
        </section>
        <section className="cloud2">
          <img src={Cloud1} alt="first cloud" />
        </section>
        <section className="cloud3">
          <img src={Cloud2} alt="second cloud" />
        </section>
        <section>
          <img src={Cloud1} alt="first cloud" />
        </section>
        <section className="cloud4">
          <img src={Cloud3} alt="third cloud" />
        </section>
        <section>
          <img src={Cloud2} alt="second cloud" />
        </section>
        <article className="home-style">
          <section className="music">
            <div className="circle circle1">
              <img src={Music1} alt="band picture" />
            </div>
            <div className="circle circle2">
              <img src={Music2} alt="band picture" />
            </div>
            <h1>Music</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet,
              nisi nemo distinctio fuga magnam repellat et molestiae natus illo
              maxime quisquam veniam itaque deserunt optio? Obcaecati animi
              ducimus assumenda, iusto pariatur veniam at quia doloremque minus
              totam, consectetur labore libero qui earum reiciendis facilis.
              Enim quam temporibus impedit laudantium? Iusto?
            </p>
          </section>
          <section className="movies"></section>
          <section className="games"></section>
        </article>
      </article>
    </React.Fragment>
  );
}

export default Home;
