"use client";

import { usePathname } from "next/navigation";

const App = ({ children }) => {
  const pathname = usePathname();
  return (
    <div className={`pageContent ${pathname?.length > 1 && "moveRight"}`}>
      {children}
    </div>
  );
};

export default App;
