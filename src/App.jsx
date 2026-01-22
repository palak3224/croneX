import { lazy, Suspense } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { Route, Routes } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop";
import WhatsAppButton from "./Components/WhatsAppButton";

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

// Loading fallback component
const PageLoader = () => (
  <div style={{ 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    minHeight: '50vh' 
  }}>
    <div>Loading...</div>
  </div>
);

const App = () => {
  return (
    <>
      <ScrollToTop />
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
