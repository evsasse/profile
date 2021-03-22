import React from "react";

import SectionTitle from "../resume/SectionTitle";

const Experience = ({ children, title, href, company, where, when }) => (
  <li className="mb-5 dont-page-break">
    <div>
      <h5 className="font-medium">{title}</h5>
      <p className="small">
        <a href={href} target="_blank" rel="noopener" className="link mr-1">
          {company}
        </a>
        - {where} | {when}
      </p>
      <p>{children}</p>
    </div>
  </li>
);

const Professional = () => (
  <section>
    <SectionTitle>Professional Experience</SectionTitle>

    <ul className="list-disc list-outside">
      <Experience
        company="Railsware"
        href="https://railsware.com/"
        title="Product Engineer"
        where="Poland, Krakow (Remote)"
        when="June/2020 - April/2021"
      >
        Remote work with React, Rails, and AWS infrastructure. Supporting the internet connection of ships all over the
        globe. Touching Kubernetes, Terraform, CloudFormation, Lambda, SQS, DynamoDB, Elasticsearch...
        <div className="mt-1" />
        Rails, React and Product; improving a Google Sheets add-on to create no-code solutions.
      </Experience>

      <Experience
        company="Küdos"
        href="https://kudos-care.com/"
        title="Senior Software Engineer"
        where="United States, New York (Remote)"
        when="April/2020 - June/2020"
      >
        Remote work preparing platform MVP. Integrating to digital wallets and american bank accounts.
        <div className="mt-1" />
        Constructing groundwork for feature testing. Helping establish usage of a design system across the entire
        project.
      </Experience>

      <Experience
        company="Zygo"
        href="https://zygotecnologia.com/"
        title="Lead Software Engineer"
        where="Brazil, Florianópolis"
        when="April/2019 - March/2020"
      >
        Reaching deep into Product, to better solve pain points of the customers. Leading squads to fast deliveries
        using Agile/Kanban. Coordinating releases with Product, Sales and Customer Success.
        <div className="mt-1" />
        Working close to the SRE to halve average latencies of requests, and start migrating infrastructure to
        Docker+Kubernetes. Responsible for the groundwork of new services. Refactoring Ruby on Rails monolith into
        Python Serverless microservices.
      </Experience>

      <Experience
        company="Zygo"
        href="https://zygotecnologia.com/"
        title="Full Stack Engineer"
        where="Brazil, Florianópolis"
        when="January/2018 - March/2019"
      >
        Supporting 1,500 daily concurrent users on a Python desktop application.
        <div className="mt-1" />
        Reaching 1,000,000 MAU on a Ruby on Rails web application. Scaling our infrastructure of sending emails and SMS,
        to send marketing campaigns to the whole of Brazil in a couple hours. Remaking the entirety of our web frontend
        stack to use modern Webpack(er) with Rails.
      </Experience>

      <Experience
        company="Zygo"
        href="https://zygotecnologia.com/"
        title="Software Engineering Intern"
        where="Brazil, Florianópolis"
        when="November/2016 - December/2017"
      >
        Developing Ruby on Rails backends for Android and iOS apps. Working on frontend and backend for two Ruby on
        Rails apps.
        <div className="mt-1" />
        Creating an Electron and a Python(PyQt) desktop apps, and their respective backends; getting much more reliable
        data from the customers, delivering value much faster.
      </Experience>

      <Experience
        company="UFSC - PET Computação"
        href="https://petcomputacao.paginas.ufsc.br/"
        title="Computer Science Scholarship"
        where="Brazil, Florianópolis"
        when="March/2014 - June/2015"
      >
        Coordinating lectures and workshops for the university yearly Computer Science forum. Organizing
        extra-curricular classes on programming subjects.
        <div className="mt-1" />
        Working with university professors to help them to prepare classes and studies. Helping other students to
        prepare for tests.
      </Experience>
    </ul>
  </section>
);

export default Professional;
