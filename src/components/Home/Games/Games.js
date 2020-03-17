import React from "react";
import "./Games.css";

import Games1 from "./pictures/games1.jpg";
import Games2 from "./pictures/games2.jpg";

export default function Games() {
  return (
    <React.Fragment>
      <article className="container-pulse">
        <section className="back-pulse">
          <div className="pulse">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </section>
        <section className="games-style">
          <section className="movies">
            <h1>
              <span>g</span>
              <span>a</span>
              <span>m</span>
              <span>e</span>
              <span>s</span>
            </h1>
            <div className="circle circle1">
              <img src={Games1} alt="Games image one" />
            </div>

            <div className="circle circle2">
              <img src={Games2} alt="Games image two" />
            </div>
            <p>
              Video game lovers seem to have an appetite that seems quite
              insatiable. This is why game developers are working odd hours
              putting in the effort in trying to come up with products that will
              please their consumers. Over the years, games have evolved
              tremendously offering a different type of experiences for
              experienced players as well as novices. The market has also
              experienced growth from a simple niche market to one that brings
              in billions of revenue on a yearly basis.
            </p>

            <h3>Play same games on our page!!!</h3>
          </section>
        </section>
      </article>
    </React.Fragment>
  );
}
