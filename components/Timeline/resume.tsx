import { FC } from "react";

interface Props {
  className?: string;
  items: {
    title: string;
    tip: string;
    description: string;
  }[];
}

export const ResumeTimeline: FC<Props> = ({ className = "", items = [] }) => {
  return (
    <div className={`${className} flex items-stretch gap-x-6`}>
      {/* vertical line */}
      <div className={`bg-gray-300 min-h-full w-0.5 my-2 self-stretch`}></div>
      <div className={`flex flex-col gap-8`}>
        {items.map((i, index) => (
          <div
            key={index}
            className={`flex flex-col gap-2 relative 
                        before:absolute before:top-2 before:-left-8
                        before:ring-4 before:ring-blue-200
                        before:bg-blue-500 before:rounded-full before:w-3.5 before:h-3.5`}
          >
            <div className={`text-lg font-medium`}>{i.title}</div>
            <div className={`font-light`}>{i.tip}</div>
            <div className={`text-base`}>{i.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
