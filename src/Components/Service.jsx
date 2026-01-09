import React from "react";
import { NavLink } from "react-router-dom";
import { ServiceData } from "../Data/ServiceData";

const Service = () => {
  return (
    <>
      <section id="why" className="section_why">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-medium">
              <div className="why_component">
                <div>
                  <div className="max-width-xlarge">
                    <div slide-in="" className="tag">
                      Our Services
                    </div>
                    <div className="spacer-1-25rem"></div>
                    <h2 slide-in="" className="heading-style-h2">
                      <span className="text-gradient-grey">
                        Digital Services That <br></br>
                      </span>
                      <span className="text-gradient-blue">
                        Think, Move, and Evolve.{" "}
                      </span>
                    </h2>
                    <div className="max-width-large">
                      <p
                        slide-in=""
                        className="text-size-large text-color-secondary"
                      >
                        At croneX Tech, we deliver end-to-end technology
                        solutions that empower organizations to innovate, scale,
                        and stay secure in the digital era.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="spacer-xlarge"></div>
                <div className="w-layout-grid why_list-wrapper">
                  <div
                    id="w-node-_53188e1c-f765-33ab-e83e-8ae5a9742b25-1c2c275d"
                    className="w-layout-grid why_list no-scrollbar"
                  >
                    <div className="code-embed w-embed"></div>

                    {ServiceData.map((data) => (
                      <div kay={data.id} slide-in="" className="why_item">
                        <NavLink
                          to={`/service/${data.slug}`}
                          className="why_item-link w-inline-block"
                        >
                          <div className="why_background-image-wrapper">
                            <img
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eca5d786370cc1f2221836_home_why_bg.avif"
                              alt=""
                              className="why_background-image"
                            />
                          </div>
                          <div className="why_card-content">
                            <div className="why_card-content-top">
                              <div className="why_item-icon-wrapper">
                                <img
                                  loading="lazy"
                                  src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eca5ef46967d4078eafee9_Why%20Databhan%20Section%20-%20%20Icons.avif"
                                  alt=""
                                  className="icon-1x1-large"
                                />
                              </div>
                              <div className="spacer-1-25rem"></div>
                              <h3 className="heading-style-h6 text-gradient-vertical">
                                {data.title}
                              </h3>
                              <div className="spacer-0-75rem"></div>
                              <p>{data.content}</p>
                            </div>
                            <div className="spacer-xsmall"></div>
                            <div className="button-group">
                              <div className="home_why_button">
                                <div className="text-size-medium">
                                  View More
                                </div>
                                <div className="icon-embed-custom1 w-embed">
                                  <svg
                                    currentwidth="16"
                                    currentheight="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M6 3L11 8L6 13"
                                      stroke="CurrentColor"
                                      strokeWidth="1.5"
                                    />
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                        </NavLink>
                      </div>
                    ))}

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
