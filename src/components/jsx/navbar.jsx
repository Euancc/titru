import react, { useState } from 'react'
import '../css/navbar.css'
import { HashLink as Link } from 'react-router-hash-link'

function Navbar() {
  const [click, setclick] = useState(false)
  const handleClick = () => setclick(!click)
  const closeMobileMenu = () => setclick(false)

  return (
    <div className="navbar">
      <p>Titiru Eco Lodge</p>

      <div className="hamburger-button" onClick={handleClick}>
        <img src={click ? 'close.png' : 'hamburger.png'} alt="hamburger icon" />
      </div>

      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li>
          <Link to="/#about" className="nav-link" onClick={closeMobileMenu}>
            About
          </Link>
        </li>

        <li>
          <Link to="/#gallery" className="nav-link" onClick={closeMobileMenu}>
            Gallery
          </Link>
        </li>

        <li>
          <Link to="/#contact" className="nav-link" onClick={closeMobileMenu}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
