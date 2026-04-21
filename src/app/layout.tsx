import "./globals.css";
import { headingFont, bodyFont } from "@/lib/fonts";
import PageTransition from "@/components/layout/PageTransition";
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
        <IntroLoader>
          <Navbar />
          <PageTransition>{children}</PageTransition>
          <Footer />
        </IntroLoader>
      </body>
    </html>
  );
}
