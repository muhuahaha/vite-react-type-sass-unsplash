import WindowDimensionChecker from '../components/layouts/WindowDimensionChecker';
import PhotoResults from '../components/photos/PhotoResults';

function Home() {
  return (
    <div>
      <WindowDimensionChecker />
      <div className="m-l-lg">test</div>
      <div className="p-l-xl">
        <PhotoResults />
      </div>
      <div className="p-b-xxl">test</div>
    </div>
  );
}

export default Home;
