import type { MDXComponents } from "mdx/types";
import type { LegacyRef } from "react";
import { twMerge } from "tailwind-merge";

import { Callout } from "@/components/Callout.js";
import { Heading } from "@/components/Heading.js";
import { InlineCode } from "@/components/InlineCode.js";
import { AnchorLinkUnderline } from "@/components/Link/AnchorLinkUnderline.js";
import { LinkUnderline } from "@/components/Link/LinkUnderline.js";
import { Tabs } from "@/components/Tabs.js";
import { Text } from "@/components/Text.js";
import { TocHeading, TocLink } from "./TocContext";

const TEXT_COLOR = "text-black dark:text-white";

const filterLegacyRef = <T,>(ref: LegacyRef<T> | undefined) => (typeof ref === "string" ? undefined : ref);

export const mdxComponents: MDXComponents = {
  InlineCode,
  Callout,
  Tabs,
  a: ({ href, className, ref, ...rest }) => {
    // Hash URLs
    if (href?.startsWith("#")) {
      return (
        <a
          href={href}
          className={twMerge(
            "text-xs font-medium text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100",
            className,
          )}
          ref={ref}
          {...rest}
        />
      );
    }

    // Same origin
    if (href?.startsWith("/")) {
      return <LinkUnderline href={href} className={className} ref={filterLegacyRef(ref)} {...rest} />;
    }

    return <AnchorLinkUnderline href={href} className={className} target="_blank" rel="noopener noreferrer" ref={filterLegacyRef(ref)} {...rest} />;
  },
  p: ({ ref, ...rest }) => <Text ref={filterLegacyRef(ref)} {...rest} />,
  h1: ({ ref, ...rest }) => <Heading type="h1" ref={filterLegacyRef(ref)} {...rest} />,
  h2: ({ className, ref, ...rest }) => <Heading type="h2" ref={filterLegacyRef(ref)} {...rest} />,
  h3: ({ ref, ...rest }) => <Heading type="h3" ref={filterLegacyRef(ref)} {...rest} />,
  h4: ({ ref, ...rest }) => <Heading type="h4" ref={filterLegacyRef(ref)} {...rest} />,
  code: ({ children, ref, ...rest }) => {
    if (typeof children === "string") {
      return (
        <InlineCode ref={ref} {...rest}>
          {children}
        </InlineCode>
      );
    }
    return (
      <code ref={ref} {...rest}>
        {children}
      </code>
    );
  },
  ul: ({ className, ...rest }) => <ul className={twMerge("list-disc first:mt-0 ltr:ml-6 rtl:mr-6", className)} {...rest} />,
  li: ({ className, ...rest }) => <li className={twMerge("my-4 break-words [&>*]:!my-0 [&>ul]:pl-1", TEXT_COLOR, className)} {...rest} />,
};

export const tocHeadingMdxComponents: MDXComponents = {
  ...mdxComponents,
  h1: ({ ref, ...rest }) => <TocHeading type="h1" {...rest} />,
  h2: ({ className, ref, ...rest }) => <TocHeading type="h2" {...rest} />,
  h3: ({ ref, ...rest }) => <TocHeading type="h3" {...rest} />,
  h4: ({ ref, ...rest }) => <TocHeading type="h4" {...rest} />,
};

export const tocMdxComponents: MDXComponents = {
  ...mdxComponents,
  ul({ className, ...rest }) {
    return <ul className="list mt-2" {...rest} />;
  },
  li({ ...rest }) {
    return <li {...rest} />;
  },
  p({ children }) {
    return <>{children}</>;
  },
  a({ ref, ...rest }) {
    return <TocLink {...rest} />;
  },
};
