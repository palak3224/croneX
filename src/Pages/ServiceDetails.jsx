import React from "react";
import { NavLink, useParams } from "react-router-dom";
import { SeaprateServiceData } from "../Data/SeaprateServiceData";
// import { ServiceData } from "../Data/ServiceData";

const ServiceDetails = () => {
  const { slug } = useParams();
  const service = SeaprateServiceData.find((b) => b.slug === slug);

  if (!service) {
    return <h2>Service not found!</h2>;
  }

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
              decoding="async"
              fetchpriority="low"
            />
            <img
              loading="lazy"
              src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67ff857b97f89d74677594e7_product_hero_right_box.avif"
              alt=""
              className="backhground_border_right"
              decoding="async"
              fetchpriority="low"
            />
          </div>
          <div className="padding-global">
            <div className="container-large">
              <div className="header_component">
                <div className="padding-section-small">
                  <div className="w-layout-grid header_content _1-5-1">
                    <div className="header_content-left">
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
                        <span className="text-gradient-grey">Our</span>
                        <span className="text-gradient-blue">
                          {" "}
                          {service.title}
                        </span>
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
                        {service.content}
                      </p>
                        <p style={{ fontSize : "20px", marginTop : "20px", fontWeight : "800" }}>What We Offer</p>
                        <div style={{marginLeft:"15px"}}>
                          {service.whatWeOffer.map((bullet, index) => (
                            <li key={index}>
                              <span style={{ fontSize: "14px" }}>
                                {bullet}
                              </span>
                            </li>
                          ))}
                        </div>

                        <p style={{ fontSize : "20px", marginTop : "30px", fontWeight : "800" }}>{service.descriptionTitle}</p>
                        <div style={{marginTop : "10px"}}>
                          {service.description}
                        </div>



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
                        <NavLink
                          data-wf--button-primary--variant="base"
                          to="/contact"
                          className="button-primary w-inline-block"
                        >
                          <div className="button_content">
                            <div className="text-size-regular">Book a Demo</div>
                            <div className="arrow">
                              <div className="icon-embed-custom1 w-embed">
                                <svg
                                  className="arrow_svg"
                                  width=" 100%"
                                  height=" 100%"
                                  viewBox="0 0 20 20"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M10.6666 15.6667C10.2064 15.6667 9.83337 15.2936 9.83337 14.8333C9.83337 14.3731 10.2064 14 10.6666 14C11.1269 14 11.5 14.3731 11.5 14.8333C11.5 15.2936 11.1269 15.6667 10.6666 15.6667Z"
                                    fill="currentColor"
                                    style={{ opacity: "1" }}
                                  ></path>
                                  <path
                                    d="M10.6666 5.66666C10.2064 5.66666 9.83337 5.29357 9.83337 4.83334C9.83337 4.3731 10.2064 4 10.6666 4C11.1269 4 11.5 4.3731 11.5 4.83334C11.5 5.29357 11.1269 5.66666 10.6666 5.66666Z"
                                    fill="currentColor"
                                    style={{ opacity: "0.98" }}
                                  ></path>
                                  <path
                                    d="M13.1667 15.6667C12.7064 15.6667 12.3333 15.2936 12.3333 14.8333C12.3333 14.3731 12.7064 14 13.1667 14C13.6269 14 14 14.3731 14 14.8333C14 15.2936 13.6269 15.6667 13.1667 15.6667Z"
                                    fill="currentColor"
                                    style={{ opacity: "0.82" }}
                                  ></path>
                                  <path
                                    d="M13.1667 5.66666C12.7064 5.66666 12.3333 5.29357 12.3333 4.83334C12.3333 4.3731 12.7064 4 13.1667 4C13.6269 4 14 4.3731 14 4.83334C14 5.29357 13.6269 5.66666 13.1667 5.66666Z"
                                    fill="currentColor"
                                    style={{ opacity: "0.5" }}
                                  ></path>
                                  <path
                                    d="M13.1667 8.16666C12.7064 8.16666 12.3333 7.79358 12.3333 7.33334C12.3333 6.8731 12.7064 6.5 13.1667 6.5C13.6269 6.5 14 6.8731 14 7.33334C14 7.79358 13.6269 8.16666 13.1667 8.16666Z"
                                    fill="currentColor"
                                    style={{ opacity: "0.18" }}
                                  ></path>
                                  <path
                                    d="M13.1667 13.1667C12.7064 13.1667 12.3333 12.7936 12.3333 12.3333C12.3333 11.8731 12.7064 11.5 13.1667 11.5C13.6269 11.5 14 11.8731 14 12.3333C14 12.7936 13.6269 13.1667 13.1667 13.1667Z"
                                    fill="currentColor"
                                    style={{ opacity: "0.02" }}
                                  ></path>
                                  <path
                                    d="M15.6667 8.16666C15.2064 8.16666 14.8333 7.79358 14.8333 7.33334C14.8333 6.8731 15.2064 6.5 15.6667 6.5C16.1269 6.5 16.5 6.8731 16.5 7.33334C16.5 7.79358 16.1269 8.16666 15.6667 8.16666Z"
                                    fill="currentColor"
                                    style={{ opacity: "0" }}
                                  ></path>
                                  <path
                                    d="M15.6667 13.1667C15.2064 13.1667 14.8333 12.7936 14.8333 12.3333C14.8333 11.8731 15.2064 11.5 15.6667 11.5C16.1269 11.5 16.5 11.8731 16.5 12.3333C16.5 12.7936 16.1269 13.1667 15.6667 13.1667Z"
                                    fill="currentColor"
                                    style={{ opacity: "0" }}
                                  ></path>
                                  <path
                                    d="M15.6667 10.6667C15.2064 10.6667 14.8333 10.2936 14.8333 9.83334C14.8333 9.3731 15.2064 9 15.6667 9C16.1269 9 16.5 9.3731 16.5 9.83334C16.5 10.2936 16.1269 10.6667 15.6667 10.6667Z"
                                    fill="currentColor"
                                    style={{ opacity: "0" }}
                                  ></path>
                                  <path
                                    d="M18.1667 10.6667C17.7064 10.6667 17.3333 10.2936 17.3333 9.83334C17.3333 9.3731 17.7064 9 18.1667 9C18.6269 9 19 9.3731 19 9.83334C19 10.2936 18.6269 10.6667 18.1667 10.6667Z"
                                    fill="currentColor"
                                    style={{ opacity: "0" }}
                                  ></path>
                                  <path
                                    d="M1.5 15.6667C1.03975 15.6667 0.666748 15.2936 0.666748 14.8333C0.666748 14.3731 1.03975 14 1.5 14C1.96025 14 2.33337 14.3731 2.33337 14.8333C2.33337 15.2936 1.96025 15.6667 1.5 15.6667Z"
                                    fill="currentColor"
                                    style={{ opacity: "0" }}
                                  ></path>
                                  <path
                                    d="M1.5 5.66666C1.03975 5.66666 0.666748 5.29357 0.666748 4.83334C0.666749 4.3731 1.03975 4 1.5 4C1.96025 4 2.33337 4.3731 2.33337 4.83334C2.33337 5.29357 1.96025 5.66666 1.5 5.66666Z"
                                    fill="currentColor"
                                    style={{ opacity: "0" }}
                                  ></path>
                                  <path
                                    d="M4.00004 15.6667C3.5398 15.6667 3.16671 15.2936 3.16671 14.8333C3.16671 14.3731 3.5398 14 4.00004 14C4.46027 14 4.83337 14.3731 4.83337 14.8333C4.83337 15.2936 4.46027 15.6667 4.00004 15.6667Z"
                                    fill="currentColor"
                                    style={{ opacity: "0" }}
                                  ></path>
                                  <path
                                    d="M4.00004 5.66666C3.5398 5.66666 3.16671 5.29357 3.16671 4.83334C3.16671 4.3731 3.5398 4 4.00004 4C4.46027 4 4.83337 4.3731 4.83337 4.83334C4.83337 5.29357 4.46027 5.66666 4.00004 5.66666Z"
                                    fill="currentColor"
                                    style={{ opacity: "0" }}
                                  ></path>
                                  <path
                                    d="M4.00004 8.16666C3.5398 8.16666 3.16671 7.79358 3.16671 7.33334C3.16671 6.8731 3.5398 6.5 4.00004 6.5C4.46027 6.5 4.83337 6.8731 4.83337 7.33334C4.83337 7.79358 4.46027 8.16666 4.00004 8.16666Z"
                                    fill="currentColor"
                                    style={{ opacity: "0" }}
                                  ></path>
                                  <path
                                    d="M4.00004 13.1667C3.5398 13.1667 3.16671 12.7936 3.16671 12.3333C3.16671 11.8731 3.5398 11.5 4.00004 11.5C4.46027 11.5 4.83337 11.8731 4.83337 12.3333C4.83337 12.7936 4.46027 13.1667 4.00004 13.1667Z"
                                    fill="currentColor"
                                    style={{ opacity: "0" }}
                                  ></path>
                                  <path
                                    d="M6.50004 8.16666C6.0398 8.16666 5.66671 7.79358 5.66671 7.33334C5.66671 6.8731 6.0398 6.5 6.50004 6.5C6.96027 6.5 7.33337 6.8731 7.33337 7.33334C7.33337 7.79358 6.96027 8.16666 6.50004 8.16666Z"
                                    fill="currentColor"
                                    style={{ opacity: "0" }}
                                  ></path>
                                  <path
                                    d="M6.50004 13.1667C6.0398 13.1667 5.66671 12.7936 5.66671 12.3333C5.66671 11.8731 6.0398 11.5 6.50004 11.5C6.96027 11.5 7.33337 11.8731 7.33337 12.3333C7.33337 12.7936 6.96027 13.1667 6.50004 13.1667Z"
                                    fill="currentColor"
                                    style={{ opacity: "0" }}
                                  ></path>
                                  <path
                                    d="M6.50004 10.6667C6.0398 10.6667 5.66671 10.2936 5.66671 9.83334C5.66671 9.3731 6.0398 9 6.50004 9C6.96027 9 7.33337 9.3731 7.33337 9.83334C7.33337 10.2936 6.96027 10.6667 6.50004 10.6667Z"
                                    fill="currentColor"
                                    style={{ opacity: "0" }}
                                  ></path>
                                  <path
                                    d="M9.00004 10.6667C8.5398 10.6667 8.16671 10.2936 8.16671 9.83334C8.16671 9.3731 8.5398 9 9.00004 9C9.46027 9 9.83337 9.3731 9.83337 9.83334C9.83337 10.2936 9.46027 10.6667 9.00004 10.6667Z"
                                    fill="currentColor"
                                    style={{ opacity: "0" }}
                                  ></path>
                                </svg>
                              </div>
                            </div>
                          </div>
                          <div className="button-primary_pattern"></div>
                          <div className="button-primary_border"></div>
                        </NavLink>
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
                        style={{ width: "585px" }}
                        sizes="(max-width: 991px) 100vw, 858px"
                        alt="Service illustration"
                        src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/680a1d8582f0e6c76c28178c_Content.avif"
                        loading="eager"
                        fetchpriority="high"
                        decoding="async"
                        width="585"
                        height="auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div id="usecases" className="section_data-fabrics_tabs">
          <div className="padding-global">
            <div className="container-large">
              <div className="data-fabrics_tabs_wrapper">
                <div className="code-embed w-embed"></div>
                <div className="top-light_dot"></div>
                <img
                  loading="lazy"
                  src="https://cdn.prod.website-files.com/6807d07eedf08e223778cc51/6807d07eedf08e223778ccc3_light.svg"
                  alt=""
                  className="top-light_glow"
                />
                <div className="padding-section-large">
                  <div className="max-width-xlarge align-center">
                    <div className="data-fabrics_tabs_content">
                      <div className="text-align-center">
                        <div
                          slide-in=""
                          className="max-width-xlarge align-center"
                          style={{
                            translate: "none",
                            rotate: "none",
                            scale: "none",
                            opacity: 1,
                            transform: "translate(0px, 0px)",
                          }}
                        >
                          <div
                            slide-in=""
                            className="tag"
                            style={{
                              translate: "none",
                              rotate: "none",
                              scale: "none",
                              opacity: 1,
                              transform: "translate(0px, 0px)",
                            }}
                          >
                            {service.sectionTag || "USECASEs"}
                          </div>
                          <div className="spacer-xsmall"></div>
                          <div className="max-width-large-copy">
                            <h2 slide-i="">
                              <span className="text-gradient-grey">
                                {service.sectionTitle || "All Development Solutions"}
                              </span>
                            </h2>
                          </div>
                          <div className="spacer-small"></div>
                          <p
                            slide-i=""
                            className="text-size-large text-color-secondary"
                          >
                            {service.sectionDescription || service.content}
                          </p>
                        </div>
                      </div>
                      <div className="spacer-small"></div>
                      {service.tabs && service.tabs.length > 0 && (
                        <div
                          data-current={`Tab ${service.tabs.length}`}
                          data-easing="ease"
                          data-duration-in="300"
                          data-duration-out="100"
                          className="data-fabrics_tabs_component w-tabs"
                        >
                          <div
                            reveal-list=""
                            className="tabs-menu no-scrollbar w-tab-menu"
                            role="tablist"
                          >
                            {service.tabs.map((tab, index) => (
                              <a
                                key={index}
                                data-w-tab={`Tab ${index + 1}`}
                                reveal-item=""
                                className={`tab-link w-inline-block w-tab-link ${index === 0 ? 'w--current' : ''}`}
                                id={`w-tabs-0-data-w-tab-${index}`}
                                href={`#w-tabs-0-data-w-pane-${index}`}
                                role="tab"
                                aria-controls={`w-tabs-0-data-w-pane-${index}`}
                                aria-selected={index === 0}
                                style={{
                                  translate: "none",
                                  rotate: "none",
                                  scale: "none",
                                  transform: "translate(0px, 0px)",
                                  opacity: 1,
                                }}
                                tabIndex={index === 0 ? undefined : -1}
                              >
                                <div className="tab-link_content">
                                  <div className="icon-embed-custom1 w-embed">
                                    {tab.icon === "data-integration" ? (
                                      <svg
                                        width=" 100%"
                                        height=" 100%"
                                        viewBox="0 0 20 21"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M5.83333 8.82835V6.32835C5.83337 5.41116 6.13605 4.51961 6.69441 3.79196C7.25278 3.06431 8.03564 2.54124 8.92157 2.30385C9.80751 2.06646 10.747 2.12802 11.5944 2.47899C12.4418 2.82996 13.1497 3.45073 13.6083 4.24502M10.8333 13.8284C10.8333 14.2886 10.4602 14.6617 10 14.6617C9.53976 14.6617 9.16667 14.2886 9.16667 13.8284C9.16667 13.3681 9.53976 12.995 10 12.995C10.4602 12.995 10.8333 13.3681 10.8333 13.8284ZM4.16667 8.82835H15.8333C16.7538 8.82835 17.5 9.57454 17.5 10.495V17.1617C17.5 18.0822 16.7538 18.8283 15.8333 18.8283H4.16667C3.24619 18.8283 2.5 18.0822 2.5 17.1617V10.495C2.5 9.57454 3.24619 8.82835 4.16667 8.82835Z"
                                          stroke="currentColor"
                                          strokeWidth="2"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        ></path>
                                      </svg>
                                    ) : tab.icon === "volume-reduction" ? (
                                      <svg
                                        width=" 100%"
                                        height=" 100%"
                                        viewBox="0 0 21 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M9.1224 17.5V6.66667C9.1224 6.44565 9.0346 6.23369 8.87832 6.07741C8.72204 5.92113 8.51008 5.83333 8.28906 5.83333H4.1224C3.90138 5.83333 3.68942 5.92113 3.53314 6.07741C3.37686 6.23369 3.28906 6.44565 3.28906 6.66667V16.6667C3.28906 16.8877 3.37686 17.0996 3.53314 17.2559C3.68942 17.4122 3.90138 17.5 4.1224 17.5H14.1224C14.3434 17.5 14.5554 17.4122 14.7117 17.2559C14.8679 17.0996 14.9557 16.8877 14.9557 16.6667V12.5C14.9557 12.279 14.8679 12.067 14.7117 11.9107C14.5554 11.7545 14.3434 11.6667 14.1224 11.6667H3.28906M13.2891 2.5H17.4557C17.916 2.5 18.2891 2.8731 18.2891 3.33333V7.5C18.2891 7.96024 17.916 8.33333 17.4557 8.33333H13.2891C12.8288 8.33333 12.4557 7.96024 12.4557 7.5V3.33333C12.4557 2.8731 12.8288 2.5 13.2891 2.5Z"
                                          stroke="currentColor"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        ></path>
                                      </svg>
                                    ) : tab.icon === "pipeline-health" ? (
                                      <svg
                                        width=" 100%"
                                        height=" 100%"
                                        viewBox="0 0 21 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M14.9557 10H13.2891L11.6224 14.1667L9.95573 5.83333L8.28906 10H6.6224M4.95573 2.5H16.6224C17.5429 2.5 18.2891 3.24619 18.2891 4.16667V15.8333C18.2891 16.7538 17.5429 17.5 16.6224 17.5H4.95573C4.03525 17.5 3.28906 16.7538 3.28906 15.8333V4.16667C3.28906 3.24619 4.03525 2.5 4.95573 2.5Z"
                                          stroke="currentColor"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        ></path>
                                      </svg>
                                    ) : (
                                      <svg
                                        width=" 100%"
                                        height=" 100%"
                                        viewBox="0 0 21 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M2.45508 9.99989C2.45469 10.1593 2.50001 10.3154 2.58568 10.4498C2.67135 10.5843 2.79376 10.6913 2.93841 10.7582L10.1051 14.0166C10.3211 14.1144 10.5555 14.165 10.7926 14.165C11.0297 14.165 11.2641 14.1144 11.4801 14.0166L18.6301 10.7666C18.7776 10.7003 18.9026 10.5925 18.9899 10.4563C19.0772 10.3202 19.123 10.1616 19.1217 9.99989M2.45508 14.1666C2.45469 14.3259 2.50001 14.4821 2.58568 14.6165C2.67135 14.7509 2.79376 14.8579 2.93841 14.9249L10.1051 18.1832C10.3211 18.281 10.5555 18.3316 10.7926 18.3316C11.0297 18.3316 11.2641 18.281 11.4801 18.1832L18.6301 14.9332C18.7776 14.8669 18.9026 14.7591 18.9899 14.623C19.0772 14.4869 19.123 14.3283 19.1217 14.1666M11.4801 1.81656C11.2629 1.71751 11.0271 1.66626 10.7884 1.66626C10.5498 1.66626 10.3139 1.71751 10.0967 1.81656L2.95508 5.06656C2.80721 5.13176 2.68148 5.23856 2.59322 5.37394C2.50495 5.50932 2.45796 5.66744 2.45796 5.82906C2.45796 5.99067 2.50495 6.1488 2.59322 6.28418C2.68148 6.41956 2.80721 6.52635 2.95508 6.59156L10.1051 9.84989C10.3222 9.94893 10.5581 10.0002 10.7967 10.0002C11.0354 10.0002 11.2713 9.94893 11.4884 9.84989L18.6384 6.59989C18.7863 6.53469 18.912 6.42789 19.0003 6.29251C19.0885 6.15713 19.1355 5.999 19.1355 5.83739C19.1355 5.67578 19.0885 5.51765 19.0003 5.38227C18.912 5.24689 18.7863 5.14009 18.6384 5.07489L11.4801 1.81656Z"
                                          stroke="currentColor"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        ></path>
                                      </svg>
                                    )}
                                  </div>
                                  <div>{tab.label}</div>
                                </div>
                                <div className="tab-link_glow"></div>
                                <div className="tab-link_border"></div>
                              </a>
                            ))}
                          </div>
                          <div
                            slide-in=""
                            className="data-fabrics_tabs_tab-content w-tab-content"
                            style={{
                              translate: "none",
                              rotate: "none",
                              scale: "none",
                              opacity: 1,
                              transform: "translate(0px, 0px)",
                            }}
                          >
                            {service.tabs.map((tab, index) => (
                              <div
                                key={index}
                                data-w-tab={`Tab ${index + 1}`}
                                className={`data-fabrics_tabs_pane w-tab-pane ${index === 0 ? 'w--tab-active' : ''}`}
                                id={`w-tabs-0-data-w-pane-${index}`}
                                role="tabpanel"
                                aria-labelledby={`w-tabs-0-data-w-tab-${index}`}
                                style={{
                                  opacity: index === 0 ? 1 : 0,
                                  transition: "all 300ms, opacity 300ms",
                                }}
                              >
                                <div className="data-fabrics_tabs_pane-content">
                                  <div className="data-fabrics_tab_menu">
                                    <div className="tag-secondary">
                                      {tab.tag}
                                    </div>
                                    <div className="spacer-xsmall"></div>
                                    <h3 className="heading-style-h5 text-color-primary">
                                      {tab.title.includes(' <br />') ? (
                                        <>
                                          {tab.title.split(' <br />')[0]}
                                          <br />
                                          {tab.title.split(' <br />')[1]}
                                        </>
                                      ) : (
                                        tab.title
                                      )}
                                    </h3>
                                    <div className="spacer-0-75rem"></div>
                                    <p>{tab.description}</p>
                                    <div className="spacer-1-25rem"></div>
                                    <div className="data-fabrics_tab_list">
                                      {tab.stats.map((stat, statIndex) => (
                                        <div key={statIndex} className="data-fabrics_tab_item">
                                          <div className="heading-style-h6 text-gradient-blue">
                                            {stat.value}
                                          </div>
                                          <div className="spacer-0-75rem"></div>
                                          <div className="text-size-tiny">
                                            {stat.text}
                                          </div>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                  <div className="data-fabrics_tabs_image-wrapper">
                                    <img
                                      width="798"
                                      sizes={index === 2 ? "266px" : "(max-width: 991px) 100vw, 798px"}
                                      alt={tab.title}
                                      src={tab.image}
                                      loading="lazy"
                                      decoding="async"
                                      fetchpriority={index === 0 ? "high" : "low"}
                                      srcSet={index === 2 ? undefined : `${tab.image.replace('.avif', '-p-500.avif')} 500w, ${tab.image} 1596w`}
                                      className="data-fabrics_tabs_image"
                                    />
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="bg-tiles_component">
                  <div className="bg-tiles_list">
                    <div className="bg-tiles_item">
                      <div className="bg-tiles_wrapper">
                        <img
                          src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685a6c37b1aa4ada2db7f811_Square%20180x180%20-%20Feature.avif"
                          loading="lazy"
                          alt=""
                          className="bg-tiles_image"
                          style={{ transition: "opacity 0.5s", opacity: 1 }}
                        />
                      </div>
                      <div className="bg-tiles_dot"></div>
                    </div>
                    <div className="bg-tiles_item">
                      <div className="bg-tiles_wrapper">
                        <img
                          src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685a6c37b40f4e2468579a50_Square%20180x180%20-%20Feature-1.avif"
                          loading="lazy"
                          alt=""
                          className="bg-tiles_image"
                          style={{ transition: "opacity 0.5s", opacity: 1 }}
                        />
                      </div>
                      <div className="bg-tiles_dot"></div>
                    </div>
                    <div className="bg-tiles_item">
                      <div className="bg-tiles_wrapper">
                        <img
                          src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685a6c37b1aa4ada2db7f811_Square%20180x180%20-%20Feature.avif"
                          loading="lazy"
                          alt=""
                          className="bg-tiles_image"
                          style={{ transition: "opacity 0.5s", opacity: 1 }}
                        />
                      </div>
                      <div className="bg-tiles_dot"></div>
                    </div>
                    <div className="bg-tiles_item">
                      <div className="bg-tiles_wrapper">
                        <img
                          src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685a6c37b1aa4ada2db7f811_Square%20180x180%20-%20Feature.avif"
                          loading="lazy"
                          alt=""
                          className="bg-tiles_image"
                          style={{ transition: "opacity 0.5s", opacity: 0 }}
                        />
                      </div>
                      <div className="bg-tiles_dot"></div>
                    </div>
                    <div className="bg-tiles_item">
                      <div className="bg-tiles_wrapper">
                        <img
                          src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685a6c37b40f4e2468579a50_Square%20180x180%20-%20Feature-1.avif"
                          loading="lazy"
                          alt=""
                          className="bg-tiles_image"
                          style={{ transition: "opacity 0.5s", opacity: 0 }}
                        />
                      </div>
                      <div className="bg-tiles_dot"></div>
                    </div>
                    <div className="bg-tiles_item">
                      <div className="bg-tiles_wrapper">
                        <img
                          src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685a6c37b1aa4ada2db7f811_Square%20180x180%20-%20Feature.avif"
                          loading="lazy"
                          alt=""
                          className="bg-tiles_image"
                          style={{ transition: "opacity 0.5s", opacity: 0 }}
                        />
                      </div>
                    </div>
                    <div className="bg-tiles_item">
                      <div className="bg-tiles_wrapper">
                        <img
                          src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685a6c37b1aa4ada2db7f811_Square%20180x180%20-%20Feature.avif"
                          loading="lazy"
                          alt=""
                          className="bg-tiles_image"
                          style={{ transition: "opacity 0.5s", opacity: 1 }}
                        />
                      </div>
                      <div className="bg-tiles_dot"></div>
                    </div>
                    <div className="bg-tiles_item">
                      <div className="bg-tiles_wrapper">
                        <img
                          src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685a6c37b1aa4ada2db7f811_Square%20180x180%20-%20Feature.avif"
                          loading="lazy"
                          alt=""
                          className="bg-tiles_image"
                          style={{ transition: "opacity 0.5s", opacity: 0 }}
                        />
                      </div>
                      <div className="bg-tiles_dot"></div>
                    </div>
                    <div className="bg-tiles_item">
                      <div className="bg-tiles_wrapper">
                        <img
                          src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685a6c37b40f4e2468579a50_Square%20180x180%20-%20Feature-1.avif"
                          loading="lazy"
                          alt=""
                          className="bg-tiles_image"
                          style={{ transition: "opacity 0.5s", opacity: 0 }}
                        />
                      </div>
                      <div className="bg-tiles_dot"></div>
                    </div>
                    <div className="bg-tiles_item">
                      <div className="bg-tiles_wrapper">
                        <img
                          src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685a6c37b1aa4ada2db7f811_Square%20180x180%20-%20Feature.avif"
                          loading="lazy"
                          alt=""
                          className="bg-tiles_image"
                          style={{ transition: "opacity 0.5s", opacity: 0 }}
                        />
                      </div>
                      <div className="bg-tiles_dot"></div>
                    </div>
                    <div className="bg-tiles_item">
                      <div className="bg-tiles_wrapper">
                        <img
                          src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685a6c37b1aa4ada2db7f811_Square%20180x180%20-%20Feature.avif"
                          loading="lazy"
                          alt=""
                          className="bg-tiles_image"
                          style={{ transition: "opacity 0.5s", opacity: 1 }}
                        />
                      </div>
                      <div className="bg-tiles_dot"></div>
                    </div>
                    <div className="bg-tiles_item">
                      <div className="bg-tiles_wrapper">
                        <img
                          src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685a6c37b40f4e2468579a50_Square%20180x180%20-%20Feature-1.avif"
                          loading="lazy"
                          alt=""
                          className="bg-tiles_image"
                          style={{ transition: "opacity 0.5s", opacity: 0 }}
                        />
                      </div>
                    </div>
                    <div className="bg-tiles_item">
                      <div className="bg-tiles_wrapper">
                        <img
                          src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685a6c37b40f4e2468579a50_Square%20180x180%20-%20Feature-1.avif"
                          loading="lazy"
                          alt=""
                          className="bg-tiles_image"
                          style={{ transition: "opacity 0.5s", opacity: 1 }}
                        />
                      </div>
                      <div className="bg-tiles_dot"></div>
                    </div>
                    <div className="bg-tiles_item">
                      <div className="bg-tiles_wrapper">
                        <img
                          src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685a6c37b1aa4ada2db7f811_Square%20180x180%20-%20Feature.avif"
                          loading="lazy"
                          alt=""
                          className="bg-tiles_image"
                          style={{ transition: "opacity 0.5s", opacity: 0 }}
                        />
                      </div>
                      <div className="bg-tiles_dot"></div>
                    </div>
                    <div className="bg-tiles_item">
                      <div className="bg-tiles_wrapper">
                        <img
                          src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685a6c37b1aa4ada2db7f811_Square%20180x180%20-%20Feature.avif"
                          loading="lazy"
                          alt=""
                          className="bg-tiles_image"
                          style={{ transition: "opacity 0.5s", opacity: 0 }}
                        />
                      </div>
                      <div className="bg-tiles_dot"></div>
                    </div>
                    <div className="bg-tiles_item">
                      <div className="bg-tiles_wrapper">
                        <img
                          src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685a6c37b40f4e2468579a50_Square%20180x180%20-%20Feature-1.avif"
                          loading="lazy"
                          alt=""
                          className="bg-tiles_image"
                          style={{ transition: "opacity 0.5s", opacity: 1 }}
                        />
                      </div>
                      <div className="bg-tiles_dot"></div>
                    </div>
                    <div className="bg-tiles_item">
                      <div className="bg-tiles_wrapper">
                        <img
                          src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685a6c37b1aa4ada2db7f811_Square%20180x180%20-%20Feature.avif"
                          loading="lazy"
                          alt=""
                          className="bg-tiles_image"
                          style={{ transition: "opacity 0.5s", opacity: 0 }}
                        />
                      </div>
                      <div className="bg-tiles_dot"></div>
                    </div>
                    <div className="bg-tiles_item">
                      <div className="bg-tiles_wrapper">
                        <img
                          src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685a6c37b1aa4ada2db7f811_Square%20180x180%20-%20Feature.avif"
                          loading="lazy"
                          alt=""
                          className="bg-tiles_image"
                          style={{ transition: "opacity 0.5s", opacity: 1 }}
                        />
                      </div>
                    </div>
                    <div className="bg-tiles_item">
                      <div className="bg-tiles_wrapper">
                        <img
                          src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685a6c37b1aa4ada2db7f811_Square%20180x180%20-%20Feature.avif"
                          loading="lazy"
                          alt=""
                          className="bg-tiles_image"
                          style={{ transition: "opacity 0.5s", opacity: 0 }}
                        />
                      </div>
                    </div>
                    <div className="bg-tiles_item">
                      <div className="bg-tiles_wrapper">
                        <img
                          src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685a6c37b40f4e2468579a50_Square%20180x180%20-%20Feature-1.avif"
                          loading="lazy"
                          alt=""
                          className="bg-tiles_image"
                          style={{ transition: "opacity 0.5s", opacity: 0 }}
                        />
                      </div>
                    </div>
                    <div className="bg-tiles_item">
                      <div className="bg-tiles_wrapper">
                        <img
                          src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685a6c37b1aa4ada2db7f811_Square%20180x180%20-%20Feature.avif"
                          loading="lazy"
                          alt=""
                          className="bg-tiles_image"
                          style={{ transition: "opacity 0.5s", opacity: 1 }}
                        />
                      </div>
                    </div>
                    <div className="bg-tiles_item">
                      <div className="bg-tiles_wrapper">
                        <img
                          src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685a6c37b1aa4ada2db7f811_Square%20180x180%20-%20Feature.avif"
                          loading="lazy"
                          alt=""
                          className="bg-tiles_image"
                          style={{ transition: "opacity 0.5s", opacity: 0 }}
                        />
                      </div>
                    </div>
                    <div className="bg-tiles_item">
                      <div className="bg-tiles_wrapper">
                        <img
                          src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685a6c37b40f4e2468579a50_Square%20180x180%20-%20Feature-1.avif"
                          loading="lazy"
                          alt=""
                          className="bg-tiles_image"
                          style={{ transition: "opacity 0.5s", opacity: 1 }}
                        />
                      </div>
                    </div>
                    <div className="bg-tiles_item">
                      <div className="bg-tiles_wrapper">
                        <img
                          src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/685a6c37b1aa4ada2db7f811_Square%20180x180%20-%20Feature.avif"
                          loading="lazy"
                          alt=""
                          className="bg-tiles_image"
                          style={{ transition: "opacity 0.5s", opacity: 0 }}
                        />
                      </div>
                    </div>
                    <div
                      className="bg-tiles_ray_down is-1"
                      style={{
                        transform:
                          "translate3d(0%, 500%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                        transformStyle: "preserve-3d",
                      }}
                    ></div>
                    <div
                      className="bg-tiles_ray_down is-2"
                      style={{
                        transform:
                          "translate3d(0%, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                        transformStyle: "preserve-3d",
                      }}
                    ></div>
                    <div
                      className="bg-tiles_ray_down is-3"
                      style={{
                        transform:
                          "translate3d(0%, 500%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                        transformStyle: "preserve-3d",
                      }}
                    ></div>
                    <div
                      className="bg-tiles_ray_up is-1"
                      style={{
                        transform:
                          "translate3d(0%, -500%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                        transformStyle: "preserve-3d",
                      }}
                    ></div>
                    <div
                      className="bg-tiles_ray_up is-2"
                      style={{
                        transform:
                          "translate3d(0%, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                        transformStyle: "preserve-3d",
                      }}
                    ></div>
                    <div
                      className="bg-tiles_ray_left is-1"
                      style={{
                        transform:
                          "translate3d(-700%, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                        transformStyle: "preserve-3d",
                      }}
                    ></div>
                    <div
                      className="bg-tiles_ray_left is-2"
                      style={{
                        transform:
                          "translate3d(0%, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                        transformStyle: "preserve-3d",
                      }}
                    ></div>
                    <div
                      className="bg-tiles_ray_right is-1"
                      style={{
                        transform:
                          "translate3d(315%, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                        transformStyle: "preserve-3d",
                        willChange: "transform",
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ServiceDetails;
