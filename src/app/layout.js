import { Geist, Geist_Mono, Josefin_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar";
import NestThemeProvider from "@/providers/NestThemeProvider";
import Footer from "@/Components/Footer";



const josefin = Josefin_Sans({
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "SportNest",
    template: "%s | SportNest",
  },
  description:
    "SportNest is a modern sports facility booking platform where users can explore, book, and manage sports venues with ease.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${josefin.className} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col  bg-background text-foreground">
        <NestThemeProvider>
          <Navbar></Navbar>
          <main>{children}</main>
          <Footer></Footer>
        </NestThemeProvider>
      </body>
    </html>
  );
}
