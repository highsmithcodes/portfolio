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
                <div className='columns is-mobile'>
                  <h2 className="text-align-center">About</h2>
                  {/* <div className='sub-title'>Denver based Front-End Developer</div> */}
                </div>

                <div className="columns is-mobile">
                    <div className="column is-three-quarters" >
                    
                        <div className='columns'>
                          <div className="column is-four-fifths has-text-left align-middle">
                              <p>Hey! My name is Ezra, I'm a Front-End/Full Stack Developer base out of Denver, CO.</p>
                              <br/>
                              <p>My tech career began a few years out of high school, I wanted a career that was both stimulating and artistic.</p>
                              <br/>
                              <p>I've been fortunte enough to work at a variety of companies throughout my tech journey, from a <a href="https://www.fineartprinting.la

" target="_blank">startup</a>, a <a href="https://www.cision.com/" target="_blank">software company</a>, a<a href="https://mjbizdaily.com/" target="_blank"> news outlet</a>, and a <a href="https://www.digitalmarketingcompany.com/" target="_blank"> marketing agency</a>.</p>
                              <br/>
                              <p>I enjoy what I do and am always learning and evolving my skillset.</p>

                                  <br />
                                  <p> 
                                      I've been working with 
                                      <div
                                          className="slideshowSlider p-relative language"
                                      >{languages.map((_, idx) => (
                                          <div
                                            key={idx}
                                            className={`slideshowDot${index === idx ? " active" : ""}`}
                                          >{_}</div>
                                        ))}
                                        </div>
                                     for
                                     <div
                                          className="slideshowSlider p-relative years"
                                      >{years.map((_, idx) => (
                                          <div
                                            key={idx}
                                            className={`slideshowDot${index === idx ? " active" : ""}`}
                                          >{_}</div>
                                        ))}
                                        </div> 
                                      year(s).
                                  </p>
                              </div>
                        </div>
                    </div>
                </div>


                {/* <div className='columns is-mobile'>

                <div className='column is-three-quarters' style={{ marginRight: '0'}}>
                    <div className="columns"> */}
                            {/* <div className='column is-four-fifths'>
                                <div className='side-measure'>
                                    <span>0 Years</span>
                                    <span>7 Years</span> 
                                    <div className='fill' style={{ height: `${-index * 100}` }}></div>
                                    {years.map((_, idx) => (
                                        <div
                                          key={idx}
                                          className={`fill ${index === idx ? " active" : ""}`}
                                          style={{ width: `${_}9%` }}
                                        ></div>
                                      ))}
          
                                </div> 
                            </div> */}

                        {/* </div>

                    </div>
                </div> */}

            </div>
        </div>
    );
}

export default About;
