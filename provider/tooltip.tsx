import { FC, ReactNode } from "react";
import {
  Tooltip as ReactTooltip,
  TooltipProvider as Provider,
} from "react-tooltip";

export const TooltipProvider: FC<{
  children: ReactNode;
}> = ({ children }) => {
  return (
    <>
      <Provider>
        {children}
        <ReactTooltip place="top" variant="dark" float={false} />
      </Provider>
    </>
  );
};
