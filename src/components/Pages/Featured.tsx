import React from 'react';

const Featured: React.FC = () => {
    const [index, setIndex] = React.useState(0);

    // const projects = ["Basement Brew", "Staff Management", "DevWeight"]
    const projectx = [
        {id: 1, title: 'Basement Brew', content: 'Basement Brew is an online community where home brewers can share, like and comment on other beer recipes in the community.', languages: 'Typescript, React and Firebase', link: 'https://github.com/highsmithcodes/basementbrew'},
        {id: 2, title: 'Staff Portal (Kept)', content: 'Kept is an organizational database of tutorials, docs and department specific updates. Keep your team organized with Kept.', languages: 'React, Firebase and Netflify', link: 'https://github.com/highsmithcodes/employee-management-app'},
        {id: 3, title: 'DevWeight', content: 'DevWeight is an educational platform helping the everyday developer sharpen their skills.', languages: 'React, Sass, JSON and Netflify', link: 'https://github.com/highsmithcodes/dev-tutorials'}
    ];
    return (
        <div id="featured">
            <div className="container">
                <div className="columns is-mobile">
                    <div className="column is-three-quarters">
                        <h2 className="border-left">Side Projects</h2>
                        <p>I'm almost always working on a side projects</p>
                        <div className="card columns">
                            
                            <div className="card-description column is-two-fifths">
                               <ul>
                                    {projectx.map((_, idx) => (
                                        <li
                                        className={`${index === idx ? "active" : ""}`}
                                        onClick={() => {
                                          setIndex(idx);
                                        }}
                                        ><a>{_.title}</a></li>
                                    ))}
                               </ul>
                            </div>
                            <div className="card-description column is-three-fifths">
                                <div className='project-desc'>
                                    {projectx.map((_, idx) => (
                                        <div
                                        className={`${index === idx ? "active" : ""}`}
                                        onClick={() => {
                                          setIndex(idx);
                                        }}
                                        >
                                            <div className="top">
                                                <div className="h4 black">{_.title}</div>
                                                <div className='desc'>{_.content}</div>
                                                <br />
                                                <div className='desc'>Made with: {_.languages}</div> 
                                            </div>
                                            <div className='links'>
                                                <a href={_.link} target="_blank"><i className="fab fa-github"></i></a>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Featured;
