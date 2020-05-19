import SectionTitle from "../resume/SectionTitle";

const School = ({ children, name, href, where, when }) => (
  <div className="mb-2">
    <a
      href={href}
      target="_blank"
      rel="noopener"
      className="link mr-1"
    >
      { name }
    </a>

    <p className="small">
      { where } | { when }
    </p>

    { children && (
      <p className="small">
        { children }
      </p>
    )}
  </div>
)

const Degree = ({ children, title }) => (
  <li className="mb-5 dont-page-break">
    <div>
      <h5 className="font-medium">{ title }</h5>
      { children }
    </div>
  </li>
)

const Education = () => (
  <section>
    <SectionTitle>Academic Education</SectionTitle>

    <ul className="list-disc list-outside">
      <Degree title="Bachelor of Computer Science">
        <School
          name="UFSC - Universidade Federal de Santa Catarina"
          href="https://ufsc.br"
          where="Brazil, Florianópolis"
          when="January/2013 - December/2017"
        />

        <School
          name="Waseda University"
          href="https://www.waseda.jp"
          where="Japan, Tokyo"
          when="September/2015 - September/2016"
        >
          Through the Science Without Borders exchange program
        </School>
      </Degree>

      <Degree title="Associate's degree in Software Development">
        <School
          name="CEDUP Hermann Hering"
          href="http://www.ceduphh.com.br/"
          where="Brazil, Blumenau"
          when="July/2010 - June/2012"
        />
      </Degree>
    </ul>
  </section>
);

export default Education
