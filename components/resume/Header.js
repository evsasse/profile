import Headings from "../profile/Headings";

const Header = () => (
  <header className="text-right dont-page-break">
    <Headings />

    <p>
      <a target="_blank" rel="noopener" href="https://evandro.sasse.it" className="link">
        evandro.sasse.it
      </a>
    </p>

    <p>
      <a target="_blank" rel="noopener" href="https://github.com/evsasse" className="link">
        github.com/evsasse
      </a>
    </p>

    <p>
      <a target="_blank" rel="noopener" href="https://github.com/evsasse" className="link">
        linkedin.com/in/evsasse
      </a>
    </p>

    <p className="text-muted">Brazil, Florianópolis</p>

    <p className="text-muted">+55 48 99155-3535</p>

    <p className="text-muted">evandro@sasse.it</p>
  </header>
);

export default Header;
