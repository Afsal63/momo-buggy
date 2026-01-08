import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Lobster, Story_Script } from "next/font/google";

const lobster = Story_Script({
  weight: "400",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
   
        <body className={lobster.className}>
          <Navbar />
          {children}
          <Footer />
        </body>

    </html>
  );
}
