import "./globals.css";
import { headingFont, bodyFont } from "@/lib/fonts";
import SmoothScrollProvider from "@/components/layout/SmoothScrollProvider";
import PageTransition from "@/components/layout/PageTransition";
import CustomCursor from "@/components/ui/CustomCursor";
import IntroLoader from "@/components/layout/IntroLoader";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <body className="bg-background text-foreground antialiased">
        <CustomCursor />
        <IntroLoader>
          <SmoothScrollProvider>
            <PageTransition>{children}</PageTransition>
          </SmoothScrollProvider>
        </IntroLoader>
      </body>
    </html>
  );
}
