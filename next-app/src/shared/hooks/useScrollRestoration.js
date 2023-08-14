import { useEffect } from "react";
import { useRouter } from "next/navigation";

const saveScrollPos = (url) => {
  const scrollPos = { x: window.scrollX, y: window.scrollY };
  sessionStorage.setItem(url, JSON.stringify(scrollPos));
};

function restoreScrollPos(url) {
  const scrollPos = JSON.parse(sessionStorage.getItem(url));
  if (scrollPos) {
    setTimeout(() => {
      window.scrollTo(scrollPos.x, scrollPos.y);
    }, 100);
  }
}

const useScrollRestoration = (path) => {
    const router = useRouter();
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      let shouldScrollRestore = false;
      window.history.scrollRestoration = "manual";
      restoreScrollPos(path);

      const onBeforeUnload = (event) => {
        saveScrollPos(path);
        delete event["returnValue"];
      };

      const onRouteChangeStart = () => {
        saveScrollPos(path);
      };

      const onRouteChangeComplete = (url) => {
        if (shouldScrollRestore) {
          shouldScrollRestore = false;
          restoreScrollPos(url);
        } else {
          window.scrollTo(0, 0);
        }
      };

      window.addEventListener("beforeunload", onBeforeUnload);
      router.events.on("routeChangeStart", onRouteChangeStart);
      router.events.on("routeChangeComplete", onRouteChangeComplete);
      router.beforePopState(() => {
        shouldScrollRestore = true;
        return true;
      });

      return () => {
        window.removeEventListener("beforeunload", onBeforeUnload);
        router.events.off("routeChangeStart", onRouteChangeStart);
        router.events.off("routeChangeComplete", onRouteChangeComplete);
        router.beforePopState(() => true);
      };
    }
  }, [path, router]);
};

export default useScrollRestoration;
