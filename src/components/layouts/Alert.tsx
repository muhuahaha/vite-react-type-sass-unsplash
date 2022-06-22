import { useContext } from 'react';
import AlertContext from '../../context/alert/AlertContext';

function Alert() {
  const { alert } = useContext(AlertContext);

  console.log(typeof alert, 'alert');

  return (
    <div className="" style={{ visibility: alert ? 'visible' : 'hidden' }}>
      <div className="">
        <div>
          {/* <svg fill="none" viewBox="0 0 24 24" className="">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
            />
          </svg> */}
          <strong>{alert?.msg}</strong>
        </div>
      </div>
    </div>
  );
}

export default Alert;
