import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Lobster, Shadows_Into_Light } from "next/font/google";

const lobster = Lobster({
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
