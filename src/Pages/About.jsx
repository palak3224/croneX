import React from "react";
import { AboutImg, HomeVid3 } from "../Components/Image";
import AboutComponent from "../Components/About";
import Achievements from "../Components/Achievements";
import TechStack from "../Components/TechStack/TechStack";

const About = () => {
  return (
    <>
      <main className="main-wrapper">
        <header className="section_header">
          <div className="background-border_wrapper">
            <img
              loading="lazy"
              src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67ff857be08695343437f37f_product_hero_left_Box.avif"
              alt=""
              className="background-border_left"
            />
            <img
              loading="lazy"
              src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67ff857b97f89d74677594e7_product_hero_right_box.avif"
              alt=""
              className="backhground_border_right"
            />
          </div>
          <div className="padding-global">
            <div className="container-large">
              <div className="header_component">
                <div className="padding-section-small">
                  <div className="w-layout-grid header_content _1-5-1">
                    <div className="header_content-left">
                      <div
                        slide-in-header=""
                        className="tag"
                        style={{
                          opacity: 1,
                          visibility: "inherit",
                          translate: "none",
                          rotate: "none",
                          scale: "none",
                          transform: "translate(0px, 0px)",
                        }}
                      >
                        Innovation. Intelligence. Impact.
                      </div>
                      <div className="spacer-1-25rem"></div>
                      <h1
                        slide-in-header=""
                        className="heading-style-h3 z-index-1"
                        style={{
                          opacity: 1,
                          visibility: "inherit",
                          translate: "none",
                          rotate: "none",
                          scale: "none",
                          transform: "translate(0px, 0px)",
                        }}
                      >
                        <span className="text-gradient-grey"> The Core of</span>{" "}
                        <span className="text-gradient-blue">croneX Tech</span>
                      </h1>
                      <div className="spacer-xsmall"></div>
                      <p
                        slide-in-header=""
                        className="text-size-medium"
                        style={{
                          opacity: 1,
                          visibility: "inherit",
                          translate: "none",
                          rotate: "none",
                          scale: "none",
                          transform: "translate(0px, 0px)",
                        }}
                      >
                        croneX Tech is a premier IT, Cloud, and AI solutions
                        provider, specializing in FinTech innovations across
                        Mutual Funds, Stock Market, Insurance, and Transaction
                        Systems. With a team of industry experts and
                        cutting-edge technologies, we deliver scalable, secure,
                        and intelligent solutions that empower businesses to
                        thrive in the digital era. Our commitment to excellence,
                        innovation, and client success positions croneX Tech as
                        a trusted partner for organizations seeking
                        transformative FinTech solutions globally.
                      </p>
                      <div className="spacer-large"></div>
                      <div
                        slide-in-header=""
                        className="button-group"
                        style={{
                          opacity: 1,
                          visibility: "inherit",
                          translate: "none",
                          rotate: "none",
                          scale: "none",
                          transform: "translate(0px, 0px)",
                        }}
                      >
                        <a
                          data-wf--button-primary--variant="base"
                          href="/contact"
                          className="button-primary w-inline-block"
                        >
                          <div className="button_content">
                            <div className="text-size-regular">Book a Demo</div>
                            <div className="arrow">
                              <div className="icon-embed-custom1 w-embed">
                                <svg
                                  className="arrow_svg"
                                  currentwidth=" 100%"
                                  currentheight=" 100%"
                                  viewBox="0 0 20 20"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M10.6666 15.6667C10.2064 15.6667 9.83337 15.2936 9.83337 14.8333C9.83337 14.3731 10.2064 14 10.6666 14C11.1269 14 11.5 14.3731 11.5 14.8333C11.5 15.2936 11.1269 15.6667 10.6666 15.6667Z"
                                    fill="currentColor"
                                  ></path>
                                  <path
                                    d="M10.6666 5.66666C10.2064 5.66666 9.83337 5.29357 9.83337 4.83334C9.83337 4.3731 10.2064 4 10.6666 4C11.1269 4 11.5 4.3731 11.5 4.83334C11.5 5.29357 11.1269 5.66666 10.6666 5.66666Z"
                                    fill="currentColor"
                                  ></path>
                                  <path
                                    d="M13.1667 15.6667C12.7064 15.6667 12.3333 15.2936 12.3333 14.8333C12.3333 14.3731 12.7064 14 13.1667 14C13.6269 14 14 14.3731 14 14.8333C14 15.2936 13.6269 15.6667 13.1667 15.6667Z"
                                    fill="currentColor"
                                  ></path>
                                  <path
                                    d="M13.1667 5.66666C12.7064 5.66666 12.3333 5.29357 12.3333 4.83334C12.3333 4.3731 12.7064 4 13.1667 4C13.6269 4 14 4.3731 14 4.83334C14 5.29357 13.6269 5.66666 13.1667 5.66666Z"
                                    fill="currentColor"
                                  ></path>
                                  <path
                                    d="M13.1667 8.16666C12.7064 8.16666 12.3333 7.79358 12.3333 7.33334C12.3333 6.8731 12.7064 6.5 13.1667 6.5C13.6269 6.5 14 6.8731 14 7.33334C14 7.79358 13.6269 8.16666 13.1667 8.16666Z"
                                    fill="currentColor"
                                  ></path>
                                  <path
                                    d="M13.1667 13.1667C12.7064 13.1667 12.3333 12.7936 12.3333 12.3333C12.3333 11.8731 12.7064 11.5 13.1667 11.5C13.6269 11.5 14 11.8731 14 12.3333C14 12.7936 13.6269 13.1667 13.1667 13.1667Z"
                                    fill="currentColor"
                                  ></path>
                                  <path
                                    d="M15.6667 8.16666C15.2064 8.16666 14.8333 7.79358 14.8333 7.33334C14.8333 6.8731 15.2064 6.5 15.6667 6.5C16.1269 6.5 16.5 6.8731 16.5 7.33334C16.5 7.79358 16.1269 8.16666 15.6667 8.16666Z"
                                    fill="currentColor"
                                  ></path>
                                  <path
                                    d="M15.6667 13.1667C15.2064 13.1667 14.8333 12.7936 14.8333 12.3333C14.8333 11.8731 15.2064 11.5 15.6667 11.5C16.1269 11.5 16.5 11.8731 16.5 12.3333C16.5 12.7936 16.1269 13.1667 15.6667 13.1667Z"
                                    fill="currentColor"
                                  ></path>
                                  <path
                                    d="M15.6667 10.6667C15.2064 10.6667 14.8333 10.2936 14.8333 9.83334C14.8333 9.3731 15.2064 9 15.6667 9C16.1269 9 16.5 9.3731 16.5 9.83334C16.5 10.2936 16.1269 10.6667 15.6667 10.6667Z"
                                    fill="currentColor"
                                  ></path>
                                  <path
                                    d="M18.1667 10.6667C17.7064 10.6667 17.3333 10.2936 17.3333 9.83334C17.3333 9.3731 17.7064 9 18.1667 9C18.6269 9 19 9.3731 19 9.83334C19 10.2936 18.6269 10.6667 18.1667 10.6667Z"
                                    fill="currentColor"
                                  ></path>
                                  <path
                                    d="M1.5 15.6667C1.03975 15.6667 0.666748 15.2936 0.666748 14.8333C0.666748 14.3731 1.03975 14 1.5 14C1.96025 14 2.33337 14.3731 2.33337 14.8333C2.33337 15.2936 1.96025 15.6667 1.5 15.6667Z"
                                    fill="currentColor"
                                  ></path>
                                  <path
                                    d="M1.5 5.66666C1.03975 5.66666 0.666748 5.29357 0.666748 4.83334C0.666749 4.3731 1.03975 4 1.5 4C1.96025 4 2.33337 4.3731 2.33337 4.83334C2.33337 5.29357 1.96025 5.66666 1.5 5.66666Z"
                                    fill="currentColor"
                                  ></path>
                                  <path
                                    d="M4.00004 15.6667C3.5398 15.6667 3.16671 15.2936 3.16671 14.8333C3.16671 14.3731 3.5398 14 4.00004 14C4.46027 14 4.83337 14.3731 4.83337 14.8333C4.83337 15.2936 4.46027 15.6667 4.00004 15.6667Z"
                                    fill="currentColor"
                                  ></path>
                                  <path
                                    d="M4.00004 5.66666C3.5398 5.66666 3.16671 5.29357 3.16671 4.83334C3.16671 4.3731 3.5398 4 4.00004 4C4.46027 4 4.83337 4.3731 4.83337 4.83334C4.83337 5.29357 4.46027 5.66666 4.00004 5.66666Z"
                                    fill="currentColor"
                                  ></path>
                                  <path
                                    d="M4.00004 8.16666C3.5398 8.16666 3.16671 7.79358 3.16671 7.33334C3.16671 6.8731 3.5398 6.5 4.00004 6.5C4.46027 6.5 4.83337 6.8731 4.83337 7.33334C4.83337 7.79358 4.46027 8.16666 4.00004 8.16666Z"
                                    fill="currentColor"
                                  ></path>
                                  <path
                                    d="M4.00004 13.1667C3.5398 13.1667 3.16671 12.7936 3.16671 12.3333C3.16671 11.8731 3.5398 11.5 4.00004 11.5C4.46027 11.5 4.83337 11.8731 4.83337 12.3333C4.83337 12.7936 4.46027 13.1667 4.00004 13.1667Z"
                                    fill="currentColor"
                                  ></path>
                                  <path
                                    d="M6.50004 8.16666C6.0398 8.16666 5.66671 7.79358 5.66671 7.33334C5.66671 6.8731 6.0398 6.5 6.50004 6.5C6.96027 6.5 7.33337 6.8731 7.33337 7.33334C7.33337 7.79358 6.96027 8.16666 6.50004 8.16666Z"
                                    fill="currentColor"
                                  ></path>
                                  <path
                                    d="M6.50004 13.1667C6.0398 13.1667 5.66671 12.7936 5.66671 12.3333C5.66671 11.8731 6.0398 11.5 6.50004 11.5C6.96027 11.5 7.33337 11.8731 7.33337 12.3333C7.33337 12.7936 6.96027 13.1667 6.50004 13.1667Z"
                                    fill="currentColor"
                                  ></path>
                                  <path
                                    d="M6.50004 10.6667C6.0398 10.6667 5.66671 10.2936 5.66671 9.83334C5.66671 9.3731 6.0398 9 6.50004 9C6.96027 9 7.33337 9.3731 7.33337 9.83334C7.33337 10.2936 6.96027 10.6667 6.50004 10.6667Z"
                                    fill="currentColor"
                                  ></path>
                                  <path
                                    d="M9.00004 10.6667C8.5398 10.6667 8.16671 10.2936 8.16671 9.83334C8.16671 9.3731 8.5398 9 9.00004 9C9.46027 9 9.83337 9.3731 9.83337 9.83334C9.83337 10.2936 9.46027 10.6667 9.00004 10.6667Z"
                                    fill="currentColor"
                                  ></path>
                                </svg>
                              </div>
                            </div>
                          </div>
                          <div className="button-primary_pattern"></div>
                          <div className="button-primary_border"></div>
                        </a>
                      </div>
                    </div>
                    <div
                      slide-in-header=""
                      className="header_image-wrapper"
                      style={{
                        opacity: 1,
                        visibility: "inherit",
                        translate: "none",
                        rotate: "none",
                        scale: "none",
                        transform: "translate(0px, 0px)",
                      }}
                    >
                      <img
                        sizes="(max-width: 801px) 100vw, 801px"
                        src={AboutImg}
                        loading="eager"
                        className="feature_image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <AboutComponent />
        <TechStack/>
        <Achievements />
      </main>
    </>
  );
};

export default About;
