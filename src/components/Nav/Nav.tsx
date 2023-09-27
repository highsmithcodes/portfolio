import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import logo from '../../img/h-blue.png'

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
    <Router>
      <nav className="nav-container" style={{ display: 'flex', justifyContent : 'start', alignItems: 'end', flexDirection: 'column', padding: '55px 10px 0 10px' }}>
        {/* <img src={logo} width={50} height={50} /> */}
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
