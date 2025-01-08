import React from "react";
import "../../css/main.css";

const Experience: React.FC = () => {
  return (
    <div id="experience" className="pb-36">
      <div>
        {jobData.map((job, index) => {
          return (
            <div key={index} className="pb-6">
              <p className="text-lg">
                <a href={job.companyLink} target="_blank">
                  {job.company}
                  <i className="fa-solid fa-arrow-up-right-from-square text-sm pl-2"></i>
                </a>
              </p>
              <p className="font-bold">{job.jobTitle}</p>
              <div>{job.years}</div>
              <p className="opacity-80">{job.description}</p>
              {/* <ul className="flex flex-row space-x-3 pt-4">
                {job.skills.map((skill, index) => (
                  <li
                    key={index}
                    className="rounded-full bg-emerald-900 text-neutral-100 text-xs p-2"
                  >
                    {skill}
                  </li>
                ))}
              </ul> */}
            </div>
          );
        })}
      </div>

      <div className="columns">
        <div className="column is-full text-left">
          <a
            className="text-sm font-bold"
            target="_blank"
            href="https://docs.google.com/document/d/17PEeQ9rQZ1vizUibxW_3h9rZ5s2FJTHHsoiZf8pCD3w/edit?usp=sharing"
          >
            View Full Resume{" "}
            <i
              className="fa-solid fa-arrow-up-right-from-square white"
              style={{ fontSize: "14px", marginLeft: "5px" }}
            ></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Experience;

const jobData = [
  {
    company: "Midwest Tape",
    companyLink: "https://www.linkedin.com/company/midwesttape/",
    jobTitle: "Senior Web Developer",
    years: "2023 - Present",
    description: `Develop, maintain, and improve complex eCommerce web applications and eReaders, collaborating with senior developers while ensuring quality and performance.
    Write technical stories, create documentation, and implement scalable solutions for new and existing applications, leveraging best practices and identifying opportunities for code enhancements.`,
    skills: [
      `HTML/CSS/Sass`,
      "Javascript",
      "React",
      "PHP",
      "Github",
      "Stripe",
      "Shopify",
      "CMS",
      "MySQL",
    ],
  },
  {
    company: "Twelve Three Media",
    companyLink: "https://www.digitalmarketingcompany.com/",
    jobTitle: "Lead Front-End Developer",
    years: "2020 - 2023",
    description: `Spearhead the development of websites, building themes, implementing
            dynamic/customizable components, incorporating new user-facing
            features and leverage a mobile-first design approach to enhance the
            overall user experience. Collaborate closely with product managers,
            designers, and operations teams to create intuitive user
            experiences, optimizing site speed scores, and reduce page
            abandonment rates.`,
    skills: [
      `HTML/CSS/Sass`,
      "Javascript",
      "React",
      "PHP",
      "Github",
      "Stripe",
      "Shopify",
      "CMS",
      "MySQL",
    ],
  },
  {
    company: "MJBiz Daily",
    companyLink: "https://mjbizdaily.com/",
    jobTitle: "Front-End Developer",
    years: "2019 - 2020",
    description: `Created, modified, and maintained mutliple responsive websites.
            Played a key role in the creation, delivery, maintenance, and
            evolution of digital experiences. I managed and maintained
            databases, hosting, and security, integrated e-commerce platforms
            with various 3rd party systems, and built full e-commerce sites from
            start to finish. I also introduced new front-end technologies and
            participated in daily scrum meetings as part of an agile sprint
            cycle.`,
    skills: [
      `HTML/CSS/Sass`,
      "Javascript",
      "React",
      "PHP",
      "Github",
      "CMS",
      "D3.js",
      "APIs",
      "Jest",
    ],
  },
  {
    company: "Cision",
    companyLink: "https://www.cision.com/",
    jobTitle: "Front-End Developer",
    years: "2017 - 2019",
    description: `Responsible for developing multiple client websites, meticulously
            tailored to unique brand identities and business needs, ensuring
            high-quality AA compliant and responsive user experiences. By
            building reusable components and in-house templates, I optimized
            development processes for greater efficiency.`,
    skills: [`HTML/CSS/Sass`, "Javascript", "React", "PHP", "jQuery"],
  },
  {
    company: "Church of Merch",
    companyLink: "https://fineartprinting.la/",
    jobTitle: "Developer",
    years: "2016 - 2017",
    description: `Created responsive e-commerce sites, tailored to diverse clients'
            requirements. Developed reusable code and templates that enhance
            front-end performance. Proactively managed established codebases and
            explored innovative frameworks to continually improve and elevate
            existing sites.`,
    skills: [`HTML/CSS/Sass`, "Javascript", "jQuery", "Ship Station"],
  },
];
