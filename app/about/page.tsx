"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="min-h-screen bg-cream pt-32 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            From Rejections to a <br />
            <span className="text-primary">Recognized Brand</span>
          </h1>

          <p className="text-gray-600 max-w-2xl mx-auto">
            The story behind MomoBuggy is not about shortcuts — it’s about
            resilience, belief, and building something meaningful.
          </p>
        </motion.div>

        {/* FOUNDER STORY */}
        <div className="space-y-16">
          {/* SECTION 1 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-sm"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              {/* FOUNDER PHOTO */}
              <div className="flex justify-center">
                <div className="relative w-44 h-44 md:w-56 md:h-56 rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/founder/founder.jpg"
                    alt="Athul Raj - Founder of MomoBuggy"
                    fill
                    priority
                    className="object-cover object-center scale-110"
                  />
                </div>
              </div>

              {/* FOUNDER TEXT */}
              <div className="md:col-span-2 text-center md:text-left">
                <h2 className="text-3xl font-semibold mb-4">
                  Meet the Founder – Athul Raj
                </h2>

                <p className="text-gray-600 leading-relaxed">
                  Athul Raj started <strong>MomoBuggy</strong> at the age of
                  just
                  <strong> 19</strong>. With no big backing, no shortcuts, and
                  no guarantees, he stepped into the food business driven by
                  passion and belief.
                </p>
              </div>
            </div>
          </motion.div>

          {/* SECTION 2 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-sm"
          >
            <h2 className="text-3xl font-semibold mb-4">
              Facing Rejections & Building from Scratch
            </h2>

            <p className="text-gray-600 leading-relaxed">
              Like every real entrepreneur, Athul faced multiple rejections —
              from people, from opportunities, and from circumstances. But
              instead of giving up, he focused on learning, improving, and
              building his own identity in the market.
            </p>

            <p className="text-gray-600 leading-relaxed mt-4">
              What started as a small idea slowly transformed into a brand
              trusted by customers and partners alike.
            </p>
          </motion.div>

          {/* SECTION 3 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-sm"
          >
            <h2 className="text-3xl font-semibold mb-4">
              More Than a Brand — A Community
            </h2>

            <p className="text-gray-600 leading-relaxed">
              MomoBuggy is not just about food. It’s about people. Athul built a
              model where franchise partners don’t just buy a brand — they build
              a livelihood.
            </p>

            <p className="text-gray-600 leading-relaxed mt-4">
              Today, many franchise partners associated with MomoBuggy are
              earning well, creating employment, and living a stable,
              respectable life alongside the brand.
            </p>
          </motion.div>

          {/* SECTION 4 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-primary text-white rounded-3xl p-10 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              The Vision Ahead
            </h2>

            <p className="max-w-2xl mx-auto">
              The vision is simple — build a strong Indian food brand, empower
              young entrepreneurs, and create opportunities where growth is
              shared by everyone involved.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
