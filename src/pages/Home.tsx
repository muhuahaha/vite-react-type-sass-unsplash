import { useContext } from 'react';
import WindowDimensionChecker from '../components/layouts/WindowDimensionChecker';
import PhotoResults from '../components/photos/PhotoResults';
import { ThemeContext } from '../context/ThemeContext';
import PhotoSearch from '../components/photos/PhotoSearch';

function Home() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`${theme}`}>
      <WindowDimensionChecker />
      <div className="background">
        <div className="m-l-lg text">
          <PhotoSearch />
        </div>
      </div>
      <div className="">
        <PhotoResults />
      </div>
      <div className="text">test</div>
    </div>
  );
}

export default Home;
