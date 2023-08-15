import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

const saveScrollPos = (pathname) => {
  const scrollPos = { x: window.scrollX, y: window.scrollY };
  sessionStorage.setItem(pathname, JSON.stringify(scrollPos));
};

const restoreScrollPosition = (pathname) => {
  const scrollPos = JSON.parse(sessionStorage.getItem(pathname));

  if (scrollPos) {
    setTimeout(() => {
      window.scrollTo(scrollPos.x, scrollPos.y);
    }, 100);
  }
};

const useScrollRestoration = () => {
  const pathname = usePathname();

  const savedPathNameRef = useRef(pathname);

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
      const onBeforeUnload = () => {
        saveScrollPos(pathname);
      };

      window.addEventListener("beforeunload", onBeforeUnload);

      if (savedPathNameRef.current === pathname) {
        restoreScrollPosition(pathname);
      } else {
        window.scrollTo(0, 0);
      }

      savedPathNameRef.current = pathname;

      return () => {
        window.removeEventListener("beforeunload", onBeforeUnload);
      };
    }
  }, [pathname]);
};

export default useScrollRestoration;
