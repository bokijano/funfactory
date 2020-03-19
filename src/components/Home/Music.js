import React, { Component } from "react";
import "./Home.css";

import { ProductConsumer } from "./../../Context";

export default class Music extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => (
          <React.Fragment>
            <article className="container-cloud">
              <section className="cloud1">
                <img src={value.cloud[1]} alt="second cloud" />
              </section>
              <section>
                <img src={value.cloud[2]} alt="third cloud" />
              </section>
              <section className="cloud2">
                <img src={value.cloud[0]} alt="first cloud" />
              </section>
              <section className="cloud3">
                <img src={value.cloud[1]} alt="second cloud" />
              </section>
              <section className="cloud4">
                <img src={value.cloud[2]} alt="third cloud" />
              </section>
              <section className="cloud7">
                <img src={value.cloud[2]} alt="third cloud" />
              </section>
              <section className="cloud5">
                <img src={value.cloud[1]} alt="second cloud" />
              </section>
              <section className="cloud6">
                <img src={value.cloud[0]} alt="first cloud" />
              </section>
              <section className="cloud7">
                <img src={value.cloud[1]} alt="second cloud" />
              </section>
              <section className="cloud8">
                <img src={value.cloud[2]} alt="third cloud" />
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
                    <img src={value.musicPict[0]} alt="band picture" />
                  </div>
                  <div className="circle circle2">
                    <img src={value.musicPict[1]} alt="band picture" />
                  </div>
                  <div className="circle circle3">
                    <img src={value.musicPict[2]} alt="listen picture" />
                  </div>
                  <p>
                    Everybody loves music of one sort or other, some sing or
                    play an instrument while others enjoy listening.
                  </p>
                  <p>
                    Dopamine is a feel-good chemical released by the brain. This
                    chemical is directly involved in motivation, as well as
                    addiction. These studies found a biological explanation for
                    why music always has been such a huge part of emotional
                    events around the world since the beginning of human
                    history.
                  </p>
                  <p>
                    Favorite songs are often context-dependent. Even though many
                    people often change their favorite song depending on the
                    most recent releases, it is proven that long-lasting
                    preferences are due mainly to an emotional attachment to a
                    memory associated with the song.
                  </p>
                  <h3>
                    Search for favourite song and other content on our page!!!
                  </h3>
                </section>
              </article>
            </article>
          </React.Fragment>
        )}
      </ProductConsumer>
    );
  }
}
