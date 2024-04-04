"use client";
import { IconMoonStars, IconSun } from "@tabler/icons-react";
import type { ButtonHTMLAttributes, ComponentPropsWithoutRef } from "react";

import { useColorScheme } from "@/store/index.js";

export type NavToggleSchemeButtonProps = ComponentPropsWithoutRef<"button">;

export const NavToggleSchemeButton = (props: Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "ref" | "type">) => {
  const { toggleColorScheme } = useColorScheme((state) => ({
    colorScheme: state.colorScheme,
    toggleColorScheme: state.toggleColorScheme,
  }));
  return (
    <button
      type="button"
      onClick={() => {
        toggleColorScheme();
      }}
      className="nav-button"
      {...props}
    >
      <span className="visible-dark">
        <IconMoonStars width={24} height={24} className="min-w-6 min-h-6 max-w-6 max-h-6" />
      </span>
      <span className="visible-light">
        <IconSun width={24} height={24} className="min-w-6 min-h-6 max-w-6 max-h-6" />
      </span>
      <span className="sr-only">Toggle color scheme</span>
    </button>
  );
};
