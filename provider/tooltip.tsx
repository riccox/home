import { FC, ReactNode } from "react";
import ReactTooltip from "react-tooltip";

export const TooltipProvider: FC<{
  children: ReactNode;
}> = ({ children }) => {
  return (
    <>
      {children}
      <ReactTooltip place="top" type="dark" effect="solid" />
    </>
  );
};
