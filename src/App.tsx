import { useState, lazy, Suspense, useEffect } from 'react';
import './styles/style.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navigation from './components/layouts/Navigation';
import Home from './pages/Home';
import Progress from './components/layouts/Progress';

const About = lazy(() => import('./pages/About'));
const NotFound = lazy(() => import('./pages/NotFound'));

const AboutPage = () => (
  <Suspense
    fallback={
      <div>
        <Progress done="100" />
      </div>
    }
  >
    <About />
  </Suspense>
);

const NotFoundPage = () => (
  <Suspense
    fallback={
      <div>
        <Progress done="100" />
      </div>
    }
  >
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
