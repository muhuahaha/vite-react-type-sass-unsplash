import React, {
  useEffect,
  useState,
  useRef,
  useCallback,
  useContext,
} from 'react';
import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';
import HamburgerButton from './HamburgerButton';
import { useAutoClose } from '../../hooks/useAutoClose';
import useResize from '../../hooks/useResize';
import { ThemeContext, ThemeContextType } from '../../context/ThemeContext';

function Navigation() {
  const menuRef = useRef<HTMLUListElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  const [show, setShow] = useState(false);
  const [reversed, setReversed] = useState(false);

  const { theme, setTheme } = useContext(ThemeContext);

  console.log(theme, 'theme');

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
    console.log(theme);
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    console.log(show, 'show 1');
  }, []);

  useAutoClose({ setShow, menuRef, setReversed });
  useResize({ setShow, show });

  return (
    <>
      <header className="primary-header d-flex">
        <div className="logo">
          <h1>
            <div className="logo-typo">YTK</div>
          </h1>
          <HamburgerButton
            onClick={onpress}
            label="Menu"
            reversed={reversed}
            aria-controls="primary-navigation"
            aria-expanded={show}
          />
        </div>

        <nav className="navbarNav">
          <ul
            ref={menuRef}
            id="primary-navigation"
            className={`${show ? 'open' : 'close'} primary-navigation d-flex`}
            data-visible={show}
          >
            <li className="navbarListItem bg-green-200">
              <Link
                to="/"
                onClick={() => {
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
              </Link>
            </li>
            <li className="navbarListItem bg-green-300">
              <Link
                to="/about"
                onClick={() => {
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
              </Link>
            </li>
            <li className="navbarListItem bg-green-100">
              <Link
                to="/about"
                className={
                  pathMatchRoute('/about')
                    ? 'navbarListItemNameActive'
                    : 'navbarListItemName'
                }
              >
                <span aria-hidden="true">02</span>
                asdsd
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <div className={`${String(theme)}`}>
        <div className="text background">asdsdasds</div>
      </div>

      <Outlet />
    </>
  );
}

export default Navigation;
