import { type ReactNode, useEffect } from "react";

export const Step = ({
  number,
  title,
  total,
  selected,
  children,
  last = false,
  passed = false,
}: {
  number: number;
  title: string;
  total: number;
  selected: boolean;
  children: ReactNode;
  last?: boolean;
  passed?: boolean;
}) => {
  useEffect(() => {
    if (selected) {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }
  }, [selected]);

  return (
    <div className="flex flex-col h-full">
      <div className="flex gap-4 items-center">
        <p
          className={`text-sm lg:text-base size-10 lg:size-12 ${selected || passed ? "bg-neutral-800 text-white" : "bg-neutral-300 text-neutral-900"} rounded-full flex justify-center items-center`}
        >
          {!passed ? `${number} / ${total}` : "✓"}
        </p>
        <h1 className="text-2xl font-semibold">{title}</h1>
      </div>
      <div className="flex gap-4 h-full">
        <div className="h-full px-3.5 md:px-4.5 lg:px-5.5">
          {!last ? (
            <div className="w-[3px] h-full bg-neutral-300 overflow-hidden">
              <div
                className={`h-full ${!passed ? "translate-y-[-100%]" : "translate-y-0"} transition-transform duration-1200 w-full bg-neutral-900`}
              ></div>
            </div>
          ) : null}
        </div>
        <div
          className={`w-full transition-opacity duration-1000 pt-2 pb-4 ${selected ? "opacity-100" : "pointer-events-none opacity-40"}`}
        >
          {selected || passed ? children : null}
        </div>
      </div>
    </div>
  );
};
