import React from "react";
import { motion } from "framer-motion";

const IMAGES = [
  "../public/images/02.png",
  "../public/images/03.png",
  "../public/images/04.png",
  "../public/images/05.png",
  "../public/images/06.png",
];

const IMAGE_ME = "..public/images/01.png";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 via-purple-100 to-blue-100 text-gray-800 antialiased">
      <header className="max-w-5xl mx-auto p-6 flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-purple-700">MostlyEveryWeekend — Art</h1>
          <p className="mt-1 text-sm text-purple-600">A little corner to share my creative work</p>
        </div>
        <nav className="flex items-center gap-4">
          <a
            href="#about"
            className="text-sm px-3 py-2 rounded-lg hover:bg-purple-200 hover:text-purple-900"
          >
            About
          </a>
          <a
            href="#gallery"
            className="text-sm px-3 py-2 bg-purple-500 text-white rounded-lg shadow hover:bg-purple-600"
          >
            Explore
          </a>
        </nav>
      </header>

      <main className="max-w-5xl mx-auto p-6">
        <section id="about" className="mb-16">
          <h3 className="text-2xl font-semibold text-purple-700 mb-4">About Me</h3>
          <p className="text-gray-700 leading-relaxed">
            I’m Ishita Sinha — a product manager who finds creative release in art. Most weekends you’ll find me sketching or experimenting with color, inspired by everyday life. This space blends my love for design, storytelling, and playful exploration beyond work.
          </p>
        </section>

        <section className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-purple-700">Welcome</h2>
            <p className="text-gray-700">
              This is a playful little showcase of my art pieces. Built as a side project with a
              splash of pastel and creativity — just like my weekends.
            </p>
            <div className="mt-4 flex gap-3">
              <a
                className="inline-block px-4 py-2 bg-purple-500 text-white rounded-lg shadow hover:bg-purple-600"
                href="#gallery"
              >
                See gallery
              </a>
              <a
                className="inline-block px-4 py-2 border border-purple-300 rounded-lg hover:bg-purple-100"
                href="https://instagram.com/mostlyeveryweekend"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-lg ring-4 ring-purple-200">
            <motion.img
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8 }}
              src= {IMAGE_ME}
              alt="Art highlight"
              className="w-full h-64 object-cover"
            />
          </div>
        </section>

        <section id="gallery">
          <h3 className="text-2xl font-semibold text-purple-700 mb-4">Gallery</h3>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {IMAGES.map((src, idx) => (
              <motion.figure
                key={`${src}-${idx}`}
                className="relative rounded-xl overflow-hidden bg-white shadow-md ring-2 ring-purple-100"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src={src}
                  alt={`Art ${idx + 1}`}
                  className="w-full h-56 object-cover"
                />
                <figcaption className="p-3 text-sm text-purple-600 flex items-center justify-between">
                  <div>
                    <div className="font-medium">Piece {idx + 1}</div>
                    <div className="text-xs">{new Date().getFullYear()} • pastel vibes</div>
                  </div>
                  <a
                    href={src}
                    download
                    className="text-xs px-2 py-1 border border-purple-300 rounded-lg hover:bg-purple-100"
                  >
                    Download
                  </a>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </section>
      </main>

      <footer className="mt-16 py-8 border-t border-purple-200 bg-purple-50">
        <div className="max-w-5xl mx-auto p-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-purple-700">
            © {new Date().getFullYear()} MostlyEveryWeekend — Made with creativity & pastels
          </div>
          <div className="flex items-center gap-4 text-sm text-purple-600">
            <a href="https://instagram.com/mostlyeveryweekend" target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a href="https://github.com/" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
