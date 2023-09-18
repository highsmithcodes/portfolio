import React from 'react';

const Featured: React.FC = () => {
    const [index, setIndex] = React.useState(0);

    // const projects = ["Basement Brew", "Staff Management", "DevWeight"]
    const projectx = [
        {id: 1, title: 'Seymour Paint', content: 'E-Commerce Store built with Javascript, SASS, HTML, PHP, jQuery, WooCommerce and Bootstrap', languages: 'Javascript, Sass, HTML, CMS, Bootstrap, Woocommerce, PHP, jQuery', link: 'https://www.seymourpaint.com/', thumbnail: 'https://github.com/highsmithcodes/portfolio/assets/17016293/545d95ee-cea1-440e-91be-ea315f92d7d0'},     
        {id: 4, title: 'Benchmarks', content: 'E-Commerce Store built with Javascript, SASS, HTML, PHP, jQuery, WooCommerce and Bootstrap', languages: 'Javascript, Sass, HTML, CMS, Bootstrap, Woocommerce, PHP, jQuery', link: 'https://www.cannabisbenchmarks.com/', thumbnail: 'https://github.com/highsmithcodes/portfolio/assets/17016293/f266ab87-ec70-4869-8a93-f1093a4e7ec1'},
        {id: 2, title: 'BrainBee', content: 'Headless E-Commerce Store built with ReactJS, GraphQL, MongoDB Atlas, TailwindCSS, Apollo and Netlify.', languages: 'ReactJS, GraphQL, MongoDB Atlas, TailwindCSS, Apollo and Netlify', git: 'https://github.com/highsmithcodes/chattaroony', link: 'https://exquisite-marshmallow-504670.netlify.app', thumbnail: 'https://github.com/highsmithcodes/githubCalendarScript/assets/17016293/d086107a-0972-476d-a171-33ae6d6d024b'},   
        {id: 6, title: 'Solar Company', content: 'Business Site for Solar Company built with Javascript, PHP, jQuery, CSS', languages: 'React, Sass, TailwindCSS, Firebase, Jest and Netflify', git: 'https://github.com/highsmithcodes/employee-management-app', link: 'https://www.reenergizeco.com/', thumbnail: 'https://github.com/highsmithcodes/portfolio/assets/17016293/a1004333-818e-46a6-a1b3-42c676ddfe58'},
        {id: 7, title: 'Basement Brew', content: 'Headless Social Website for Home Brewers using AWS DynamoDB, AWS Amplify, Typescript, React, Redux, TailwindCSS, and Sass, deployed on Heroku', languages: 'Typescript, React, Sass, TailwindCSS, AWS, Heroku', git: 'https://github.com/highsmithcodes/basementbrew', link: 'https://calm-citadel-57835-a56a50f8f306.herokuapp.com/', thumbnail: 'https://github.com/highsmithcodes/githubCalendarScript/assets/17016293/ace6b4f2-6096-4438-a244-8817cc1fd8e7'},
        {id: 5, title: 'HCA Law', content: 'Business Site for Law Firm, built with ReactJS, Sass, PHP, Jest', languages: 'React, Sass, Bootstrap, Jest', link: 'https://www.hcalawyers.com.au/', thumbnail: 'https://github.com/highsmithcodes/portfolio/assets/17016293/12dccd6d-e16c-4dd5-8ba7-4e87adc91c78'},     
        {id: 3, title: 'Pet Wear', content: 'Shopify E-Commerce Store built with Liquid, JSON, and CSS', languages: 'Liquid, CSS, JSON, Shopify', link: 'https://puphazit.com/', thumbnail: 'https://github.com/highsmithcodes/portfolio/assets/17016293/bb40741f-844d-4c97-8d69-8e9b050e67c0'},     
    ];
    return (
        <div id="featured" className='hero-body'>
            <div className="container">
                        {projectx.map((_, idx) => (
                        <div className="card columns " style={{marginBottom: '40px'}}>
                             <div className="card-description column is-one-quarter text-left pt-0" style={{boxShadow: 'none',backgroundColor: 'transparent', display: 'flex', justifyContent: 'start', alignItems: 'center'}}>
                                <div>
                                <a href={_.link} target="_blank">
                                    <img src={_.thumbnail} className='h-100 card-img' />
                                    </a>
                                </div>
                            </div>
                            <div className="card-description column is-three-quarters pt-0">
                                <div>
                                    <div className="top text-left">
                                        <p className="white" style={{paddingTop:'0', fontSize:'20px'}}>{_.title}   
                                            {_.link ? <a href={_.link} target="_blank" className='white'><i className="fa-solid fa-arrow-up-right-from-square" style={{fontSize: '14px', marginLeft: '10px'}}></i></a> : null}
                                            {_.git ? <a href={_.git} target="_blank" className='white'><i className="fab fa-github" style={{fontSize: '14px', marginLeft: '10px'}}></i></a> : null}

                                        </p>
                                        <div className='lighter white'>{_.content}</div>
                                        <br />
                                        {/* <div className='desc'>{_.languages}</div>  */}
                                    </div>
                                    
                                </div>
                            </div>
                           
                        </div>
                        ))}

            </div>
        </div>
    );
}

export default Featured;
