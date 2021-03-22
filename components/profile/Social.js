import React from "react";
import Link from "next/link";
import { faGithub, faLinkedin, faAngellist, faGitlab, faHackerNewsSquare } from "@fortawesome/free-brands-svg-icons";
import { faFileAlt } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import IconWrapper from "../shared/IconWrapper";
import SectionTitle from "./SectionTitle";

const Social = () => (
  <section>
    <SectionTitle>More about me</SectionTitle>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      <p className="flex items-center">
        <IconWrapper>
          <FontAwesomeIcon icon={faFileAlt} width={12} />
        </IconWrapper>

        <Link href="/resume">
          <a className="link">Full resume</a>
        </Link>
      </p>

      <p className="flex items-center">
        <IconWrapper>
          <FontAwesomeIcon icon={faGithub} />
        </IconWrapper>

        <a target="_blank" rel="noopener" href="https://github.com/evsasse" className="link">
          GitHub
        </a>
      </p>

      <p className="flex items-center">
        <IconWrapper>
          <FontAwesomeIcon icon={faLinkedin} />
        </IconWrapper>

        <a target="_blank" rel="noopener" href="https://linkedin.com/in/evsasse" className="link">
          LinkedIn
        </a>
      </p>

      <p className="flex items-center">
        <IconWrapper>
          <FontAwesomeIcon icon={faAngellist} />
        </IconWrapper>

        <a target="_blank" rel="noopener" href="https://angel.co/u/evsasse" className="link">
          AngelList
        </a>
      </p>

      <p className="flex items-center">
        <IconWrapper>
          <FontAwesomeIcon icon={faGitlab} />
        </IconWrapper>

        <a target="_blank" rel="noopener" href="https://gitlab.com/evsasse" className="link">
          GitLab
        </a>
      </p>

      <p className="flex items-center">
        <IconWrapper>
          <FontAwesomeIcon icon={faHackerNewsSquare} />
        </IconWrapper>

        <a target="_blank" rel="noopener" href="https://news.ycombinator.com/user?id=evsasse" className="link">
          HackerNews
        </a>
      </p>
    </div>
  </section>
);

export default Social;
