import React, { useEffect, useState, useRef, useCallback } from 'react';
import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';
import HamburgerButton from './HamburgerButton';
import { useAutoClose } from '../../hooks/useAutoClose';
import useResize from '../../hooks/useResize';

function Navigation() {
  const menuRef = useRef<HTMLUListElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  const [show, setShow] = useState(false);
  const [reversed, setReversed] = useState(false);

  const pathMatchRoute = (route: string) => {
    if (route === location.pathname) {
      return true;
    }
  };

  const onpress = (event: React.SyntheticEvent) => {
    console.log('haahahha');
    event.stopPropagation();
    setShow(!show);
    setReversed(!reversed);
  };

  useEffect(() => {
    console.log(show, 'show 1');
  }, []);

  useAutoClose({ setShow, menuRef, setReversed });
  useResize({ setShow, show });

  return (
    <div className="">
      <header className="primary-header d-flex">
        <div className="logo">
          <h1>YTK</h1>
          <HamburgerButton
            onClick={onpress}
            label="Menu"
            reversed={reversed}
            aria-controls="primary-navigation"
            aria-expanded={show}
          />

          {/* <button
            onClick={(event) => {
              event.stopPropagation();
              setShow(!show);
            }}
            type="button"
            className="mobile-nav-toggle"
            aria-controls="primary-navigation"
            aria-expanded={show}
          >
            <span className="sr-only" />
            Menu
          </button> */}
        </div>

        <nav className="navbarNav">
          <ul
            ref={menuRef}
            id="primary-navigation"
            className={`${show ? 'open' : 'close'} primary-navigation d-flex`}
            data-visible={show}
          >
            <li className="navbarListItem">
              <button
                type="button"
                onClick={() => {
                  navigate('/');
                  setShow(!show);
                  setReversed(!reversed);
                }}
                className={
                  pathMatchRoute('/')
                    ? 'navbarListItemNameActive'
                    : 'navbarListItemName'
                }
              >
                <span aria-hidden="true">00</span>
                Home
              </button>
            </li>
            <li className="navbarListItem">
              <button
                type="button"
                onClick={() => {
                  navigate('/about');
                  setShow(!show);
                  setReversed(!reversed);
                }}
                className={
                  pathMatchRoute('/about')
                    ? 'navbarListItemNameActive'
                    : 'navbarListItemName'
                }
              >
                <span aria-hidden="true">01</span>
                About
              </button>
            </li>
            <li>
              <Link
                to="/about"
                className={
                  pathMatchRoute('/about')
                    ? 'navbarListItemNameActive'
                    : 'navbarListItemName'
                }
              >
                <h1 style={{ color: 'white' }}>TeStttt</h1>
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <hr />

      <Outlet />
    </div>
  );
}

export default Navigation;
