import './styles/style.scss';
import { lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  Link,
} from 'react-router-dom';

import Navigation from './components/layouts/Navigation';
import Home from './pages/Home';

const About = lazy(() => import('./pages/About'));
const NotFound = lazy(() => import('./pages/NotFound'));

const AboutPage = () => (
  <Suspense fallback={<div>loading...</div>}>
    <About />
  </Suspense>
);

const NotFoundPage = () => (
  <Suspense fallback={<div>loading...</div>}>
    <NotFound />
  </Suspense>
);

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/notfound" element={<NotFoundPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
