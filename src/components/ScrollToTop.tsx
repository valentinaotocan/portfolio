import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Resets the scroll position to the top of the page
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
