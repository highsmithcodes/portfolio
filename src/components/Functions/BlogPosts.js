import React from 'react';
import { Link } from 'react-router-dom';

const Posts = () => {
  const hardcodedData = [
    {
      "id": 1,
      "title": "Adding JSON Data to your React Project",
      "url": "json-data-in-react",
      "description": "Learn how to add JSON Data to your React Project in this straight forward tutorial.",
      "date_added": "May, 3 2022",
      "image": "./images/thumbnails/json-data-in-react.png",
      "body": "./posts/post1.md",
      "tags": "json, react, data, blog"
    },
    {
      "id": 2,
      "title": "Deploying Github Project to Netlify",
      "url": "deploying-github-project-to-netlify",
      "description": "Using Netlify is one of the easiest ways to deploy code from your github environment. ",
      "date_added": "May, 8 2022",
      "image": "./images/thumbnails/netlify-and-react.png",
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
      "image": "./images/thumbnails/adding-sass-to-react-build.png",
      "tags": "react, sass, preprocessor"
    }
  ];

  const sortedData = hardcodedData.sort((a, b) => new Date(b.date_added) - new Date(a.date_added));

  return (
    <div className='posts hero-body' id="blog">
        <div className="container">
    
                    <div className='flex-row posts-inner'>
                    {sortedData.map((post) => (
                      <div className="column-is-third post" key={post.id}>
                        <a href={`https://www.devweight.com/blog/${post.url}`} target="_blank" rel="noopener noreferrer">
                          <div className='meta white'>{post.date_added}</div>
                          <h3 className='text-left white'>{post.title}</h3>
                          <p className='white'>{post.description}</p>
                          <div className='tags'>
                            {post.tags.split(', ').map((tag) => (
                              <span key={tag} className='tag'>{tag}</span>
                            ))}
                          </div>
                        </a>
                      </div>
                    ))}
        
            </div>
        </div>
    </div>
  
  );
};

export default Posts;