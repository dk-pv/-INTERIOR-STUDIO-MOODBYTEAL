import localFont from "next/font/local";

export const headingFont = localFont({
  src: [
    {
      path: "../fonts/ClashDisplay-Regular.woff2",
      weight: "400",
    },
    {
      path: "../fonts/ClashDisplay-Semibold.woff2",
      weight: "600",
    },
  ],
  variable: "--font-heading",
});

export const bodyFont = localFont({
  src: [
    {
      path: "../fonts/Satoshi-Regular.woff2",
      weight: "400",
    },
    {
      path: "../fonts/Satoshi-Medium.woff2",
      weight: "500",
    },
  ],
  variable: "--font-body",
});