import React, {useState, useEffect} from 'react';
import '../css/main.css';
import Menu from '../components/Nav/Nav';
import About from './Pages/About';
import Featured from './Pages/Featured';
import Contact from './Pages/Contact';
import Header from './Pages/Header';
import Footer from './Nav/Footer';
import CursorBox from './Functions/Cursor';
import Experience from './Pages/Experience';


const Layout: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);

    // Add a scroll event listener to track the scroll position
    useEffect(() => {
        const handleScroll = () => {
        if (window.scrollY > 110) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener when the component unmounts
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Define a CSS class to apply when scrolled is true
    const scrollClass = scrolled ? 'scrolled' : '';

    return (
        <div className="main">
            <CursorBox />
            <div className="layout-container container is-max-desktop">
                <div className="columns">
                    <div className={`column is-one-third ${scrollClass}`}>
                        <Menu />
                    </div>
                    <div className="column is-two-thirds">
                        <div className='main-dashboard'>
                        <About />
                        <Experience />
                        <Featured />
                        <Contact />
                        </div>
                        <Footer />
                    </div>
                </div>
            </div>
         
        </div>
    );
}

export default Layout;
