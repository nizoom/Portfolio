// intersectionObserver.js
// stops if state is already true so that animation only runs once
export const setupIntersectionObserver = (targetRef, setIsVisible) => {
  let isIntersected = false;
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting && !isIntersected) {
        setIsVisible(entry.isIntersecting);
        isIntersected = true;
        observer.disconnect(); // Disconnect the observer after the first visibility change
      }
    },
    {
      root: null, // viewport
      rootMargin: "0px", // margin around the viewport
      threshold: 0.5, // percentage of the target's visibility needed to trigger the callback
    }
  );

  if (targetRef.current) {
    observer.observe(targetRef.current);
  }

  return () => {
    if (targetRef.current) {
      observer.unobserve(targetRef.current);
    }
  };
};
