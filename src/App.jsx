import React from "react";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { Route, Routes } from "react-router-dom";
import ServiceDetails from "./Pages/ServiceDetails";
import Project from './Pages/Project';
import Contact from './Pages/Contact';
import TermsCondition from "./Pages/TermsCondition";
import ProvacyPolicy from './Pages/ProvacyPolicy';
import ScrollToTop from "./Components/ScrollToTop";
import Pricing from "./Pages/Pricing";

const App = () => {
  return (
    <>
      <ScrollToTop />
      <div className="page-wrapper">
        <div className="global-styles">
          <div className="style-overrides w-embed"></div>
          <div className="color-schemes w-embed"></div>
          <div className="hubspot-styles w-embed">Custom Styles</div>
        </div>
        <Header />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<About />} path="/about" />
          <Route element={<ServiceDetails />} path="/service/:slug" />
          <Route element={<Project />} path="/projects" />
          <Route element={<Contact />} path="/contact" />
          <Route element={<Pricing />} path="/pricing" />
          {/* <Route element={<Blog />} path="/blogs" /> */}
          <Route element={<TermsCondition />} path="/terms-condition" />
          <Route element={<ProvacyPolicy />} path="/privacy-policy" />
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default App;
