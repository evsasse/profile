import Link from 'next/link'

import SectionTitle from './SectionTitle';

const Social = () => (
  <section>
    <SectionTitle>
      More about me
    </SectionTitle>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      <p>
        <i className="far fa-fw mr-1 fa-file-alt"></i>

        <Link href="/resume">
          <a className="link">Full resume</a>
        </Link>
      </p>

      <p>
        <i className="fab fa-fw mr-1 fa-github"></i>
        <a target="_blank" rel="noopener" href="https://github.com/evsasse" className="link">GitHub</a>
      </p>

      <p>
        <i className="fab fa-fw mr-1 fa-linkedin"></i>
        <a target="_blank" rel="noopener" href="https://linkedin.com/in/evsasse" className="link">LinkedIn</a>
      </p>

      <p>
        <i className="fab fa-fw mr-1 fa-angellist"></i>
        <a target="_blank" rel="noopener" href="https://angel.co/u/evsasse" className="link">AngelList</a>
      </p>

      <p>
        <i className="fab fa-fw mr-1 fa-gitlab"></i>
        <a target="_blank" rel="noopener" href="https://gitlab.com/evsasse" className="link">GitLab</a>
      </p>

      <p>
        <i className="fab fa-fw mr-1 fa-hacker-news-square"></i>
        <a target="_blank" rel="noopener" href="https://news.ycombinator.com/user?id=evsasse" className="link">HackerNews</a>
      </p>
    </div>
  </section>
);

export default Social
