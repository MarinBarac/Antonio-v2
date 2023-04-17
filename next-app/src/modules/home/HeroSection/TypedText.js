"use client";

import Typed from "typed.js";

const { useEffect, useRef } = require("react");

const TypedText = () => {
  const spanRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(spanRef.current, {
      strings: ["software.", "apps.", "websites."],
      typeSpeed: 60,
      backSpeed: 80,
      backDelay: 1000,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return <span><span ref={spanRef}></span></span>;
};
export default TypedText;
