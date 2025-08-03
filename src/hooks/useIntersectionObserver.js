import { useState, useEffect, useRef } from "react";

/**
 * Een custom hook die de Intersection Observer API gebruikt.
 * @param {object} options - De opties voor de observer (bv. { threshold: 0.1 })
 * @returns {[React.RefObject, boolean]} - Een ref om aan het element te koppelen en een boolean die aangeeft of het element in beeld is.
 */
export const useIntersectionObserver = (options) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      // Update de state alleen als het element in beeld komt
      if (entry.isIntersecting) {
        setIsInView(true);
        // Stop met observeren nadat het element eenmaal zichtbaar is geweest
        observer.unobserve(entry.target);
      }
    }, options);

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    // Cleanup function om de observer te stoppen als de component unmount
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref, options]);

  return [ref, isInView];
};
