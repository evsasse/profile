import Headings from "./Headings";

const Header = () => (
  <header>
    <Headings />

    <p>
      <div className="inline-block">
        <i className="far fa-fw mr-2 fa-gem text-red-700"></i>
        <i className="fab fa-fw mr-2 fa-react text-blue-500"></i>
        <i className="far fa-fw mr-2 fa-lightbulb text-orange-500"></i>
      </div>

      <div className="inline-block">Mostly focused on Rails, React and Product.</div>
    </p>

    <p>
      <div className="inline-block">
        <i className="fab fa-fw mr-2 fa-python text-yellow-500"></i>
        <i className="fab fa-fw mr-2 fa-docker text-blue-600"></i>
        <i className="far fa-fw mr-2 fa-user-circle text-gray-600"></i>
      </div>

      <div className="inline-block">Also a Python, DevOps and UX enthusiast.</div>
    </p>
  </header>
);

export default Header;
