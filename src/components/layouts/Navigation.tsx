import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';

function Navigation() {
  const navigate = useNavigate();
  const location = useLocation();

  const pathMatchRoute = (route: string) => {
    if (route === location.pathname) {
      return true;
    }
  };

  return (
    <div className="navbar">
      <nav className="navbarNav">
        <ul className="navbarListItems">
          <li className="navbarListItem">
            <button
              type="button"
              onClick={() => navigate('/')}
              className={
                pathMatchRoute('/')
                  ? 'navbarListItemNameActive'
                  : 'navbarListItemName'
              }
            >
              {' '}
              Home
            </button>
          </li>
          <li className="navbarListItem">
            <button
              type="button"
              onClick={() => navigate('/about')}
              className={
                pathMatchRoute('/about')
                  ? 'navbarListItemNameActive'
                  : 'navbarListItemName'
              }
            >
              About
            </button>
          </li>
        </ul>
      </nav>

      <hr />

      <Outlet />
    </div>
  );
}

export default Navigation;
