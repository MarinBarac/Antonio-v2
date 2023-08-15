"use client";

import { useScrollRestoration } from "shared/hooks";

const App = ({ children }) => {
  useScrollRestoration();

  return children;
};

export default App;
