import { useEffect, useState } from "react";

export const useScroll = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const positionUp = () => {
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener("scroll", positionUp);
    positionUp();

    return () => window.removeEventListener("scroll", positionUp);
  }, []);

  return scrollPosition;
};
