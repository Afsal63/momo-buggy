import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Lobster } from "next/font/google";

const lobster = Lobster({
  weight: "400",
  subsets: ["latin"],
  display: "swap", // ✅ improves performance (important for SEO)
});

// ✅ GLOBAL SEO
export const metadata = {
  metadataBase: new URL("https://momobuggy.com"),

  title: {
    default: "Momo Buggy | Best Momos & Franchise in India",
    template: "%s | Momo Buggy",
  },

  description:
    "Momo Buggy offers delicious street-style momos and profitable franchise opportunities across India. Join the fastest growing momo brand.",

  keywords: [
    "momo franchise India",
    "momos near me",
    "street food franchise",
    "momo business India",
    "Bangalore momo franchise",
  ],

  openGraph: {
    title: "Momo Buggy | India's Fast Growing Momo Brand",
    description:
      "Join Momo Buggy franchise and build your food business. High demand, proven model.",
    url: "https://momobuggy.com",
    siteName: "Momo Buggy",
    images: [
      {
        url: "/logo2.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Momo Buggy",
    description: "Best momos & franchise opportunity in India",
    images: ["/logo2.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={lobster.className}>
        
        {/* ✅ STRUCTURED DATA (BIG SEO BOOST) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FoodEstablishment",
              name: "Momo Buggy",
              image: "https://momobuggy.com/logo2.png",
              url: "https://momobuggy.com",
              servesCuisine: "Momos",
              address: {
                "@type": "PostalAddress",
                addressCountry: "India",
              },
              sameAs: [
                "https://www.instagram.com/momobuggy.in/",
              ],
            }),
          }}
        />

        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}