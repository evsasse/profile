import React from "react";
import { faDocker } from "@fortawesome/free-brands-svg-icons";
import { faIdBadge } from "@fortawesome/free-regular-svg-icons";
import { faPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import IconWrapper from "../shared/IconWrapper";
import SectionTitle from "./SectionTitle";

const Project = ({ children, name, href, icon }) => (
  <p className="mb-2 md:mb-0">
    <span className="inline-flex items-center">
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
      icon={
        <IconWrapper>
          <FontAwesomeIcon icon={faDocker} />
        </IconWrapper>
      }
    >
      easy setup of Rails projects using Docker
    </Project>

    <Project
      name="profile"
      href="https://github.com/evsasse/profile"
      icon={
        <IconWrapper>
          <FontAwesomeIcon icon={faIdBadge} width={12} />
        </IconWrapper>
      }
    >
      personal website, built using Next.js and Tailwind CSS
    </Project>

    <Project
      name="Can I fly?"
      href="https://canifly.1313labs.com/"
      icon={
        <IconWrapper>
          <FontAwesomeIcon icon={faPlane} />
        </IconWrapper>
      }
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
