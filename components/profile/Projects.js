import React from "react";

import SectionTitle from "./SectionTitle";

const Project = ({ children, name, href, icon }) => (
  <p className="mb-2 md:mb-0">
    <div className="inline-block">
      {icon}
      <a target="_blank" rel="noopener" href={href} className="link">
        {name}
      </a>
      ,&nbsp;
    </div>

    <div className="inline-block">{children}.</div>
  </p>
);

const Projects = () => (
  <section>
    <SectionTitle>Projects</SectionTitle>

    <Project
      name="setup-docker-rails"
      href="https://github.com/evsasse/setup-docker-rails"
      icon={<i className="fab fa-fw mr-1 fa-docker"></i>}
    >
      easy setup of Rails projects using Docker
    </Project>

    <Project
      name="profile"
      href="https://github.com/evsasse/profile"
      icon={<i className="far fa-fw mr-1 fa-id-badge"></i>}
    >
      personal website, built using Next.js and Tailwind CSS
    </Project>

    <p>
      <i className="fas fa-fw mr-1 fa-hourglass-half"></i>
      More soon..
    </p>
  </section>
);

export default Projects;
