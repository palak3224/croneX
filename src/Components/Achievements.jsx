import React from "react";

const Achievements = () => {
  return (
    <>
      <section className="section_platform_stats">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-small">
              <div className="integrations_stats_component">
                <div className="text-align-center">
                  <div className="max-width-xlarge align-center">
                    <div className="max-width-large align-center">
                      <h2>
                        <span className="text-gradient-grey">
                          Our{" "}
                          <span className="text-gradient-blue">
                            Achievements
                          </span>
                        </span>
                      </h2>
                    </div>
                  </div>
                </div>

                <div className="spacer-large"></div>

                <div className="platform_stats_list">
                  {/* Item 1 */}
                  <div className="stats_item">
                    <div className="stats_item-content">
                      <div className="stats_number text-gradient-grey">
                        <span>1024</span>+
                      </div>
                      <div className="spacer-xlarge"></div>
                      <p className="text-size-medium">Projects Delivered</p>
                    </div>

                    <img
                      src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67ffadce96578145506a1ae4_Card.avif"
                      loading="lazy"
                      alt=""
                      className="stats_item-background"
                    />

                    <div className="stats_glow"></div>
                    <div className="stats_border"></div>
                  </div>

                  {/* Item 2 */}
                  <div className="stats_item">
                    <div className="stats_item-content">
                      <div className="stats_number text-gradient-grey">
                        <span>100</span>+
                      </div>
                      <div className="spacer-xlarge"></div>
                      <p className="text-size-medium">Our Clients</p>
                    </div>

                    <img
                      src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67ffb4f44d05ea2e6e79594d_Card.avif"
                      loading="lazy"
                      alt=""
                      className="stats_item-background"
                    />

                    <div className="stats_glow is-green"></div>
                    <div className="stats_border is-green"></div>
                  </div>

                  {/* Item 3 */}
                  <div className="stats_item">
                    <div className="stats_item-content">
                      <div className="stats_number text-gradient-grey">
                        <span>90</span>%
                      </div>
                      <div className="spacer-xlarge"></div>
                      <p className="text-size-medium">FinTech Expertise</p>
                    </div>

                    <img
                      src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67ffadce96578145506a1ae4_Card.avif"
                      loading="lazy"
                      alt=""
                      className="stats_item-background"
                    />

                    <div className="stats_glow"></div>
                    <div className="stats_border"></div>
                  </div>

                  {/* Item 4 */}
                  <div className="stats_item">
                    <div className="stats_item-content">
                      <div className="stats_number text-gradient-grey">
                        <span>5</span>+
                      </div>
                      <div className="spacer-xlarge"></div>
                      <p className="text-size-medium">Years in Industry</p>
                    </div>

                    <img
                      src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/6804757fab8b6374760f917e_magenta.avif"
                      loading="lazy"
                      alt=""
                      className="stats_item-background"
                    />

                    <div className="stats_glow is-magenta"></div>
                    <div className="stats_border is-magenta"></div>
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

export default Achievements;
