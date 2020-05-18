import Link from 'next/link'

function ProfileButton({ href, children }) {
  return (
    <Link href={href}>
      <a className="btn btn-block btn-light flex justify-between">
        <div>
          { children }
        </div>

        <div>
          <i className="fas fa-external-link-alt"></i>
        </div>
      </a>
    </Link>
  )
}

export default ProfileButton
