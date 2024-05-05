"use client";
import { IconChevronRight } from "@tabler/icons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { type ReactNode, useEffect, useRef, useState, type DetailedHTMLProps, type AnchorHTMLAttributes } from "react";

import { clsx } from "@/utils/clsx.js";

interface SidebarClientProps {
  children: ReactNode;
}

export const SidebarClient = ({ children }: SidebarClientProps) => {
  const pathname = usePathname();
  const pathnameRef = useRef<string>(pathname);

  const [isMobileExpanded, setIsMobileExpanded] = useState(false);

  useEffect(() => {
    if (isMobileExpanded) {
      document.body.classList.add("overflow-hidden", "md:overflow-auto");
    }

    return () => {
      document.body.classList.remove("overflow-hidden", "md:overflow-auto");
    };
  }, [isMobileExpanded]);

  if (pathnameRef.current !== pathname) {
    pathnameRef.current = pathname;
    setIsMobileExpanded(false);
  }

  return (
    <div
      className={clsx(
        "z-10 flex w-full flex-col print:hidden",
        "sticky top-[var(--navbar-height)] md:w-64 xl:w-80 md:shrink-0 md:self-start",
        isMobileExpanded && "h-[calc(100vh-var(--navbar-height))] md:h-[unset]",
      )}
    >
      <button
        type="button"
        className={clsx(
          "z-20 flex h-fit w-full flex-row items-center justify-start gap-2 px-4 py-3 md:hidden",
          "bg-neutral-50 text-black duration-100 dark:bg-neutral-950 dark:text-white",
          "border-b border-neutral-200/70 dark:border-neutral-400/10",
        )}
        onClick={() => setIsMobileExpanded(!isMobileExpanded)}
      >
        <IconChevronRight className={clsx("transition-transform duration-100", isMobileExpanded && "rotate-90")} width={12} height={12} aria-hidden />{" "}
        Menu
      </button>
      <aside
        className={clsx(
          "h-[calc(100vh-100px)] grow overflow-y-auto overflow-x-hidden px-4 pb-4 md:pt-4",
          "transform-gpu transition-all duration-150 ease-out",
          "bg-neutral-50 dark:bg-neutral-950",
          "border-b border-neutral-200/70 dark:border-neutral-400/10",
          !isMobileExpanded && "absolute max-md:[transform:translate(0,-100%)] md:[position:unset]",
        )}
      >
        <ul>{children}</ul>
      </aside>
    </div>
  );
};

interface SidebarLinkProps extends DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
  href: string;
  isActive?: boolean;
  wideText?: boolean;
  textCenter?: boolean;
}

const SidebarLink = ({ href, isActive, wideText, textCenter, ...props }: SidebarLinkProps) => {
  return (
    <span
      className={clsx(
        "transition-colors-opacity flex w-full cursor-pointer flex-row justify-between rounded-md duration-100",
        isActive ? "bg-neutral-250 dark:bg-neutral-800" : "hover:bg-neutral-250 dark:hover:bg-neutral-800",
      )}
    >
      <Link
        href={href}
        className={clsx(
          "h-full w-full gap-2 break-words px-3 py-2 font-medium text-black dark:text-white",
          textCenter && "text-center",
          wideText ? "shrink-0 text-base uppercase tracking-widest" : "text-base md:text-sm",
        )}
        aria-current={isActive}
        {...props}
      />
    </span>
  );
};

interface SidebarTextBoxProps {
  hasChildTree: boolean;
  childTreeReactNode: ReactNode;
  href: string | undefined;
  children: ReactNode;
}

export const SidebarTextBox = ({ href, hasChildTree, childTreeReactNode, children }: SidebarTextBoxProps) => {
  const pathname = usePathname();

  const isActive = !!href && href === pathname;

  const optionalLink = href ? (
    <SidebarLink href={href} textCenter={false} isActive={isActive}>
      {children}
    </SidebarLink>
  ) : (
    children
  );

  return (
    <>
      {hasChildTree ? (
        <details open={!!href && pathname.startsWith(href)} className="[&[open]>summary>div>svg]:rotate-90">
          <summary className={clsx("flex flex-row", isActive && "[&>span]:rounded-e-none")}>
            {optionalLink}
            <div
              className={clsx(
                "flex items-center px-2 text-black transition-all duration-100 dark:text-white",
                isActive
                  ? "bg-neutral-250 rounded-e border-l border-black/40 dark:border-white/40 dark:bg-neutral-800"
                  : "hover:bg-neutral-250 rounded hover:dark:bg-neutral-800",
              )}
            >
              <IconChevronRight width={16} height={16} className="transition-transform duration-100" />
              <span className="sr-only">Expand section</span>
            </div>
          </summary>
          {childTreeReactNode}
        </details>
      ) : (
        optionalLink
      )}
    </>
  );
};
