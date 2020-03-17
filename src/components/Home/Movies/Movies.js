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

import Movie1 from "./../pictures/movies/movie1.jpg";
import Movie2 from "./../pictures/movies/movie2.jpg";

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
            <div className="circle circle1">
              <img src={Movie1} alt="movie image one" />
            </div>

            <div className="circle circle2">
              <img src={Movie2} alt="movie image two" />
            </div>
            <p>
              Movies have the magical power of suspending our real-life problems
              for at least the duration of the film. Not only that, but movies
              can also take us to distant worlds, full of fantastic characters
              and scenarios. So much so, that sometimes you might forget, that
              those characters are actually just people, and the distant world
              is a film set. The creation of a movie is a real and full-time job
              for the cast and crew. And same as with our lives and jobs, not
              only ordinary but also curious things do happen.
            </p>

            <h3>Find all about your favourite movie!!!</h3>
          </section>
        </article>
      </article>
    </React.Fragment>
  );
}
