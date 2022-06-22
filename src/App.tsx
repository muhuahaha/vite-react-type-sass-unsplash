import { useState, lazy, Suspense, useEffect, useContext } from 'react';
import './styles/style.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { ThemeProvider } from './context/ThemeContext';

import Navigation from './components/layouts/Navigation';
import Home from './pages/Home';
import Progress from './components/layouts/Progress';
import PageOne from './pages/PageOne';
import { UnsplashProvider } from './context/photos/UnsplashContext';
import { AlertProvider } from './context/alert/AlertContext';
import Alert from './components/layouts/Alert';

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

const PageOnePage = () => (
  <Suspense
    fallback={
      <div>
        <Progress done="100" />
      </div>
    }
  >
    <PageOne />
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
      <ThemeProvider>
        <UnsplashProvider>
          <AlertProvider>
            <Router>
              <Navigation />
              <Alert />
              <Routes>
                <Route index element={<Home />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/page-one" element={<PageOnePage />} />

                <Route path="/notfound" element={<NotFoundPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </Router>
          </AlertProvider>
        </UnsplashProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
