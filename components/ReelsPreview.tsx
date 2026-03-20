import Image from "next/image";
import { Play } from "lucide-react";

const reels = [
  {
    image: "/reels/1.jpg",
    link: "https://www.instagram.com/momobuggy.in/",
  },
  {
    image: "/reels/2.jpg",
    link: "https://www.instagram.com/momobuggy.in/",
  },
  {
    image: "/reels/3.jpg",
    link: "https://www.instagram.com/momobuggy.in/",
  },
];

export default function ReelsPreview() {
  return (
    <section className="bg-[#5fa6ab] py-16 content-visibility-auto">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10 text-black">
        Viral Reels
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {reels.map((reel, i) => (
          <a
            key={i}
            href={reel.link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative aspect-[9/16] rounded-2xl overflow-hidden group shadow-md md:shadow-lg transition md:hover:scale-105 active:scale-95"
          >
            <Image
              src={reel.image}
              alt={`Reel ${i + 1}`}
              fill
              sizes="(max-width: 768px) 90vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
              loading={i === 0 ? "eager" : "lazy"}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/20 p-4 rounded-full border border-white/30 md:group-hover:scale-110 transition">
                <Play className="w-8 h-8 text-white fill-white" />
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
