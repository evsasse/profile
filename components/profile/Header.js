import React from "react";
import { faReact, faPython, faDocker } from "@fortawesome/free-brands-svg-icons";
import { faGem, faLightbulb, faUserCircle } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import IconWrapper from "../shared/IconWrapper";

import Headings from "./Headings";

const Header = () => (
  <header>
    <Headings />

    <p className="flex flex-wrap align-center">
      <span className="flex items-center mr-1">
        <IconWrapper width={15}>
          <FontAwesomeIcon icon={faGem} className="text-red-700" />
        </IconWrapper>
        <IconWrapper width={17}>
          <FontAwesomeIcon icon={faReact} className="text-blue-500" />
        </IconWrapper>
        <IconWrapper width={12}>
          <FontAwesomeIcon icon={faLightbulb} className="text-orange-500" />
        </IconWrapper>
      </span>

      <span className="inline-block">Mostly focused on Rails, React and Product.</span>
    </p>

    <p className="flex flex-wrap align-center">
      <span className="flex items-center mr-1">
        <IconWrapper width={14}>
          <FontAwesomeIcon icon={faPython} className="text-yellow-500" />
        </IconWrapper>
        <IconWrapper width={18}>
          <FontAwesomeIcon icon={faDocker} className="text-blue-600" />
        </IconWrapper>
        <IconWrapper width={14}>
          <FontAwesomeIcon icon={faUserCircle} className="text-gray-600" />
        </IconWrapper>
      </span>

      <span className="inline-block">Also a Python, DevOps and UX enthusiast.</span>
    </p>
  </header>
);

export default Header;
