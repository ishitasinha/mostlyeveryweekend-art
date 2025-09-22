import React from "react";
import { motion } from "framer-motion";

const IMAGES = [
  "/images/01.jpg",
  "/images/02.jpg",
  "/images/03.jpg",
  "/images/04.jpg",
  "/images/05.jpg",
  "/images/06.jpg",
];

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100 text-gray-900 antialiased">
      <header className="max-w-5xl mx-auto p-6 flex items-center justify-between">
        <div>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">MostlyEveryWeekend — Art</h1>
          <p className="mt-1 text-sm text-gray-600">A small archive of pieces, curated and updated from @mostlyeveryweekend</p>
        </div>
        <nav className="flex items-center gap-4">
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="text-sm px-3 py-2 rounded-lg hover:bg-gray-100">View on GitHub</a>
          <a href="#gallery" className="text-sm px-3 py-2 bg-black text-white rounded-lg">Explore</a>
        </nav>
      </header>

      <main className="max-w-5xl mx-auto p-6">
        <section className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Why I built this</h2>
            <p className="text-gray-700">A lightweight site to collect and show my art. Built as a prototype using simple, maintainable patterns — drop images in <code className="rounded bg-gray-100 px-1 py-0.5">/public/images</code> and they will appear in the gallery.</p>
            <p className="text-gray-700">Designed for quick updates, minimal hosting cost, and beautiful defaults — a small canvas for the work to breathe.</p>
            <div className="mt-4 flex gap-3">
              <a className="inline-block px-4 py-2 bg-black text-white rounded-lg" href="#gallery">See gallery</a>
              <a className="inline-block px-4 py-2 border rounded-lg" href="https://instagram.com/mostlyeveryweekend" target="_blank" rel="noreferrer">Instagram @mostlyeveryweekend</a>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-lg">
            <motion.img
              initial={{ scale: 0.98 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8 }}
              src={IMAGES[0]}
              alt="Art highlight"
              className="w-full h-64 object-cover"
            />
          </div>
        </section>

        <section id="gallery">
          <h3 className="text-xl font-semibold mb-4">Gallery</h3>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {IMAGES.map((src, idx) => (
              <motion.figure
                key={`${src}-${idx}`}
                className="relative rounded-xl overflow-hidden bg-white shadow-sm"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img src={src} alt={`Art ${idx + 1}`} className="w-full h-56 object-cover" />
                <figcaption className="p-3 text-sm text-gray-600 flex items-center justify-between">
                  <div>
                    <div className="font-medium">Piece {idx + 1}</div>
                    <div className="text-xs">{new Date().getFullYear()} • acrylic on paper</div>
                  </div>
                  <a
                    href={src}
                    download
                    className="text-xs px-2 py-1 border rounded-lg hover:bg-gray-50"
                  >
                    Download
                  </a>
                </figcaption>
              </motion.figure>
            ))}
          </div>

          <div className="mt-8 text-center text-gray-600">
            <p>Want to add new pieces? Add images to <code className="rounded bg-gray-100 px-1 py-0.5">/public/images</code> and name them sequentially (01.jpg, 02.jpg…).</p>
          </div>
        </section>

        <section className="mt-12 border-t pt-8">
          <h4 className="text-lg font-semibold">Pro tips for GitHub hosting</h4>
          <ol className="list-decimal ml-5 mt-3 space-y-2 text-gray-700">
            <li>Commit your project and push to GitHub.</li>
            <li>Use GitHub Pages or Netlify for static hosting — both integrate with your repository for continuous deploys.</li>
            <li>If using GitHub Pages, configure the repository to publish from the <code>gh-pages</code> branch or from the <code>/docs</code> folder after build.</li>
          </ol>
        </section>
      </main>

      <footer className="mt-12 py-8 border-t bg-white">
        <div className="max-w-5xl mx-auto p-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-gray-600">© {new Date().getFullYear()} MostlyEveryWeekend — Built with vibe coding</div>
          <div className="flex items-center gap-4">
            <a href="https://instagram.com/mostlyeveryweekend" target="_blank" rel="noreferrer" className="text-sm">@mostlyeveryweekend</a>
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="text-sm">Source</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
