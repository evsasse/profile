import React from "react";
import Link from "next/link";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import IconWrapper from "../shared/IconWrapper";

const BackToHomepage = () => (
  <div className="hide-when-printing">
    <Link href="/">
      <a className="btn btn-light inline-flex items-center pr-5">
        <IconWrapper className="mr-2">
          <FontAwesomeIcon icon={faArrowLeft} />
        </IconWrapper>
        Back to homepage
      </a>
    </Link>
  </div>
);

export default BackToHomepage;
