import React from "react";

import SectionTitle from "./SectionTitle";

const Interests = () => (
  <section className="dont-page-break">
    <SectionTitle>Other Interests</SectionTitle>

    <ul className="list-disc list-outside">
      <li>Elixir, TypeScript, React Native, Electron, Rust</li>
      <li>Serverless, Docker, DevOps</li>
      <li>UX, Product Management</li>
      <li>Remote work, Calm Tech, entrepreneurship</li>
      <li>Podcasts, coffee, long walks</li>
    </ul>
  </section>
);

export default Interests;
