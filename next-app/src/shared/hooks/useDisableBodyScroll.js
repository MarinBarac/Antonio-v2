import { useEffect } from "react";

const useDisableBodyScroll = (open) => {
  useEffect(() => {
    if (open) {
      window.scrollTo(0, 0);
      document.body.classList.add("scrollLock");
    } else {
      document.body.classList.remove("scrollLock");
    }
  }, [open]);
};

export default useDisableBodyScroll;
