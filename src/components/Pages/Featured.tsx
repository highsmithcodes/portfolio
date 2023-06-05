import React from 'react';

const Featured: React.FC = () => {
    const [index, setIndex] = React.useState(0);

    // const projects = ["Basement Brew", "Staff Management", "DevWeight"]
    const projectx = [
        {id: 1, title: 'BrainBee', content: 'E-Commerce Store built with a GraphQL API, NodeJS, MongoDB using Apollo Client, React and TailwindCSS for the Front-End.', languages: 'React, GraphQL, MongoDB Atlas, TailwindCSS, Apollo and Netlify', git: 'https://github.com/highsmithcodes/chattaroony', link: 'https://exquisite-marshmallow-504670.netlify.app', thumbnail: 'https://github.com/highsmithcodes/portfolio/assets/17016293/dbdc34be-c34d-4a21-bdd8-f41d4c613ffd'},   
        {id: 2, title: 'Kept', content: 'Application using a Firebase Login/Regiestration with React, TailwindCSS, Sass and Jest for testing', languages: 'React, Sass, TailwindCSS, Firebase, Jest and Netflify', git: 'https://github.com/highsmithcodes/employee-management-app', link: 'https://main--symphonious-swan-afb5e0.netlify.app/', thumbnail: 'https://github.com/highsmithcodes/portfolio/assets/17016293/0d636155-6c58-440c-bfef-9449b9575eb9'},     
        {id: 3, title: 'Cannabis Benchmarks', content: 'E-Commerce Store built within a Wordpress CMS, using Javascript, SASS, PHP, hosted on WPengine with Cloudflare', languages: 'PHP, Javascript, Sass', link: 'https://www.cannabisbenchmarks.com/', thumbnail: 'https://github.com/highsmithcodes/portfolio/assets/17016293/f266ab87-ec70-4869-8a93-f1093a4e7ec1'},
    ];
    return (
        <div id="featured">
            <div className="container">
                <div className="columns is-mobile">
                    <div className="column is-three-quarters">
                        <h2 className="text-left">Portfolio</h2>
                            {projectx.map((_, idx) => (
                            <div className="card columns ">
                                <div className="card-description column is-two-fifths">
                                    <div>
                                        <div className="top text-left">
                                            <div className="h4 black">{_.title}</div>
                                            <div className='lighter'>{_.content}</div>
                                            <br />
                                            <div className='desc'>Made with: {_.languages}</div> 
                                        </div>
                                        <div className='links'>
                                            <a href={_.git} target="_blank"><i className="fab fa-github"></i><br/>Code</a>
                                            
                                            {_.link ? <a href={_.link} target="_blank"><i className="fa-solid fa-arrow-up-right-from-square"></i><br/>Live Demo</a> : null}

                                        </div>
                                    </div>
                                </div>
                                <div className="card-description column is-three-fifths box p-0">
                                    <div>
                                    <a href={_.link} target="_blank">
                                        <img src={_.thumbnail} className='h-100'/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            ))}

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Featured;
