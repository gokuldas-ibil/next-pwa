"use client";
import { clsx } from "@/utils/clsx";
import { useState, type ReactElement, useId } from "react";

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
          {titles.map((t, idx) => {
            const isActive = idx === currentIndex;
            return (
              <button
                key={`button-${idx}`}
                id={`${id}-button`}
                type="button"
                role="tab"
                aria-controls={`${id}-code`}
                aria-selected={isActive}
                className={clsx(
                  "relative min-w-max border-r border-neutral-300 px-4 py-2 dark:border-neutral-800",
                  isActive ? "bg-white text-black dark:bg-neutral-950 dark:text-white" : "text-neutral-600 dark:text-neutral-400",
                )}
                onClick={() => setCurrentIndex(idx)}
              >
                {t}
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
        {codes.map((e, idx) => {
          const isActive = idx === currentIndex;
          return (
            <div
              key={`code-${idx}`}
              id={`${id}-code`}
              role="tabpanel"
              className={clsx("whitespace-normal", !isActive && "hidden")}
              aria-labelledby={`${id}-button`}
            >
              {isActive && e}
            </div>
          );
        })}
      </div>
    </div>
  );
};
