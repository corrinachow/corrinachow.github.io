import { useState, useEffect } from "react";

function useDocumentScroll(callback: {
  (getScrollInformation: Function): void;
  (arg0: { previousScrollTop: number; currentScrollTop: number }): void;
}): void {
  const [, setScrollPosition] = useState(0);
  let previousScrollTop = 0;

  function handleDocumentScroll(): void {
    const { scrollTop: currentScrollTop } =
      document.documentElement || document.body;

    setScrollPosition(previousPosition => {
      previousScrollTop = previousPosition;
      return currentScrollTop;
    });

    callback({ previousScrollTop, currentScrollTop });
  }

  useEffect(() => {
    window.addEventListener("scroll", handleDocumentScroll);

    return () => window.removeEventListener("scroll", handleDocumentScroll);
  });
}

export default useDocumentScroll;
