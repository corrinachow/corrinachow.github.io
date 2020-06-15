import { useState, useEffect } from "react";

type WindowDimensions = { height: number; width: number };

export const DEFAULT_TABLET_WIDTH = 768;
export const DEFAULT_MOBILE_WIDTH = 450;

const DEFAULT_HEIGHT = 1024;
const DEFAULT_WIDTH = 768;

const useWindowDimensions = (): WindowDimensions => {
  function getWindowDimensions(): WindowDimensions {
    return { height: window.innerHeight, width: window.innerWidth };
  }

  const [dimensions, setDimensions] = useState({
    height: DEFAULT_HEIGHT,
    width: DEFAULT_WIDTH
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = (): void => {
        setDimensions(getWindowDimensions());
      };
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return dimensions;
};

export default useWindowDimensions;
