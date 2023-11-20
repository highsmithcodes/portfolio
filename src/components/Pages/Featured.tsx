import React from 'react';

const Featured: React.FC = () => {
    const [index, setIndex] = React.useState(0);

    // const projects = ["Basement Brew", "Staff Management", "DevWeight"]
    const projectx = [
        // {id: 6, title: 'Solar Company', content: 'Business Website', languages: 'React, Sass, Jest, CMS, WPEngine, MySQL', link: 'https://www.reenergizeco.com/', thumbnail: 'https://github.com/highsmithcodes/portfolio/assets/17016293/a1004333-818e-46a6-a1b3-42c676ddfe58'},
        {id: 2, title: 'BrainBee', content: 'Headless E-Commerce Website', languages: 'React, TailwindCSS, GraphQL, MongoDB Atlas, Stripe, Apollo, Netlify', git: 'https://github.com/highsmithcodes/chattaroony', link: 'https://exquisite-marshmallow-504670.netlify.app', thumbnail: 'https://github.com/highsmithcodes/githubCalendarScript/assets/17016293/d086107a-0972-476d-a171-33ae6d6d024b'},   
        // {id: 4, title: 'Benchmarks', content: 'E-Commerce | Blog Website', languages: 'Javascript, PHP, jQuery, Sass, HTML, CMS, Bootstrap, Woocommerce, MySQL', link: 'https://www.cannabisbenchmarks.com/', thumbnail: 'https://github.com/highsmithcodes/portfolio/assets/17016293/f266ab87-ec70-4869-8a93-f1093a4e7ec1'},
        {id: 7, title: 'Shopify Website', content: 'E-Commerce Website', languages: 'Hydrogen, Remix, Typescript, Shopify CLI, GraphQL', link: 'https://solar-shopify.vercel.app', git: 'https://github.com/highsmithcodes/solar-shopify', thumbnail: 'https://user-images.githubusercontent.com/17016293/272103803-252c766f-724c-49e9-b08c-270a46c1a25a.png'},     
        // {id: 1, title: 'Seymour Paint', content: 'E-Commerce Website', languages: 'Javascript, PHP, jQuery, Sass, CMS, Bootstrap, Woocommerce', link: 'https://www.seymourpaint.com/', thumbnail: 'https://github.com/highsmithcodes/portfolio/assets/17016293/545d95ee-cea1-440e-91be-ea315f92d7d0'},     
        {id: 7, title: 'Basement Brew', content: 'Social Media Website', languages: 'Typescript, React, Redux, Sass, TailwindCSS, AWS, Heroku', git: 'https://github.com/highsmithcodes/basementbrew', link: 'https://calm-citadel-57835-a56a50f8f306.herokuapp.com/', thumbnail: 'https://github.com/highsmithcodes/githubCalendarScript/assets/17016293/ace6b4f2-6096-4438-a244-8817cc1fd8e7'},
    ];
    return (
        <div id="featured" className='hero-body'>
            <div className="container">
                        {projectx.map((_, idx) => (
                        <div className="card columns " style={{marginBottom: '40px'}}>
                             <div className="card-description column is-two-fifths text-left pt-0" style={{boxShadow: 'none',backgroundColor: 'transparent', display: 'flex', justifyContent: 'start', alignItems: 'start'}}>
                                <div>
                                <a href={_.link} target="_blank">
                                    <img src={_.thumbnail} className='h-100 card-img' />
                                    </a>
                                </div>
                            </div>
                            <div className="card-description column is-two-thirds pt-0">
                                <div>
                                    <div className="top text-left">
                                        <p className="white" style={{paddingTop:'0', fontSize:'20px',lineHeight:'1'}}>{_.title}   
                                            {_.link ? <a href={_.link} target="_blank" className='white'><i className="fa-solid fa-arrow-up-right-from-square" style={{fontSize: '14px', marginLeft: '10px'}}></i></a> : null}
                                            {_.git ? <a href={_.git} target="_blank" className='white'><i className="fab fa-github" style={{fontSize: '14px', marginLeft: '10px'}}></i></a> : null}

                                        </p>
                                        <div className='lighter white'>{_.content}</div>
                                        <br />
                                        {_.languages && (
                                        <ul className='tools' style={{marginTop:'0'}}>
                                            {_.languages.split(', ').map((language, index) => (
                                            <li key={index} className='desc'>{language}</li>
                                            ))}
                                        </ul>
                                        )}
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
