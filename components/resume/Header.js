import React from "react";

import Headings from "../profile/Headings";

const Header = ({ headings, site, github, linkedin, location, phone, email }) => (
  <header className="text-right dont-page-break">
    <Headings {...headings} />

    {site && (
      <p className="text-base">
        <a target="_blank" rel="noopener" href="https://evandro.sasse.it" className="link">
          evandro.sasse.it
        </a>
      </p>
    )}

    {github && (
      <p className="text-base">
        <a target="_blank" rel="noopener" href="https://github.com/evsasse" className="link">
          github.com/evsasse
        </a>
      </p>
    )}

    {linkedin && (
      <p className="text-base">
        <a target="_blank" rel="noopener" href="https://github.com/evsasse" className="link">
          linkedin.com/in/evsasse
        </a>
      </p>
    )}

    {location && <p className="text-muted text-base">Brazil, Florianópolis (UTC-3)</p>}

    {phone && <p className="text-muted text-base">+55 48 99155-3535</p>}

    {email && <p className="text-muted text-base">evandro@sasse.it</p>}
  </header>
);

Header.defaultProps = {
  headings: {},
  site: true,
  github: true,
  linkedin: true,
  location: true,
  phone: true,
  email: true,
};

export default Header;
