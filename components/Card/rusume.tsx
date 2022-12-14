import { FC, ReactNode, useCallback } from "react";
import Link from "next/link";
import { TooltipWrapper } from "react-tooltip";

interface ResumeDoingCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  link?: string;
  className?: string;
}

export const ResumeDoingCard: FC<ResumeDoingCardProps> = ({
  icon,
  title,
  description,
  link,
  className = "",
}) => {
  const Wrapper = link ? Link : "div";
  return (
    <Wrapper
      href={link as string}
      className={`${className} decoration-transparent flex flex-col md:flex-row bg-white dark:bg-black 
      rounded-2xl drop-shadow-xl hover:-translate-y-0.5 p-4 gap-2`}
    >
      <div className={`w-fit`}>{icon}</div>
      <div className={`flex flex-col items-stretch p-1`}>
        <div className={`font-semibold leading-8`}>{title}</div>
        <p className={`font-light whitespace-pre-wrap`}>{description}</p>
      </div>
    </Wrapper>
  );
};

interface ResumeSkillsStatsCardProps {
  title: string;
  items: {
    label: string;
    percentage: number;
  }[];
}

export const ResumeSkillsStatsCard: FC<ResumeSkillsStatsCardProps> = ({
  title,
  items = [],
}) => {
  const calcSkillLevel = useCallback((percentage: number) => {
    if (percentage > 90) {
      return "★★★★★";
    }
    if (percentage > 80) {
      return "★★★★☆";
    }
    if (percentage > 70) {
      return "★★★☆☆";
    }
    if (percentage > 60) {
      return "★★☆☆☆";
    } else {
      return "★☆☆☆☆";
    }
  }, []);
  return (
    <div
      className={`bg-white dark:bg-black rounded-2xl px-8 py-5 drop-shadow-xl break-inside-avoid mb-6 selection:bg-none selection:text-green-500`}
    >
      <div className={`font-medium text-xl`}>{title}</div>
      <div className={`pt-[0.5vw] flex flex-col gap-4`}>
        {items.map((i, index) => (
          <TooltipWrapper content={calcSkillLevel(i.percentage)} key={index}>
            <div className={`bg-gray-300 dark:bg-gray-900 rounded-3xl w-full`}>
              <div
                className={`bg-gradient-to-r from-[#a65fb5] to-[#e6589d] h-full rounded-3xl px-3 py-1 flex items-center`}
                style={{ width: `${i.percentage}%` }}
              >
                <div className={`text-white text-xs truncate`}>{i.label}</div>
              </div>
            </div>
          </TooltipWrapper>
        ))}
      </div>
    </div>
  );
};
