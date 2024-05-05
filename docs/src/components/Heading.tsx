import type { DetailedHTMLProps, HTMLAttributes } from "react";
import { forwardRef } from "react";

import { clsx } from "@/utils/clsx.js";

export interface HeadingProps extends Omit<DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>, "className"> {
  variant?: "default" | "error";
  type?: "h4" | "h3" | "h2" | "h1";
  isInSatori?: boolean;
}

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(({ id, variant = "default", type = "h2", ...rest }, ref) => {
  const Component = type;
  return (
    <span className={clsx("group heading flex flex-row items-center", variant, type)}>
      <Component ref={ref} id={id} {...rest} />
      {id && (
        <a
          href={`#${id}`}
          className="ml-2 hidden text-slate-400 group-hover:inline group-focus:inline group-active:inline dark:text-slate-600"
          aria-label="Permalink for this section"
        >
          #
        </a>
      )}
    </span>
  );
});

Heading.displayName = "Heading";
