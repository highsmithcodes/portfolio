import React from 'react';
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

    return (
        <div className="main">
            <CursorBox />
            <div className="layout-container container">
                <div className="columns">
                    <div className='column is-one-third'>
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
