import React from "react";
import "../../css/main.css";

const About: React.FC = () => {
  return (
    <div id="about" className="pt-32">
      <div className="flex flex-col justify-start align-start text-left pb-36">
        <div className="pb-4">
          <div className="text-4xl font-bold">Ezra Highsmith</div>
          <div className="text-lg py-2">
            Senior Software Engineer, Front-End
          </div>
          <ul className="flex flex-row space-x-3 flex-wrap">
            <li>
              <a href="https://github.com/highsmithcodes" target="_blank">
                <i className="fab fa-github text-emerald-900"></i>
              </a>
            </li>
            <li>
              <a href="mailto: ezrahighsmith@gmail.com" target="_blank">
                <i className="fa-solid fa-envelope text-emerald-900"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/ezra-highsmith-07a04787/"
                target="_blank"
              >
                <i className="fa-brands fa-linkedin text-emerald-900"></i>
              </a>
            </li>
          </ul>
        </div>

        <p className="opacity-80">
          Hey! I'm a passionate Senior Software Engineer with over
          <span className="font-bold"> nine years </span>
          of experience.
        </p>
        <p className="opacity-80 pt-2">
          I enjoy building scalable, high-quality web applications, architecting
          maintainable state management solutions, finding opportunities to
          optimizing site performance and improve codebase structure. I have
          experience with Test Driven Development, SEO, Accessibility, API
          integration, GraphQL and Responsive Design.
        </p>
        <p className="opacity-80 pt-2">
          I'm typically working with React, Typescript, Tailwind and Next.
        </p>
      </div>
    </div>
  );
};

export default About;
