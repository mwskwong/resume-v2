import { ImageLoader } from "next/image";

export const contentfulLoader: ImageLoader = ({ src, quality, width }) => {
  const url = new URL(src);
  url.searchParams.set("fm", "webp");
  url.searchParams.set("w", width.toString());
  url.searchParams.set("q", quality?.toString() ?? "75");

  return url.href;
};

export const thumIoLoader: ImageLoader = ({ src, width }) =>
  `https://image.thum.io/get/pdfSource/width/${width}/page/1/${src}`;
