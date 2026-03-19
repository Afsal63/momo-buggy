import Hero from "@/components/Hero";
import ReelsPreview from "@/components/ReelsPreview";
import FranchiseCTA from "@/components/FranchiseCTA";

// ✅ Add this
export const metadata = {
  title: "Momo Buggy | Best Momos in Town",
  description: "Delicious street-style momos. Visit Momo Buggy for amazing taste and franchise opportunities.",
  keywords: ["momos", "street food", "momo buggy", "franchise"],
  openGraph: {
    title: "Momo Buggy",
    description: "Best momos near you",
    url: "https://momobuggy.com",
    siteName: "Momo Buggy",
    images: [
      {
        url: "/logo2.png", // add this image in public folder
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <ReelsPreview />
      <FranchiseCTA />
    </>
  );
}