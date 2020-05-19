import Link from 'next/link';

const BackToHomepage = () => (
  <div className="hide-when-printing">
    <Link href="/">
      <a className="btn btn-light">
        <i className="fas fa-fw mr-3 fa-arrow-left"></i>
        Back to homepage
      </a>
    </Link>
  </div>
);

export default BackToHomepage;
