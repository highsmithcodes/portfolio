import React from 'react';

const Posts = () => {
  const sortedData = hardcodedData.sort((a, b) => new Date(b.date_added) - new Date(a.date_added));

  return (
    <div className='pb-48' id="blog">
        <div className="container">
                    <div className='flex-col posts-inner'>
                    {sortedData.map((post) => (
                      <div className='columns' style={{marginBottom: '40px'}}>
                      <div className="column is-full post pt-0" key={post.id}>
                        <a href={`https://www.devweight.com/blog/${post.url}`} target="_blank" rel="noopener noreferrer">
                          <div className='meta white pb-0'>{post.date_added}</div>
                          <h3 className='text-left white'>{post.title}</h3>
                          <p className='white'>{post.description}</p>
                          <div className='tags'>
                            {post.tags.split(', ').map((tag) => (
                              <span key={tag} className='tag'>{tag}</span>
                            ))}
                          </div>
                        </a>
                      </div>
                      </div>
                    ))}
            </div>
        </div>
    </div>
  
  );
};

export default Posts;

const hardcodedData = [
  {
    "id": 1,
    "title": "Adding JSON Data to your React Project",
    "url": "json-data-in-react",
    "description": "Learn how to add JSON Data to your React Project in this straight forward tutorial.",
    "date_added": "May, 3 2022",
    "image": "https://github.com/highsmithcodes/dev-tutorials/assets/17016293/d367ab8d-ca7a-4227-911b-b2dba2c37be4",
    "body": "./posts/post1.md",
    "tags": "json, react, data, blog"
  },
  {
    "id": 2,
    "title": "Deploying Github Project to Netlify",
    "url": "deploying-github-project-to-netlify",
    "description": "Using Netlify is one of the easiest ways to deploy code from your github environment. ",
    "date_added": "May, 8 2022",
    "image": "https://github.com/highsmithcodes/dev-tutorials/assets/17016293/2933acfe-8866-49ae-a0d3-4c082386a07e",
    "body": "./posts/post2.md",
    "tags": "react, github, netlify"
  },
  {
    "id": 3,
    "title": "Adding Sass to your React Project",
    "url": "adding-sass-to-react-project",
    "description": "If your react app is not already using sass, this tutorial will show you a quick and easy way to do it.",
    "date_added": "July, 4 2022",
    "body": "./posts/post3.md",
    "image": "https://github.com/highsmithcodes/dev-tutorials/assets/17016293/7e9edfa9-d1ef-4b8f-aea3-15aceffe9909",
    "tags": "react, sass, preprocessor"
  }
];
