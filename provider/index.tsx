import { FC, ReactNode } from "react";
import { I18nProvider } from "./i18n";
import { SEOProvider } from "./seo";
import { TooltipProvider } from "./tooltip";
import { ThemeProvider } from "./theme";

export const Providers: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <I18nProvider>
      <SEOProvider>
        <ThemeProvider>
          <TooltipProvider>{children}</TooltipProvider>
        </ThemeProvider>
      </SEOProvider>
    </I18nProvider>
  );
};
