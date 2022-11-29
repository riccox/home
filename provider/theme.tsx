import { FC, ReactNode, useEffect } from "react";

export const ThemeProvider: FC<{
  children: ReactNode;
}> = ({ children }) => {
  useEffect(() => {
    const now = new Date();
    console.debug("detect user locale time", now, now.getHours());
    if (now.getHours() >= 18) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);
  return <>{children}</>;
};
