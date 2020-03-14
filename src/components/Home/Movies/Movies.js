import React from "react";

import "./Movies.css";

import Leaf from "./../pictures/leaves/leaf.png";
import Leaf1 from "./../pictures/leaves/leaf1.png";
import Leaf2 from "./../pictures/leaves/leaf2.png";
import Leaf3 from "./../pictures/leaves/leaf3.png";
import Leaf4 from "./../pictures/leaves/leaf4.png";
import Leaf5 from "./../pictures/leaves/leaf5.png";
import Leaf6 from "./../pictures/leaves/leaf6.png";
import Leaf7 from "./../pictures/leaves/leaf7.png";

export default function Movies() {
  return (
    <React.Fragment>
      <article className="container-leaves">
        <section className="back-leaves">
          <div className="set-leaves">
            <div>
              <img src={Leaf} alte="leaf one" />
            </div>
            <div>
              <img src={Leaf1} alt="leaf two" />
            </div>
            <div>
              <img src={Leaf2} alt="leaf three" />
            </div>
            <div>
              <img src={Leaf3} alt="leaf four" />
            </div>
            <div>
              <img src={Leaf4} alt="leaf five" />
            </div>
            <div>
              <img src={Leaf5} alt="leaf six" />
            </div>
            <div>
              <img src={Leaf6} alt="leaf even" />
            </div>
            <div>
              <img src={Leaf7} alt="leaf eight" />
            </div>
            <div>
              <img src={Leaf5} alt="leaf eight" />
            </div>
            <div>
              <img src={Leaf6} alt="leaf nine" />
            </div>
          </div>
        </section>

        <section className="back-leaves">
          <div className="set-leaves set-leaves2">
            <div>
              <img src={Leaf} alte="leaf one" />
            </div>
            <div>
              <img src={Leaf1} alt="leaf two" />
            </div>
            <div>
              <img src={Leaf2} alt="leaf three" />
            </div>
            <div>
              <img src={Leaf3} alt="leaf four" />
            </div>
            <div>
              <img src={Leaf4} alt="leaf five" />
            </div>
            <div>
              <img src={Leaf5} alt="leaf six" />
            </div>
            <div>
              <img src={Leaf6} alt="leaf even" />
            </div>
            <div>
              <img src={Leaf7} alt="leaf eight" />
            </div>
            <div>
              <img src={Leaf5} alt="leaf eight" />
            </div>
            <div>
              <img src={Leaf6} alt="leaf nine" />
            </div>
          </div>
        </section>

        <article className="movies-style">
          <section className="movies">
            <h1>
              <span>m</span>
              <span>o</span>
              <span>v</span>
              <span>i</span>
              <span>e</span>
              <span>s</span>
            </h1>
          </section>
        </article>
      </article>
    </React.Fragment>
  );
}
