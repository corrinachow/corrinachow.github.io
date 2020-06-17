import { useState, useEffect } from "react";

type WindowDimensions = { height: number; width: number };

export const DEFAULT_MOBILE_WIDTH = 768;
export const DEFAULT_SMALL_MOBILE_WIDTH = 450;

const useWindowDimensions = (): WindowDimensions => {
  const isClient = typeof window === "object";

  function getWindowDimensions(): WindowDimensions {
    return { height: window.innerHeight, width: window.innerWidth };
  }

  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth
  });

  useEffect(() => {
    if (!isClient) {
      return;
    }
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
