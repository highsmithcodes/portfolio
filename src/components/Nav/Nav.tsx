import React, { useState, useEffect, FC } from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";

const Menu: FC = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const headerHeight =
        (document.getElementById("header") as HTMLElement)?.offsetHeight || 0;
      const divs = document.querySelectorAll(
        'div[id^="blog"], div[id^="about"], div[id^="experience"], div[id^="featured"]'
      );

      divs.forEach((div) => {
        const top = (div as HTMLElement).offsetTop - headerHeight;
        const height = (div as HTMLElement).offsetHeight;
        const divId = div.getAttribute("id");

        if (window.pageYOffset >= top && window.pageYOffset < top + height) {
          setActiveSection(divId || "");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check active section on initial render

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const headerHeight =
        (document.getElementById("header") as HTMLElement)?.offsetHeight || 0;
      const top = section.offsetTop - headerHeight;
      window.scrollTo({
        top,
        behavior: "smooth",
      });
    }
  };

  return (
    <Router>
      <nav className="flex justify-end items-end flex-column w-full pt-32">
        <ul className="menu w-32" dir="rtl">
          {navItems.map((item) => (
            <li
              key={item.path}
              className={
                activeSection === item.path
                  ? "active flex items-center ease-in-out"
                  : "opacity-50 ease-in-out"
              }
            >
              <NavLink
                to={`#${item.path}`}
                onClick={() => scrollToSection(item.path)}
                activeClassName="active"
                exact
              >
                {item.name}
              </NavLink>
              {activeSection === item.path && (
                <span className="bg-emerald-900 h-0.5 block animate-grow-line mr-2"></span>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </Router>
  );
};

export default Menu;

const navItems = [
  { path: "about", name: "About" },
  { path: "experience", name: "Experience" },
  // { path: "featured", name: "Projects" },
  // { path: "blog", name: "Blog" },
];
