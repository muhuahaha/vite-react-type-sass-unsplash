import useWindowDimensions from "../../hooks/windowDimensions";

function WindowDimensionChecker() {
  const { height, width } = useWindowDimensions();

  return (
    <div>
      <div>Höhe: {height} --- Breite: {width}</div>

    </div>
  );
}

export default WindowDimensionChecker;
