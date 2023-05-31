import React from 'react';

const Featured: React.FC = () => {
    const [index, setIndex] = React.useState(0);

    // const projects = ["Basement Brew", "Staff Management", "DevWeight"]
    const projectx = [
        {id: 1, title: 'BrainBee', content: 'E-Commerce React Store built with a GraphQL API, NodeJS, MongoDB Backend using Apollo Client, React and TailwindCSS for the Front-End.', languages: 'React, GraphQL, MongoDB Atlas, TailwindCSS, Apollo and Netlify', git: 'https://github.com/highsmithcodes/chattaroony', link: 'https://exquisite-marshmallow-504670.netlify.app', thumbnail: 'https://github.com/highsmithcodes/portfolio/assets/17016293/cdc4bcea-9a22-496e-9c81-79d87dc2c5a1'},   
        {id: 2, title: 'Kept', content: 'Kept is an organizational database of tutorials, docs and department specific updates. Keep your team organized with Kept.', languages: 'React, Sass, TailwindCSS, Firebase, Jest and Netflify', git: 'https://github.com/highsmithcodes/employee-management-app', link: 'https://main--symphonious-swan-afb5e0.netlify.app/', thumbnail: 'https://github.com/highsmithcodes/portfolio/assets/17016293/62851d1f-d468-4861-a1b1-d4bf4c3fe2d8'},     
        {id: 3, title: 'DevWeight', content: 'DevWeight is an educational platform helping the everyday developer sharpen their skills.', languages: 'React, Sass, JSON and Netflify', git: 'https://github.com/highsmithcodes/dev-tutorials', link: 'https://www.devweight.com/', thumbnail: 'https://github.com/highsmithcodes/portfolio/assets/17016293/95c74b17-ff4d-444b-9d08-18d23c9516d2'},
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
