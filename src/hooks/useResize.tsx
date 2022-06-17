import { useEffect, useState } from 'react';

interface Size {
  width: number;
  height: number;
}

interface ResizeProps {
  setShow: (x: boolean) => void;
  show: boolean;
}

function useResize({ setShow, show }: ResizeProps) {
  const [size, setSize] = useState<Size>({
    width: 0,
    height: 0,
  });

  const onClose = () => setShow(false);

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (size.width > 768 && show) {
      console.log('show and > 768px', show);
      document.body.classList.add('resize-animation-stopper');
      setTimeout(() => {
        console.log('This will run after .3 second!');
        document.body.classList.remove('resize-animation-stopper');
      }, 300);
      onClose();
    }
  }, [size.width, show]);
}

export default useResize;
