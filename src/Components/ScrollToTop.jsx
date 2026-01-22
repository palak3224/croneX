import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top on route change
    // Check if mobile device
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
                     (window.matchMedia && window.matchMedia("(max-width: 991px)").matches);
    
    if (isMobile) {
      // Use native scroll on mobile
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "auto",
      });
    } else if (window.lenis) {
      // Use Lenis on desktop
      window.lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "auto",
      });
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;

