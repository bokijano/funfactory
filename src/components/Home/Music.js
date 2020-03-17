import React from "react";
import "./Home.css";

import Cloud1 from "./pictures/clouds/cloud.png";
import Cloud2 from "./pictures/clouds/cloud2.png";
import Cloud3 from "./pictures/clouds/cloud3.png";

import Music1 from "./pictures/music/music2.jpg";
import Music2 from "./pictures/music/music3.jpg";
import Music3 from "./pictures/music/listen.jpg";

export default function Music() {
  return (
    <React.Fragment>
      <article className="container-cloud">
        <section className="cloud1">
          <img src={Cloud2} alt="second cloud" />
        </section>
        <section>
          <img src={Cloud3} alt="third cloud" />
        </section>
        <section className="cloud2">
          <img src={Cloud1} alt="first cloud" />
        </section>
        <section className="cloud3">
          <img src={Cloud2} alt="second cloud" />
        </section>
        <section className="cloud4">
          <img src={Cloud3} alt="third cloud" />
        </section>
        <section className="cloud7">
          <img src={Cloud3} alt="third cloud" />
        </section>
        <section className="cloud5">
          <img src={Cloud2} alt="second cloud" />
        </section>
        <section className="cloud6">
          <img src={Cloud1} alt="first cloud" />
        </section>
        <section className="cloud7">
          <img src={Cloud2} alt="second cloud" />
        </section>
        <section className="cloud8">
          <img src={Cloud3} alt="third cloud" />
        </section>
        <article className="home-style">
          <section className="music">
            <h1>
              <span>m</span>
              <span>u</span>
              <span>s</span>
              <span>i</span>
              <span>c</span>
            </h1>
            <div className="circle circle1">
              <img src={Music1} alt="band picture" />
            </div>
            <div className="circle circle2">
              <img src={Music2} alt="band picture" />
            </div>
            <div className="circle circle3">
              <img src={Music3} alt="listen picture" />
            </div>
            <p>
              Everybody loves music of one sort or other, some sing or play an
              instrument while others enjoy listening.
            </p>
            <p>
              Dopamine is a feel-good chemical released by the brain. This
              chemical is directly involved in motivation, as well as addiction.
              These studies found a biological explanation for why music always
              has been such a huge part of emotional events around the world
              since the beginning of human history.
            </p>
            <p>
              Favorite songs are often context-dependent. Even though many
              people often change their favorite song depending on the most
              recent releases, it is proven that long-lasting preferences are
              due mainly to an emotional attachment to a memory associated with
              the song.
            </p>
            <h3>Find your favourite song on our site!!!</h3>
          </section>
        </article>
      </article>
    </React.Fragment>
  );
}
