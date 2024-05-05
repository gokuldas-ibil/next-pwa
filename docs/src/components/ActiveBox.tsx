"use client";
import { usePathname } from "next/navigation";
import type { DetailedHTMLProps, HTMLAttributes } from "react";

import { clsx } from "@/utils/clsx";

const baseActiveBoxClassName = "items-center justify-between gap-2 text-left w-full flex rounded text-sm transition-colors [word-break:break-word] font-medium";
const hoverActiveBoxClassName =
  "text-black dark:text-white hover:bg-neutral-200 hover:text-black dark:hover:bg-neutral-800 dark:hover:text-white";
const activeActiveBoxClassName = "bg-neutral-200 text-black dark:bg-neutral-800 dark:text-white";

export interface ActiveBoxProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  href: string | undefined;
}

export const ActiveBox = ({ href, className, ...rest }: ActiveBoxProps) => {
  const pathname = usePathname();
  const isActive = href === pathname;

  return <div className={clsx(baseActiveBoxClassName, isActive ? activeActiveBoxClassName : hoverActiveBoxClassName, className)} {...rest} />;
};
