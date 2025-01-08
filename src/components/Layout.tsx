import React, { useState, useEffect } from "react";
import Menu from "../components/Nav/Nav";
import About from "./Pages/About";
import Featured from "./Pages/Featured";
import Contact from "./Pages/Contact";
import Footer from "./Nav/Footer";
import Experience from "./Pages/Experience";

const Layout: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  // Add a scroll event listener to track the scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Define a CSS class to apply when scrolled is true
  const scrollClass = scrolled ? "scrolled" : "";

  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col lg:flex-row sm:flex-col">
        <div className="w-full lg:w-1/3 sm:w-full relative pr-10 hidden sm:hidden lg:block">
          <div className={`sticky top-0 ${scrollClass}`}>
            <Menu />
          </div>
        </div>
        <div className="w-full lg:w-2/3 sm:w-full">
          <div className="main-dashboard">
            <About />
            <Experience />
            {/* <Featured />
            <Contact /> */}
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;
