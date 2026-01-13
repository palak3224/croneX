import { mainLogo } from "../Components/Image";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="footer_component">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-vertical padding-xxlarge">
              <div className="footer_wrapper">
                <div className="footer_top-wrapper">
                  <div className="max-width-xsmall">
                    <div className="footer_left-wrapper">
                      <NavLink
                        to="/"
                        className="footer_logo-link w-inline-block"
                      >
                        <img
                          src={mainLogo}
                          alt=""
                          loading="lazy"
                          sizes="(max-width: 1024px) 100vw, 1024px"
                          className="footer_logo"
                        />
                      </NavLink>

                      <div className="spacer-small"></div>

                      <div className="footer_details-wrapper">
                        <div className="text-color-tertiary">
                          Innovation. Intelligence. Impact.
                        </div>
                      </div>

                      <div className="spacer-small"></div>

                      <div className="social-mediaDiv">
                        <a
                          href="https://www.facebook.com/profile.php?id=61581341644966"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="social_link w-inline-block"
                          aria-label="Facebook"
                        >
                          <div className="icon-embed-xsmall w-embed">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              aria-hidden="true"
                              role="img"
                              width="100%"
                              height="100%"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                            >
                              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                            </svg>
                          </div>
                        </a>
                        <a
                          href="https://www.instagram.com/cronex_tech/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="social_link w-inline-block"
                          aria-label="Instagram"
                        >
                          <div className="icon-embed-xsmall w-embed">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              aria-hidden="true"
                              role="img"
                              width="100%"
                              height="100%"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                            >
                              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>
                          </div>
                        </a>
                        <a
                          href="https://www.linkedin.com/company/109155458"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="social_link w-inline-block"
                          aria-label="LinkedIn"
                        >
                          <div className="icon-embed-xsmall w-embed">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              aria-hidden="true"
                              role="img"
                              width="100%"
                              height="100%"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                            >
                              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                          </div>
                        </a>
                      </div>

                      <div className="spacer-large"></div>
                    </div>
                  </div>

                  <div className="footer_menu-wrapper">
                    <div>
                      <div className="text-size-small text-weight-medium text-style-allcaps">
                        Services
                      </div>
                      <div className="spacer-xsmall"></div>

                      <div className="footer_link-list">
                        <NavLink
                          to="service/web-app-development"
                          className="text-style-link text-weight-semibold text-color-primary"
                        >
                          Web Development
                        </NavLink>
                        <NavLink
                          to="/service/app-development"
                          className="text-style-link text-weight-semibold text-color-primary"
                        >
                          App Development
                        </NavLink>
                        <NavLink
                          to="/service/custom-software-development"
                          className="text-style-link text-weight-semibold text-color-primary"
                        >
                          Custom Software Development
                        </NavLink>
                        <NavLink
                          to="/service/branding-solution"
                          className="text-style-link text-weight-semibold text-color-primary"
                        >
                          Branding Solution
                        </NavLink>
                        <NavLink
                          to="/service/it-services"
                          className="text-style-link text-weight-semibold text-color-primary"
                        >
                          IT Services
                        </NavLink>

                        <NavLink
                          to="/service/other-services"
                          className="text-style-link text-weight-semibold text-color-primary"
                        >
                          Other Services
                        </NavLink>
                      </div>
                    </div>

                    <div>
                      <div className="text-size-small text-weight-medium text-style-allcaps">
                        Resources
                      </div>
                      <div className="spacer-xsmall"></div>

                      <div className="footer_link-list">
                        <NavLink
                          to="/"
                          className="text-style-link text-weight-semibold text-color-primary"
                        >
                          Home
                        </NavLink>
                        <NavLink
                          to="/about"
                          className="text-style-link text-weight-semibold text-color-primary"
                        >
                          About Us
                        </NavLink>
                        <NavLink
                          to="/projects"
                          className="text-style-link text-weight-semibold text-color-primary"
                        >
                          Projects
                        </NavLink>
                        {/* <NavLink
                          to="/blogs"
                          className="text-style-link text-weight-semibold text-color-primary"
                        >
                          Blogs
                        </NavLink> */}
                        <NavLink
                          to="/contact"
                          className="text-style-link text-weight-semibold text-color-primary"
                        >
                          Contact Us
                        </NavLink>
                      </div>
                    </div>

                    <div>
                      <div className="text-size-small text-weight-medium text-style-allcaps">
                        Company
                      </div>
                      <div className="spacer-xsmall"></div>

                      <div className="footer_link-list">
                        <NavLink
                          to="https://api.whatsapp.com/send?phone=919407084533"
                          className="text-style-link text-weight-semibold text-color-primary"
                        >
                          +91 94070 84533
                        </NavLink>
                        <NavLink
                          to="#"
                          className="text-style-link text-weight-semibold text-color-primary"
                        >
                          info@cronextech.com
                        </NavLink>
                        <NavLink
                          to="#"
                          className="text-style-link text-weight-semibold text-color-primary"
                        >
                          Scheme No 54, Vijay Nagar, Indore - 452010
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="footer_bottom-wrapper">
                  <div className="text-color-tertiary text-size-regular">
                    Copyright © <span className="footer_credit-year">2025</span>{" "}
                    croneX Tech All rights reserved.
                  </div>

                  <div className="footer_legal-list">
                    <NavLink to="/terms-condition" className="text-style-link">
                      Terms of Service
                    </NavLink>
                    <NavLink to="/privacy-policy" className="text-style-link">
                      Privacy Policy
                    </NavLink>
                    <NavLink to="#" className="text-style-link">
                      Cookies Settings
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
