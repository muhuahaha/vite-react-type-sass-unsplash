import { useRef, useEffect, useState, forwardRef } from 'react';
import gsap from 'gsap';

interface HamburgerButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  label: string;
  reversed: boolean;
}

const HamburgerButton = forwardRef(
  ({ label, onClick, reversed }: HamburgerButtonProps, ref) => {
    const lineOne = useRef(null);
    const lineTwo = useRef(null);
    const lineThree = useRef(null);

    const el = useRef();
    const q = gsap.utils.selector(el);

    type EnterTarget = {
      currentTarget: HTMLButtonElement;
    };

    const onEnter = ({ currentTarget }: EnterTarget) => {
      gsap.to(currentTarget, { backgroundColor: 'yellow' });
    };

    const onLeave = ({ currentTarget }: EnterTarget) => {
      gsap.to(currentTarget, { backgroundColor: 'red' });
    };

    type GSAPTween = gsap.core.Timeline;

    // store the timeline in a ref.
    const tl = useRef<GSAPTween>();

    console.log(tl, 'tl');

    useEffect(() => {
      // add a box and circle animation to our timeline and play on first render
      tl.current = gsap
        .timeline({ paused: false })
        .to(q('.line-two'), {
          scaleX: 0,
          duration: 0.125,
          delay: 0,
        })
        .to(q('.line-one'), {
          transformOrigin: '50% 50%',
          y: 8,
          duration: 0.25,
          delay: 'slide',
          ease: 'Power2.easeInOut',
        })
        .to(q('.line-three'), {
          transformOrigin: '50% 50%',
          y: -20,
          duration: 0.25,
          delay: 'slide',
          ease: 'Power2.easeInOut',
        })
        .to(q('.hamburger'), {
          duration: 0.5,
          rotation: -360,
          ease: 'Power4.easeInOut',
        })
        .to(q('.line-one'), {
          rotation: 45,
          delay: -0.2,
          ease: 'Power2.easeOut',
        })
        .to(q('.line-three'), {
          rotation: -45,
          delay: -0.4,
          ease: 'Power2.easeOut',
        });
    }, []);

    useEffect(() => {
      // toggle the direction of our timeline

      console.log('shsisihsishish');
      tl.current.reversed(!reversed);
    }, [reversed]);

    return (
      <button
        type="button"
        className="mobile-nav-toggle"
        onClick={onClick}
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
        aria-controls="primary-navigation"
      >
        <span className="sr-only"> {label}</span>
        {/* <div className="test" ref={el}>
        <div>
          <button type="button" onClick={() => setReversed(!reversed)}>
            Toggle
          </button>
        </div>
        <Box>box</Box>
        <Circle>circle</Circle>
      </div> */}
        <div ref={el}>
          <svg
            ref={ref}
            className="hamburger"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              ref={lineOne}
              className="line-one box"
              x1="25"
              y1="42"
              x2="75"
              y2="42"
              fill="none"
              stroke="black"
              strokeMiterlimit="10"
              strokeWidth="6"
            />
            <line
              ref={lineTwo}
              className="line-two box"
              x1="25"
              y1="56"
              x2="75"
              y2="56"
              fill="none"
              stroke="black"
              strokeMiterlimit="10"
              strokeWidth="6"
            />
            <line
              ref={lineThree}
              className="line-three box"
              x1="25"
              y1="70"
              x2="75"
              y2="70"
              fill="none"
              stroke="black"
              strokeMiterlimit="10"
              strokeWidth="6"
            />
          </svg>
        </div>
      </button>
    );
  }
);

HamburgerButton.displayName = 'HamburgerButton';

export default HamburgerButton;
