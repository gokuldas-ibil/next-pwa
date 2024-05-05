"use client";
import { Heading, type HeadingProps } from "@/components/Heading";
import { clsx } from "@/utils/clsx";
import Link from "next/link";
import { type ReactNode, createContext, useEffect, useState, type DetailedHTMLProps, type AnchorHTMLAttributes, use, useRef } from "react";

interface TocContextProperties {
  activeId: string | null;
  observer: IntersectionObserver | null;
}

export const TocContext = createContext<TocContextProperties>({ activeId: null, observer: null });

export const TocProvider = ({ children }: { children: ReactNode }) => {
  const [activeId, setActiveId] = useState<TocContextProperties["activeId"]>(null);
  const [observer, setObserver] = useState<TocContextProperties["observer"]>(null);

  useEffect(() => {
    if (!observer) {
      setObserver(
        new IntersectionObserver(
          (entries) => {
            let found = false;
            for (const entry of entries) {
              if (entry.isIntersecting) {
                setActiveId(entry.target.id);
                found = true;
                break;
              }
            }
            if (!found) {
              setActiveId(null);
            }
          },
          {
            rootMargin: "0% 0% 0% 0%",
          },
        ),
      );
    }

    return () => {
      observer?.disconnect();
    };
  }, [observer]);

  return <TocContext.Provider value={{ activeId, observer }}>{children}</TocContext.Provider>;
};

export const TocHeading = ({ ...props }: Omit<HeadingProps, "ref">) => {
  const ref = useRef<HTMLHeadingElement | null>(null);
  const { observer } = use(TocContext);

  useEffect(() => {
    if (ref.current) {
      observer?.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer?.unobserve(ref.current);
      }
    };
  });

  return <Heading ref={ref} {...props} />;
};

export interface TocLinkProps extends Omit<DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, "ref"> {}

export const TocLink = ({ href, className, ...rest }: TocLinkProps) => {
  // Hash URLs
  if (href?.startsWith("#")) {
    const { activeId } = use(TocContext);

    return <a href={href} className={clsx("text-toc", href.slice(1) === activeId && "active", className)} {...rest} />;
  }

  // Same origin
  if (href?.startsWith("/")) {
    return <Link href={href} className={clsx("text-toc", className)} {...rest} />;
  }

  return <a href={href} className={clsx("text-toc", className)} target="_blank" rel="noopener noreferrer" {...rest} />;
};
