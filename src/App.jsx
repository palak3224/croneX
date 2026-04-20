import React, { lazy, Suspense } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { Route, Routes } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop";
import WhatsAppButton from "./Components/WhatsAppButton";
import { mainLogo } from "./Components/Image";
import PopupMessage from "./Components/PopupMessage";
import "./App.css";

// Lazy load pages for code splitting
const Home = lazy(() => import("./Pages/Home"));
const About = lazy(() => import("./Pages/About"));
const ServiceDetails = lazy(() => import("./Pages/ServiceDetails"));
const Project = lazy(() => import('./Pages/Project'));
const Contact = lazy(() => import('./Pages/Contact'));
const TermsCondition = lazy(() => import("./Pages/TermsCondition"));
const ProvacyPolicy = lazy(() => import('./Pages/ProvacyPolicy'));
const Pricing = lazy(() => import("./Pages/Pricing"));
const FintechSolutions = lazy(() => import("./Pages/FintechSolutions"));

// Loading fallback component with logo and animation
const PageLoader = () => (
  <div className="page-loader">
    <div className="page-loader-content">
      <div className="page-loader-logo-wrapper">
        <img 
          src={mainLogo} 
          alt="croneX Tech" 
          className="page-loader-logo"
          loading="eager"
        />
        <div className="page-loader-spinner"></div>
      </div>
      <div className="page-loader-text">Loading...</div>
    </div>
  </div>
);

const App = () => {
  return (
    <>
      <ScrollToTop />
         <PopupMessage/>
      <WhatsAppButton />
      <div className="page-wrapper">
        <div className="global-styles">
          <div className="style-overrides w-embed"></div>
          <div className="color-schemes w-embed"></div>
          <div className="hubspot-styles w-embed">Custom Styles</div>
        </div>
        <Header />
    
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<About />} path="/about" />
            <Route element={<ServiceDetails />} path="/service/:slug" />
            <Route element={<Project />} path="/projects" />
            <Route element={<Contact />} path="/contact" />
            <Route element={<Pricing />} path="/pricing" />
            <Route element={<FintechSolutions />} path="/fintech-solutions" />
            {/* <Route element={<Blog />} path="/blogs" /> */}
            <Route element={<TermsCondition />} path="/terms-condition" />
            <Route element={<ProvacyPolicy />} path="/privacy-policy" />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </>
  );
};

export default App;
