import { generateOGImage } from "@/utils/generateOGImage.js";

export const alt = "next-pwa - Docs";
export const size = {
  width: 1200,
  height: 600,
};
export const contentType = "image/png";
export const dynamic = "force-static";

const opengraghImage = () => generateOGImage(size, "Docs");

export default opengraghImage;
