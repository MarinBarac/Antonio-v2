import { useEffect, useRef, useState } from "react";

const generateThresholds = (startingRatio, endingRatio) => {
  const multiplier = (endingRatio - startingRatio) / 100;
  return Array.from(
    { length: 100 },
    (_, i) => +(startingRatio + (i + 1) * multiplier).toFixed(2)
  );
};

const calculateOpacity = (intersectionRatio, startingRatio, endingRatio) => {
  const multiplier = 1 / (endingRatio - startingRatio);
  return multiplier * (intersectionRatio - endingRatio) + 1;
};

const options = {
  root: null,
  rootMargin: "0px",
};

const useShowOnScroll = (ref, startingRatio = 0, endingRatio = 1) => {
  const [opacity, setOpacity] = useState(0);
  const observerRef = useRef(null);
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        const intersectionRatio = entries[0].intersectionRatio;
        if (intersectionRatio <= startingRatio) setOpacity(0);
        else {
          const opacity = calculateOpacity(
            intersectionRatio,
            startingRatio,
            endingRatio
          );
          startingRatio === 0.2 && console.log(opacity);
          setOpacity(opacity);
        }
      },
      { ...options, threshold: generateThresholds(startingRatio, endingRatio) }
    );
  }, [startingRatio, endingRatio]);

  useEffect(() => {
    observerRef.current.observe(ref.current);

    return () => {
      observerRef.current.disconnect();
    };
  }, [ref]);

  return opacity;
};

export default useShowOnScroll;
