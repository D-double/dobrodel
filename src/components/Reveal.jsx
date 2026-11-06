import React, { useEffect, useRef, useState } from 'react';

export default function Reveal({
  children,
  className = '',
  delay = 0,
  direction = 'up', // 'up', 'down', 'fade', 'scale'
  threshold = 0.15,
}) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (domRef.current) observer.unobserve(domRef.current);
          }
        });
      },
      {
        threshold,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    const currentElem = domRef.current;
    if (currentElem) observer.observe(currentElem);

    return () => {
      if (currentElem) observer.unobserve(currentElem);
    };
  }, [threshold]);

  let transformInitial = 'translateY(32px)';
  if (direction === 'down') transformInitial = 'translateY(-24px)';
  if (direction === 'fade') transformInitial = 'translateY(0)';
  if (direction === 'scale') transformInitial = 'scale(0.94)';

  const style = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0) scale(1)' : transformInitial,
    transition: `opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)`,
    transitionDelay: `${delay}ms`,
    willChange: 'opacity, transform',
  };

  return (
    <div ref={domRef} style={style} className={className}>
      {children}
    </div>
  );
}
