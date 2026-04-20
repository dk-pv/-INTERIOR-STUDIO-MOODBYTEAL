import "./globals.css";
import { headingFont, bodyFont } from "@/lib/fonts";
import SmoothScrollProvider from "@/components/layout/SmoothScrollProvider";
import PageTransition from "@/components/layout/PageTransition";
import CustomCursor from "@/components/ui/CustomCursor";
import IntroLoader from "@/components/layout/IntroLoader";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
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
            <Navbar />
            <PageTransition>{children}</PageTransition>
            <Footer />
          </SmoothScrollProvider>
        </IntroLoader>
      </body>
    </html>
  );
}
