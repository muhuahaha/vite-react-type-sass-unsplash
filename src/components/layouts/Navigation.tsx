
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
          <li className="navbarListItem" onClick={() => navigate('/')}>
            <p className={pathMatchRoute('/') ? 'navbarListItemNameActive' : 'navbarListItemName'}> Home</p>
          </li>
          <li className="navbarListItem" onClick={() => navigate('/about')}>
            <p className={pathMatchRoute('/about') ? 'navbarListItemNameActive' : 'navbarListItemName'}>
               About
            </p>
          </li>
        </ul>
      </nav>




      <hr />

      <Outlet />
    </div>
  );
}

export default Navigation;
