import React from "react";
import { ProjectData } from "../Data/ProjectData";

const Project = () => {
  return (
    <>
      <div className="background-border_wrapper">
        <img
          loading="lazy"
          alt=""
          className="background-border_left"
          src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67ff857be08695343437f37f_product_hero_left_Box.avif"
        />
        <img
          loading="lazy"
          alt=""
          className="backhground_border_right"
          src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67ff857b97f89d74677594e7_product_hero_right_box.avif"
        />
      </div>

      <section
        className="section_home_platform"
        style={{ overflow: "visible" }}
      >
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-medium">
              <div className="home_platform_component">
                <div className="max-width-xlarge align-center">
                  <div className="text-align-center">
                    <h2 className="heading-style-h3">
                      <span className="text-gradient-grey">
                        A Gallery of Our{" "}
                      </span>
                      <span className="text-gradient-blue">
                        {" "}
                        Digital Milestones{" "}
                      </span>
                    </h2>
                    <div className="spacer-xsmall"></div>
                    <div>
                      <p className="text-size-large">
                        We deliver customized IT services designed to elevate
                        your brand and drive meaningful results.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="spacer-large"></div>
              </div>

              {ProjectData.map((project) => (
                <div key={project.id} className="projectGrid">
                  <div className="projectHeading">
                    <h6>
                      <span className="text-gradient-blue">{project.title}</span>
                    </h6>
                    <p>
                      {project.description}
                      <ul>
                        {project.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </p>
                  </div>
                  <div className="projectCard">
                    {project.externalImage && (
                      <img src={project.externalImage} alt={project.title} />
                    )}
                    {project.images.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`${project.title} - Image ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;
