import React from "react";

const School = ({ children, href, name, detail }) => (
  <p className="mb-2 md:mb-0">
    <div className="inline-block mr-1">{children}</div>
    <div className="inline-block">
      <a target="_blank" rel="noopener" href={href} className="link">
        {name}
      </a>
      <em className="small text-muted ml-1">({detail})</em>
    </div>
  </p>
);

const Education = () => (
  <section>
    <School name="UFSC" href="https://ufsc.br/" detail="Brazil, 2017">
      Bachelor of Computer Science from
    </School>

    <School name="Waseda University" href="https://www.waseda.jp" detail="Japan, 2016">
      Spent one year studying at
    </School>

    <School name="CEDUP HH" href="http://www.ceduphh.com.br/" detail="Brazil, 2012">
      Associate's degree on Software Development from
    </School>
  </section>
);

export default Education;
