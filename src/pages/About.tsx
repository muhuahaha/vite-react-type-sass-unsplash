import { useContext } from 'react';
import { ThemeContext, ThemeContextType } from '../context/ThemeContext';

function About() {
  const { theme } = useContext<ThemeContextType>(ThemeContext);

  return (
    <div className={`${String(theme)} container d-flex`}>
      <div className="text background">Hallo</div>
      <div className="background text text-right">
        lorem ipsum dolor sit amet, consectetur adip
      </div>
    </div>
  );
}

export default About;
