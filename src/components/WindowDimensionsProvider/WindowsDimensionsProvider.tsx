import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

type WindowDimensions = { height: number; width: number };

interface Props {
  children: ReactNode;
}

export const mobileWidth = 768;

export const WindowDimensionsContext = createContext({
  height: window.innerHeight,
  width: window.innerWidth,
});
const windowDimensions = (): WindowDimensions => ({
  height: window.innerHeight,
  width: window.innerWidth,
});

const WindowDimensionsProvider = ({ children }: Props) => {
  const [dimensions, setDimensions] = useState(windowDimensions());
  useEffect(() => {
    const handleResize = () => {
      setDimensions(windowDimensions());
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <WindowDimensionsContext.Provider value={dimensions}>
      {children}
    </WindowDimensionsContext.Provider>
  );
};

export default WindowDimensionsProvider;

export const useWindowDimensions = () => {
  return useContext(WindowDimensionsContext);
};
