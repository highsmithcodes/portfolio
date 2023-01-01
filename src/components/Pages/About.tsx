import React, { useEffect } from 'react';
import '../../css/main.css';
import headshot from '../../img/highsmith-headshot.png';

const About: React.FC = () => {
    const delay = 2000;

    const languages = ['Javascript', 'React', 'Typescript', 'jQuery', 'PostgreSQL', 'Docker', 'Git']
    const years = ['5', '3', '1', '6', '2', '1', '6']
    const [index, setIndex] = React.useState(0);

    React.useEffect(() => {
      setTimeout(
        () =>
          setIndex((prevIndex) =>
            prevIndex === languages.length - 1 ? 0 : prevIndex + 1
          ),
        delay
      );
  
      return () => {};
    }, [index]);
   
    return (
        <div className="hero-body" id="about">
            <div className="container">
                {/* <span className='top left'>1</span>
                <span className='top right'>7</span> */}
                <div className="columns is-mobile">
                    <div className="column is-three-quarters">
                        <h2 className="border-left">About Me</h2>
                        <div className="columns">
                            <div className='column is-one-fifth'>
                                <div className='side-measure'>
                                    <span>7 Years</span>
                                    <span>0 Years</span>
                                    {/* <div className='fill' style={{ height: `${-index * 100}` }}></div> */}
                                    {years.map((_, idx) => (
                                        <div
                                          key={idx}
                                          className={`fill ${index === idx ? " active" : ""}`}
                                          style={{ height: `${_}9%` }}
                                        ></div>
                                      ))}
                                    {/* {years.map((backgroundColor, index) => (
                                        <div className='fill' style={{ height: `${backgroundColor}` }}></div>
                                    // <div
                                    //     className="slide"
                                    //     key={index}
                                    //     style={{ backgroundColor }}
                                    // ></div>
                                   
                                    ))}
                     */}
                                </div>
                            </div>
                            <div className="column is-four-fifths has-text-left align-middle">
                                <p>Hey, my name is <b>Ezra</b>, I'm happy you stopped by!</p>
                                <br />
                                <p>I've been developing websites for over 7 years now. A young me would be pretty blown away by some of the tech knowledge I have now, and that's why I love my job.</p>
                                <br />
                                <p>Coding is a journey of constant growth and challenge - I'm genuinly passionate about it and have a great time doing it.</p>
                                <br />
                                <p>
                                    As for experience, I have
                                    <div
                                        className="slideshowSlider p-relative years"
                                    >{years.map((_, idx) => (
                                        <div
                                          key={idx}
                                          className={`slideshowDot${index === idx ? " active" : ""}`}
                                        >{_}</div>
                                      ))}
                                      </div> year(s) experience using
                                    <div
                                        className="slideshowSlider p-relative language"
                                    >{languages.map((_, idx) => (
                                        <div
                                          key={idx}
                                          className={`slideshowDot${index === idx ? " active" : ""}`}
                                        >{_}</div>
                                      ))}
                                      </div>.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
