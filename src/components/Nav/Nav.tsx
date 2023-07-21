import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';

const Menu: React.FC = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const headerHeight = (document.getElementById('header') as HTMLElement)?.offsetHeight || 0;
      const divs = document.querySelectorAll('div[id^="blog"], div[id^="about"], div[id^="experience"], div[id^="featured"]');

      divs.forEach((div) => {
        const top = (div as HTMLElement).offsetTop - headerHeight;
        const height = (div as HTMLElement).offsetHeight;
        const divId = div.getAttribute('id');

        if (window.pageYOffset >= top && window.pageYOffset < top + height) {
          setActiveSection(divId || '');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check active section on initial render

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const headerHeight = (document.getElementById('header') as HTMLElement)?.offsetHeight || 0;
      const top = section.offsetTop - headerHeight;
      window.scrollTo({
        top,
        behavior: 'smooth',
      });
    }
  };

  const navItems = [
    // { path: 'home', name: 'Home' },
    { path: 'about', name: 'About' },
    { path: 'experience', name: 'Experience' },
    { path: 'featured', name: 'Projects' },
    { path: 'blog', name: 'Blog' },
  ];
  return (
    <Router basename="/portfolio">
      <nav className="nav-container" style={{ display: 'flex', justifyContent : 'center', alignItems: 'start', flexDirection: 'column' }}>
        <div style={{ display: 'flex', justifyContent : 'center', alignItems: 'start', flexDirection: 'column', textAlign: 'left' }}>
          <h1 className='white'>Highsmith Codes<br />
              <span>Front-End & Full Stack Developer</span>
          </h1>
          <div style={{ marginTop: '20px', marginBottom: '20px', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <ul className="contact" style={{ display: 'flex', justifyContent : 'center', alignItems: 'start', flexDirection: 'row' }}>
                  <li><a href="https://github.com/highsmithcodes" target="_blank"><i className="fab fa-github"></i></a></li>
                  {/* <li><a href="https://codepen.io/highsmithcodes" target="_blank"><i className="fas fa-code"></i></a></li> */}
                  <li><a href="mailto: veehighsmith@gmail.com" target="_blank"><i className="fa-solid fa-envelope"></i></a></li>
                  <li><a href="https://www.linkedin.com/in/veronica-highsmith-07a04787/" target="_blank"><i className="fa-brands fa-linkedin"></i></a></li>
                  
              </ul>
          </div>
        </div>

        <ul className="menu">
          {navItems.map((item) => (
            <li key={item.path} className={activeSection === item.path ? 'active' : ''}>
              <NavLink
                to={`#${item.path}`}
                onClick={() => scrollToSection(item.path)}
                activeClassName="active"
                className='white'
                exact
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </Router>
  );
}

export default Menu;
