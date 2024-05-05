import type { Route } from "next";
import localFont from "next/font/local";
import type { FC } from "react";

import { GITHUB_REPO_URL } from "@/shared/constants.js";

import { GitHubLogo } from "../GitHubLogo.js";
import { Logo } from "../Logo.js";
import { NavLink } from "./Link/index.js";
import { NavMobileBurger } from "./client/Mobile/Burger.js";
import { NavMobileMenu } from "./client/Mobile/Menu.js";
import { NavLinks } from "./client/Shared/Links.js";
import { NavToggleSchemeButton } from "./client/Shared/ToggleColorScheme.js";

const notoSansMono = localFont({
  src: "../../shared/notoSansMono.ttf",
  style: "normal",
  display: "swap",
});

export interface MainLinkProps {
  link: Route;
  label: string;
}

export const Navbar: FC = () => (
  <nav className="transition-colors_opa sticky top-0 z-[50] h-fit max-h-screen border-b-[0.25px] border-neutral-300 bg-white duration-100 dark:border-neutral-800 dark:bg-black">
    <div className="mx-auto h-[var(--navbar-height)] max-w-7xl px-2 md:px-6 lg:px-8">
      <div className="relative flex h-16 items-center justify-between">
        <div className="absolute inset-y-0 left-0 flex items-center gap-[5px] md:hidden">
          <NavMobileBurger />
        </div>
        <div className="flex flex-1 items-center justify-center md:flex-none md:items-stretch md:justify-start">
          <NavLink href="/" aria-label="Go to home">
            <Logo containerClassName={notoSansMono.className} nextLogoHeight={16} nextLogoClassName="dark:invert" />
          </NavLink>
        </div>
        <div className="absolute inset-y-0 right-0 flex h-full w-fit flex-row items-center gap-[5px] md:static md:w-full">
          <div className="hidden h-full grow items-center overflow-x-hidden pr-2 md:ml-6 md:flex md:pr-0">
            <div className="overflow-x-overlay hidden h-full grow flex-row-reverse items-center gap-[5px] overflow-x-auto md:flex">
              <div className="flex max-h-full flex-row gap-[inherit]">
                <NavLinks type="desktop" />
              </div>
            </div>
          </div>
          <a href={GITHUB_REPO_URL} target="_blank" rel="noreferrer" className="nav-button">
            <GitHubLogo width={24} height={24} className="min-w-6 min-h-6 max-w-6 max-h-6" aria-hidden />
            <p className="sr-only">Our GitHub repo (opens in a new tab)</p>
          </a>
          <NavToggleSchemeButton />
        </div>
      </div>
    </div>
    <NavMobileMenu />
  </nav>
);
