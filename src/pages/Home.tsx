import WindowDimensionChecker from '../components/layouts/WindowDimensionChecker';

function Home() {
  return (
    <div>
      <WindowDimensionChecker />
      <div className="m-l-lg">test</div>
      <div className="p-l-xl">test</div>
      <div className="p-b-xxl">test</div>
    </div>
  );
}

export default Home;
