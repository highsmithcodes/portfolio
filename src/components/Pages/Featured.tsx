import React, { FC } from "react";

const Featured: FC = () => {
  return (
    <div id="featured" className="pb-36">
      {projectx.map((_, index) => (
        <div key={index} className="mb-6 flex flex-row">
          <div className="w-1/3">
            <div>
              <a href={_.link} target="_blank">
                <img src={_.thumbnail} className="h-100" />
              </a>
            </div>
          </div>
          <div className="w-2/3">
            <div className="pl-2">
              <p>
                {_.title}
                {_.link ? (
                  <a href={_.link} target="_blank">
                    <i
                      className="fa-solid fa-arrow-up-right-from-square"
                      style={{ fontSize: "14px", marginLeft: "10px" }}
                    ></i>
                  </a>
                ) : null}
                {_.git ? (
                  <a href={_.git} target="_blank">
                    <i
                      className="fab fa-github"
                      style={{ fontSize: "14px", marginLeft: "10px" }}
                    ></i>
                  </a>
                ) : null}
              </p>
              <div>{_.content}</div>
              <br />
              {_.languages && (
                <ul className="flex flex-row space-x-3">
                  {_.languages.split(", ").map((language, index) => (
                    <li
                      key={index}
                      className="rounded-full bg-emerald-900 text-neutral-100 text-xs p-2"
                    >
                      {language}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Featured;

const projectx = [
  {
    title: "BrainBee",
    content: "Headless E-Commerce Website",
    languages:
      "React, TailwindCSS, GraphQL, MongoDB Atlas, Stripe, Apollo, Netlify",
    git: "https://github.com/highsmithcodes/chattaroony",
    link: "https://exquisite-marshmallow-504670.netlify.app",
    thumbnail:
      "https://github.com/highsmithcodes/githubCalendarScript/assets/17016293/d086107a-0972-476d-a171-33ae6d6d024b",
  },
  {
    title: "Shopify Website",
    content: "E-Commerce Website",
    languages: "Hydrogen, Remix, Typescript, Shopify CLI, GraphQL",
    link: "https://solar-shopify.vercel.app",
    git: "https://github.com/highsmithcodes/solar-shopify",
    thumbnail:
      "https://user-images.githubusercontent.com/17016293/272103803-252c766f-724c-49e9-b08c-270a46c1a25a.png",
  },
  {
    title: "Basement Brew",
    content: "Social Media Website",
    languages: "Typescript, React, Redux, Sass, TailwindCSS, AWS, Heroku",
    git: "https://github.com/highsmithcodes/basementbrew",
    link: "https://calm-citadel-57835-a56a50f8f306.herokuapp.com/",
    thumbnail:
      "https://github.com/highsmithcodes/githubCalendarScript/assets/17016293/ace6b4f2-6096-4438-a244-8817cc1fd8e7",
  },
];
