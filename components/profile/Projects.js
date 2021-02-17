import React from "react";

import SectionTitle from "./SectionTitle";

const Project = ({ children, name, href, icon }) => (
  <p className="mb-2 md:mb-0">
    <span className="inline-block">
      {icon}
      <a target="_blank" rel="noopener" href={href} className="link">
        {name}
      </a>
      ,&nbsp;
    </span>

    <span className="inline-block">{children}.</span>
  </p>
);

const Projects = () => (
  <section>
    <SectionTitle>Projects</SectionTitle>

    <Project
      name="setup-docker-rails"
      href="https://github.com/evsasse/setup-docker-rails"
      icon={<i aria-hidden className="fab fa-fw mr-1 fa-docker"></i>}
    >
      easy setup of Rails projects using Docker
    </Project>

    <Project
      name="profile"
      href="https://github.com/evsasse/profile"
      icon={<i aria-hidden className="far fa-fw mr-1 fa-id-badge"></i>}
    >
      personal website, built using Next.js and Tailwind CSS
    </Project>

    <Project
      name="Can I fly?"
      href="https://canifly.1313labs.com/"
      icon={<i aria-hidden className="fas fa-fw mr-1 fa-plane"></i>}
    >
      information about Travel Restrictions during the COVID-19 pandemic
    </Project>

    <p>
      <i aria-hidden className="fas fa-fw mr-1 fa-hourglass-half"></i>
      More soon..
    </p>
  </section>
);

export default Projects;
