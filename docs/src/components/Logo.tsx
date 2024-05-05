import type { CSSProperties } from "react";

import { NextSvg } from "./NextSvg.js";

interface LogoProps {
  containerClassName?: string;
  nextLogoHeight?: number;
  nextLogoClassName?: string;
  nextLogoStyle?: CSSProperties;
  textStyle?: CSSProperties;
  noMoveTextUp?: true;
}

export const Logo = ({ containerClassName, nextLogoHeight = 20, nextLogoClassName, nextLogoStyle, textStyle, noMoveTextUp }: LogoProps) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "0.5rem",
    }}
    className={containerClassName}
    aria-label="next-pwa"
  >
    <NextSvg height={nextLogoHeight} className={nextLogoClassName} style={nextLogoStyle} aria-hidden />
    <p
      style={{
        fontSize: nextLogoHeight * 1.32,
        textTransform: "uppercase",
        letterSpacing: "0.1em",
        padding: 0,
        margin: `${!noMoveTextUp ? "-1px" : "0px"} 0px 0px 0px`,
        ...textStyle,
      }}
    >
      PWA
    </p>
  </div>
);
