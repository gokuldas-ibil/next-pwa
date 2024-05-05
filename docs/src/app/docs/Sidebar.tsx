import { type DocsTree, docsTree } from "@/utils/buildDocsTree.js";
import { clsx } from "@/utils/clsx.js";

import { SidebarClient, SidebarTextBox } from "./SidebarClient.js";

const SidebarContent = ({ node }: { node: DocsTree }) => {
  const hasChildTree = node.children.length > 0;
  return (
    <li className="flex flex-col pt-2">
      <SidebarTextBox
        href={node.url}
        hasChildTree={hasChildTree}
        childTreeReactNode={
          <div className="transform-gpu overflow-hidden opacity-100 transition-all duration-500 ease-in-out motion-reduce:transition-none ltr:pr-0 rtl:pl-0">
            <ul
              className={clsx(
                "relative flex flex-col before:absolute before:inset-y-1 ltr:ml-3 ltr:pl-3 rtl:mr-3 rtl:pr-3",
                "before:bg-neutral-250 before:w-px before:content-[''] ltr:before:left-0 rtl:before:right-0 dark:before:bg-neutral-800",
              )}
            >
              {node.children.map((childNode) => (
                <SidebarContent key={childNode.id} node={childNode} />
              ))}
            </ul>
          </div>
        }
      >
        {node.title}
      </SidebarTextBox>
    </li>
  );
};

export const Sidebar = () => (
  <SidebarClient>
    {docsTree.map((node) => (
      <SidebarContent key={node.id} node={node} />
    ))}
  </SidebarClient>
);
