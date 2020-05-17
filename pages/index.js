import Link from 'next/link'
import Head from 'next/head'

function HomePage() {
  return (
    <main className="container">
      <img src="profile.jpg" alt="Profile image"></img>
      <h1>Evandro Sasse</h1>
      <h2>Product-minded full-stack developer.</h2>
      <h3>
        Leading development squads to fast deliveries with real value.
        Mostly focused on Rails, React and Product.
        Also a Python, UX and DevOps enthusiast
      </h3>

      <nav>
        <Link href="/resume">
          <a>Resume</a>
        </Link>
      </nav>
    </main>
  )
}

export default HomePage
