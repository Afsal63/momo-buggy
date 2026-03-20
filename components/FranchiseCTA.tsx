
export default function FranchiseCTA() {
  return (
    <section className="bg-primary py-24 text-center">
      
      {/* Heading (CSS instead of motion) */}
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 opacity-0 animate-fadeIn">
        Own a MomoBuggy Franchise
      </h2>

      {/* CTA Button (anchor instead of window.open) */}
      <a
        href="https://momo-buggy-form.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-6 px-10 py-4 bg-white text-primary font-semibold rounded-full transition transform hover:scale-105 active:scale-95 will-change-transform"
      >
        Apply Now
      </a>
    </section>
  );
}