"use client";
import { clsx } from "@/utils/clsx";
import { type ReactElement, useId, useState } from "react";

export const Tabs = ({ titles, children }: { titles: string[]; children: ReactElement | ReactElement[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const id = useId();
  const codes = Array.isArray(children) ? children : [children];
  if (titles.length !== codes.length) {
    return <></>;
  }
  return (
    <div className="my-3 flex w-full flex-col rounded-xl border border-neutral-300 bg-white dark:border-neutral-800 dark:bg-neutral-950">
      <div className="relative w-full rounded-t-xl bg-white dark:bg-black">
        <div role="tablist" aria-orientation="horizontal" className="flex w-full overflow-auto rounded-t-xl">
          {titles.map((tab, idx) => {
            const isActive = idx === currentIndex;
            return (
              <button
                // Key is stable
                key={`button-${idx}`}
                id={`${id}-${idx}-button`}
                type="button"
                role="tab"
                className={clsx(
                  "relative min-w-max border-r border-neutral-300 px-4 py-2 dark:border-neutral-800",
                  isActive ? "bg-white text-black dark:bg-neutral-950 dark:text-white" : "text-neutral-600 dark:text-neutral-400",
                )}
                onClick={() => setCurrentIndex(idx)}
                aria-controls={`${id}-${idx}-code`}
                aria-selected={isActive}
              >
                {tab}
                {isActive && (
                  <span
                    className="pointer-events-none absolute bottom-0 left-0 z-[2] h-[1px] w-full bg-white dark:bg-neutral-950"
                    aria-hidden="true"
                  />
                )}
              </button>
            );
          })}
        </div>
        <div className="pointer-events-none absolute bottom-0 left-0 z-[1] h-[1px] w-full bg-neutral-300 dark:bg-neutral-800" aria-hidden="true" />
      </div>
      <div className="margin-0 overflow-auto p-4">
        {codes.map((code, idx) => {
          const isActive = idx === currentIndex;
          return (
            <div
              // Key is stable
              key={`code-${idx}`}
              id={`${id}-${idx}-code`}
              role="tabpanel"
              className={clsx("whitespace-normal", !isActive && "hidden")}
              aria-labelledby={`${id}-${idx}-button`}
            >
              {isActive && code}
            </div>
          );
        })}
      </div>
    </div>
  );
};
