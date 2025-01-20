import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { introdata, meta } from "../../content_option";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <HelmetProvider>
      <section id="home" className="home">
        <Helmet>
          <meta charSet="utf-8" />
          <title> {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <div className="intro_sec d-block d-lg-flex align-items-center ">
          <div
            className="h_bg-image order-1 order-lg-2 h-100 "
            style={{ backgroundImage: `url(${introdata.your_img_url})` }}
          ></div>
          <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
            <div className="align-self-center ">
              <div className="intro mx-auto">
                <h2 className="mb-1x">{introdata.title}</h2>
                <h1 className="fluidz-48 mb-1x">
                  <Typewriter
                    options={{
                      strings: [
                        introdata.animated.first,
                        introdata.animated.second,
                        introdata.animated.third,
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 10,
                    }}
                  />
                </h1>
                <p className="mb-1x">{introdata.description}</p>
                <div className="intro_btn-action pb-5">
                  <Link to="/portfolio" className="text_2">
                    <div id="button_p" className="ac_btn btn ">
                      My Portfolio
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                  <Link to="/contact">
                    <div id="button_h" className="ac_btn btn">
                      Contact Me
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                  <a
                    href="https://drive.google.com/file/d/1844xOaM6_5Z0gSWVBe4DE_RhzBsCEiGZ/view?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                  <div id="button_h" className="ac_btn btn">
                       My Resume
                  <div className="ring one"></div>
                  <div className="ring two"></div>
                  <div className="ring three"></div>
                  </div>
                     <a
  href="https://drive.google.com/file/d/1844xOaM6_5Z0gSWVBe4DE_RhzBsCEiGZ/view?usp=drive_link"
  target="_blank"
  rel="noopener noreferrer"
>
  <div id="button_h" class="ac_btn btn">
    My Resume
    <div class="ring one"></div>
    <div class="ring two"></div>
    <div class="ring three"></div>
  </div>
</a>

<a
  href="https://drive.google.com/uc?export=download&id=1844xOaM6_5Z0gSWVBe4DE_RhzBsCEiGZ"
  target="_blank"
  rel="noopener noreferrer"
>
  <div id="button_d" class="ac_btn btn">
    Download Resume
    <div class="ring one"></div>
    <div class="ring two"></div>
    <div class="ring three"></div>
  </div>
</a>

</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </HelmetProvider>
  );
};
