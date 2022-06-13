import { useState } from 'react';

type ProgressProps = { done: string };

function Progress({ done }: ProgressProps) {
  const [style, setStyle] = useState({});

  setTimeout(() => {
    const newStyle = {
      opactiy: 1,
      width: `${done}%`,
    };

    setStyle(newStyle);
  }, 200);

  return (
    <div className="progress">
      <div className="progress-done" style={style} />
    </div>
  );
}

export default Progress;
