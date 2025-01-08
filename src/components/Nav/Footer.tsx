import React from "react";

const Footer: React.FC = (props) => {
  return (
    <>
      <footer>
        {/* <div className="copyright">© {(new Date().getFullYear())} Highsmith Codes. All rights reserved.
          </div> */}
        <ul className="flex flex-row space-x-3">
          <li>
            <a href="https://github.com/highsmithcodes" target="_blank">
              <i className="fab fa-github"></i>
            </a>
          </li>
          <li>
            <a href="mailto: ezrahighsmith@gmail.com" target="_blank">
              <i className="fa-solid fa-envelope"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/ezra-highsmith-07a04787/"
              target="_blank"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
};

export default Footer;
