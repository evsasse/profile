import React from "react";

import Headings from "./Headings";

const Header = () => (
  <header>
    <Headings />

    <p>
      <span className="inline-block">
        <i aria-hidden className="far fa-fw mr-2 fa-gem text-red-700"></i>
        <i aria-hidden className="fab fa-fw mr-2 fa-react text-blue-500"></i>
        <i aria-hidden className="far fa-fw mr-2 fa-lightbulb text-orange-500"></i>
      </span>

      <span className="inline-block">Mostly focused on Rails, React and Product.</span>
    </p>

    <p>
      <span className="inline-block">
        <i aria-hidden className="fab fa-fw mr-2 fa-python text-yellow-500"></i>
        <i aria-hidden className="fab fa-fw mr-2 fa-docker text-blue-600"></i>
        <i aria-hidden className="far fa-fw mr-2 fa-user-circle text-gray-600"></i>
      </span>

      <span className="inline-block">Also a Python, DevOps and UX enthusiast.</span>
    </p>
  </header>
);

export default Header;
