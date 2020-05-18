import Link from 'next/link'
import Head from 'next/head'

import ProfileButton from '../components/ProfileButton';

function HomePage() {
  return (
    <main className="container mx-auto p-5">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-3">
          <div className="grid grid-cols-1 gap-1">
            <img src="profile.jpg" alt="Profile image" className="rounded w-full"></img>

            <Link href="/resume">
              <a className="btn btn-block btn-light flex justify-between">
                <div>
                  <i className="far fa-fw mr-1 fa-file-alt"></i>
                  Full resume
                </div>
                <div>
                  <i className="fas fa-external-link-alt"></i>
                </div>
              </a>
            </Link>

            <Link href="/resume" passHref>
              <ProfileButton>
                <i className="far fa-fw mr-1 fa-file-alt"></i>
                Full resume
              </ProfileButton>
            </Link>

            <Link href="/resume">
              <a className="rounded bg-gray-200 text-gray-800 block p-2">
                <i className="far fa-fw mr-1 fa-file-alt"></i>
                Resume
                <i className="fas fa-external-link-alt mr-auto"></i>
              </a>
            </Link>
          </div>
        </div>

        <div className="col-span-12 md:col-span-9">
          <h1 className="text-5xl font-bold">
            Evandro Sasse
          </h1>

          <h2 className="text-3xl font-medium">
            Product-minded full-stack developer.
          </h2>

          <h3>
            Leading development squads to fast deliveries with real value.
          </h3>

          <p className="mt-2">
            <i className="far fa-fw mr-1 fa-gem"></i>
            <i className="fab fa-fw mr-1 fa-react"></i>
            <i className="far fa-fw mr-1 fa-lightbulb"></i>
            Mostly focused on Rails, React and Product.
            <br/>
            <i className="fab fa-fw mr-1 fa-python"></i>
            <i className="fab fa-fw mr-1 fa-docker"></i>
            <i className="far fa-fw mr-1 fa-smile"></i>
            Also a Python, DevOps and UX enthusiast.
          </p>
        </div>
      </div>
    </main>
  )
}

export default HomePage
