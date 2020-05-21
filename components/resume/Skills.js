import React from "react";

import SectionTitle from "./SectionTitle";

export const Skill = ({ name, level }) => (
  <li>
    <span className="font-bold">{name}</span> - {level}
  </li>
);

export const Skills = ({ children, title }) => (
  <section className="dont-page-break">
    <SectionTitle>{title}</SectionTitle>

    <ul className="list-disc list-outside">{children}</ul>
  </section>
);
