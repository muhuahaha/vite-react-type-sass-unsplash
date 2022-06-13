import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';

function Navigation() {
  const navigate = useNavigate();
  const location = useLocation();

  const pathMatchRoute = (route: string) => {
    if (route === location.pathname) {
      return true;
    }
  };

  const handleTest = (e: any) => {
    console.log(e, 'event');
    navigate('/');
  };

  return (
    <div className="">
      <header className="primary-header d-flex">
        <div className="logo">
          <h1>YTK</h1>
        </div>

        <nav className="navbarNav">
          <ul id="primary-navigation" className="primary-navigation d-flex">
            <li className="navbarListItem">
              <button
                type="button"
                onClick={handleTest}
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
                onClick={() => navigate('/about')}
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
          </ul>
        </nav>
      </header>

      <hr />

      <Outlet />
    </div>
  );
}

export default Navigation;
