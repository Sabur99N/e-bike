import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import Logo from '../assets/images/Logo.svg';
import { navLinks } from '../data/bikes.js';

export default function Header() {
  const headerRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useGSAP(
    () => {
      gsap
        .timeline({ defaults: { ease: 'power3.out' } })
        .from('.logo', { x: -40, autoAlpha: 0, duration: 0.8 })
        .from(
          '.nav-item',
          { y: -32, autoAlpha: 0, stagger: 0.12, duration: 0.6 },
          '-=0.4'
        );
    },
    { scope: headerRef }
  );

  const closeMenu = () => setMenuOpen(false);

  return (
    <header ref={headerRef}>
      <nav className="container nav-bar">
        <Link to="/" className="logo" onClick={closeMenu}>
          <img src={Logo} alt="e-bike home" />
        </Link>

        <button
          type="button"
          className={`nav-toggle${menuOpen ? ' is-open' : ''}`}
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <div
          id="primary-navigation"
          className={`nav-panel${menuOpen ? ' is-open' : ''}`}
        >
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li className="nav-item" key={link.label}>
                <Link to={link.href} onClick={closeMenu}>
                  <h5>{link.label}</h5>
                </Link>
              </li>
            ))}
            <li className="nav-item">
              <button
                type="button"
                className="signup-btn"
                onClick={closeMenu}
              >
                <h5>SIGN UP</h5>
              </button>
            </li>
          </ul>
        </div>

        <button
          type="button"
          className={`nav-backdrop${menuOpen ? ' is-open' : ''}`}
          aria-hidden="true"
          tabIndex={-1}
          onClick={closeMenu}
        />
      </nav>
    </header>
  );
}
