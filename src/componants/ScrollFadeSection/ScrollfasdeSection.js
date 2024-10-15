import React from 'react';
import { useInView } from 'react-intersection-observer';

const ScrollFadeSection = ({ children, direction }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const fadeClass = inView
    ? direction === 'left'
      ? 'animate-fadeLeft'
      : 'animate-fadeRight'
    : 'opacity-0';

  return (
    <div ref={ref} className={`transition-all duration-500 ${fadeClass}`}>
      {children}
    </div>
  );
};

export default ScrollFadeSection;