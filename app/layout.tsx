import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navigation from "@/components/Navigation";
import NavigationSmall from "@/components/NavigationSmall";
import Footer from "@/components/Footer";
import { Toaster } from "sonner";
import { AppWrapper } from "@/context";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Crypto Punch",
  description: "Get High on Crypto with Crypto Punch",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <AppWrapper>
              <div className="hidden sm:block">
                <Navigation/>
              </div>
              <div className="block sm:hidden">
                <NavigationSmall/>
              </div>
              {children}
              <Toaster />
              <Footer/>
            </AppWrapper>
          </ThemeProvider></body>
    </html>
  );
}
