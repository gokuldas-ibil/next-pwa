import { generateOGImage } from "@/utils/generateOGImage.js";

export const alt = "next-pwa";
export const size = {
  width: 1200,
  height: 600,
};
export const contentType = "image/png";

const opengraghImage = () => generateOGImage(size);

export default opengraghImage;
