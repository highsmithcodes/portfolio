import React from 'react';

const Featured: React.FC = () => {
    const [index, setIndex] = React.useState(0);

    // const projects = ["Basement Brew", "Staff Management", "DevWeight"]
    const projectx = [
        {id: 4, title: 'Cannabis Benchmarks', content: 'E-Commerce Store built with Javascript, SASS, HTML, PHP, jQuery, WooCommerce and Bootstrap', languages: 'Javascript, Sass, HTML, CMS, Bootstrap, Woocommerce, PHP, jQuery', link: 'https://www.cannabisbenchmarks.com/', thumbnail: 'https://github.com/highsmithcodes/portfolio/assets/17016293/f266ab87-ec70-4869-8a93-f1093a4e7ec1'},
        {id: 1, title: 'Seymour Paint', content: 'E-Commerce Store built with Javascript, SASS, HTML, PHP, jQuery, WooCommerce and Bootstrap', languages: 'Javascript, Sass, HTML, CMS, Bootstrap, Woocommerce, PHP, jQuery', link: 'https://www.seymourpaint.com/', thumbnail: 'https://github.com/highsmithcodes/portfolio/assets/17016293/545d95ee-cea1-440e-91be-ea315f92d7d0'},     
        {id: 2, title: 'BrainBee', content: 'Headless E-Commerce Store built with ReactJS, GraphQL, MongoDB Atlas, TailwindCSS, Apollo and Netlify.', languages: 'ReactJS, GraphQL, MongoDB Atlas, TailwindCSS, Apollo and Netlify', git: 'https://github.com/highsmithcodes/chattaroony', link: 'https://exquisite-marshmallow-504670.netlify.app', thumbnail: 'https://github.com/highsmithcodes/portfolio/assets/17016293/dbdc34be-c34d-4a21-bdd8-f41d4c613ffd'},   
        {id: 3, title: 'Pet Wear', content: 'Shopify E-Commerce Store built with Liquid, JSON, and CSS', languages: 'Liquid, CSS, JSON, Shopify', link: 'https://puphazit.com/', thumbnail: 'https://github.com/highsmithcodes/portfolio/assets/17016293/bb40741f-844d-4c97-8d69-8e9b050e67c0'},     
        {id: 5, title: 'HCA Law', content: 'Business Site for Law Firm, built with ReactJS, Sass, PHP, Jest', languages: 'React, Sass, Bootstrap, Jest', link: 'https://www.hcalawyers.com.au/', thumbnail: 'https://github.com/highsmithcodes/portfolio/assets/17016293/12dccd6d-e16c-4dd5-8ba7-4e87adc91c78'},     
        {id: 6, title: 'Kept', content: 'Application using a Firebase Login/Registration with React, TailwindCSS, Sass and Jest for testing', languages: 'React, Sass, TailwindCSS, Firebase, Jest and Netflify', git: 'https://github.com/highsmithcodes/employee-management-app', link: 'https://main--symphonious-swan-afb5e0.netlify.app/', thumbnail: 'https://github.com/highsmithcodes/portfolio/assets/17016293/0d636155-6c58-440c-bfef-9449b9575eb9'},     
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
                                            <div className='links'>
                                                {_.link ? <a href={_.link} target="_blank"><i className="fa-solid fa-arrow-up-right-from-square"></i>Live Site</a> : null}
                                                {_.git ? <a href={_.git} target="_blank"><i className="fab fa-github"></i>Github</a> : null}
                                            </div>
                                            {/* <div className='desc'>{_.languages}</div>  */}
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
