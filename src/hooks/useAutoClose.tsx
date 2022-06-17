import { useEffect } from 'react';

interface AutoCloseProps {
  setShow: (x: boolean) => void;
  setReversed: (x: boolean) => void;
  menuRef: {
    current: HTMLUListElement | null;
  };
}

export const useAutoClose = ({
  setShow,
  menuRef,
  setReversed,
}: AutoCloseProps) => {
  // console.log(typeof setShow, 'shhhooww tryppe');
  console.log(menuRef, 'menuRef tryppe');

  const onClose = () => setShow(false);
  const testClose = () => setReversed(false);

  const onClickOutside = (event: Event) => {
    const element = event.target as HTMLButtonElement;
    if (menuRef.current && !menuRef.current.contains(element)) {
      event.preventDefault();
      event.stopPropagation();
      onClose();
      testClose();
    }
  };

  useEffect(() => {
    document.body.addEventListener('click', onClickOutside);
    document.body.addEventListener('focusin', onClickOutside);

    return () => {
      document.removeEventListener('click', onClickOutside);
      document.body.removeEventListener('focusin', onClickOutside);
    };
  }, []);
};
