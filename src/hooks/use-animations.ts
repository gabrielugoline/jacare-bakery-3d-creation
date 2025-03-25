
import { useEffect, useRef, useState, RefObject } from 'react';

export function useElementOnScreen(
  ref: RefObject<Element>,
  options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  }
) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options]);

  return isIntersecting;
}

export function useRevealAnimation() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.1,
    });

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((element) => observer.observe(element));

    return () => {
      revealElements.forEach((element) => observer.unobserve(element));
    };
  }, []);
}

export function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState('up');
  const prevScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const direction = prevScrollY.current < currentScrollY ? 'down' : 'up';
      
      if (
        direction !== scrollDirection &&
        (currentScrollY - prevScrollY.current > 10 ||
          prevScrollY.current - currentScrollY > 10)
      ) {
        setScrollDirection(direction);
      }
      
      prevScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollDirection]);

  return scrollDirection;
}
