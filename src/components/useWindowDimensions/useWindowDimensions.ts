import { useState, useEffect } from "react";

type WindowDimensions = { height: number; width: number };

export const DEFAULT_MOBILE_WIDTH = 768;

const useWindowDimensions = (): WindowDimensions => {
  function getWindowDimensions(): WindowDimensions {
    return { height: window.innerHeight, width: window.innerWidth };
  }

  const [dimensions, setDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    const handleResize = (): void => {
      setDimensions(getWindowDimensions());
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return dimensions;
};

export default useWindowDimensions;
