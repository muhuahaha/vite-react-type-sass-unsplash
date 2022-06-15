import React, { useEffect, useState, useRef, useCallback } from 'react';
import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';

interface Size {
  width: number;
  height: number;
}

interface AutoCloseProps {
  setShow: (x: boolean) => void;
  menuRef: {
    current: HTMLLinkElement;
  };
}

const useAutoClose = ({ setShow, menuRef }: AutoCloseProps) => {
  // console.log(typeof setShow, 'shhhooww tryppe');
  console.log(menuRef, 'menuRef tryppe');

  const handleClosure = useCallback(
    (event: { target: any }): any => {
      console.log('event', event.target);
      return (
        !menuRef.current.contains(event.target as HTMLLinkElement) &&
        setShow(false)
      );
    },
    [setShow, menuRef]
  );

  useEffect(() => {
    window.addEventListener('click', handleClosure);
    window.addEventListener('focusin', handleClosure);

    return () => {
      window.removeEventListener('click', handleClosure);
      window.removeEventListener('focusin', handleClosure);
    };
  }, [handleClosure, menuRef]);
};

function Navigation() {
  const menuRef = useRef<HTMLLinkElement>(null);
  const navToggleRef = useRef<HTMLButtonElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  const [show, setShow] = useState(false);
  const [size, setSize] = useState<Size>({
    width: 0,
    height: 0,
  });
  console.log(show, 'show');

  useAutoClose({ setShow, menuRef });

  const testHandle = () => {
    setShow(!show);
  };

  const pathMatchRoute = (route: string) => {
    if (route === location.pathname) {
      return true;
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (size.width > 768 && show) {
      console.log('show and > 768px', show);
      document.body.classList.add('resize-animation-stopper');
      setTimeout(() => {
        console.log('This will run after .3 second!');
        document.body.classList.remove('resize-animation-stopper');
      }, 300);
      setShow(false);
    }
  }, [size.width, show]);

  return (
    <div className="">
      <header className="primary-header d-flex">
        <div className="logo">
          <h1>YTK</h1>
          <button
            ref={navToggleRef}
            onClick={(event) => {
              event.stopPropagation();
              testHandle();
            }}
            type="button"
            className="mobile-nav-toggle"
            aria-controls="primary-navigation"
            aria-expanded={show}
          >
            <span className="sr-only" />
            asd
          </button>
        </div>

        <nav className="navbarNav">
          <ul
            ref={menuRef}
            id="primary-navigation"
            className={`${show ? 'test' : 'test1'} primary-navigation d-flex`}
            data-visible={show}
          >
            <li className="navbarListItem">
              <button
                type="button"
                onClick={() => {
                  navigate('/');
                  testHandle();
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
                  testHandle();
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
