import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const loaded = [];
    for (let i = 1; i <= 7; i++) {
      const filename = i.toString().padStart(2, "0") + ".png";
      loaded.push(`images/${filename}`);
    }
    setImages(loaded);
  }, []);

  const preview = images.length > 0 ? images[0] : null;
  const galleryImages = images.slice(1); // start gallery from second image

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
        <section id="about" className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div>
            <h3 className="text-2xl font-semibold text-purple-700 mb-4">About Me</h3>
            <p className="text-gray-700 leading-relaxed">
              I’m Ishita Sinha — a product manager who finds creative release in art.
              Most weekends you’ll find me sketching or experimenting with color, inspired by everyday life.
              This space blends my love for design, storytelling, and playful exploration beyond work.
            </p>
          </div>
          {preview && (
            <div className="rounded-xl overflow-hidden shadow-md ring-2 ring-purple-100 flex justify-center items-center bg-white p-2">
              <img
                src={preview}
                alt="Preview"
                className="max-h-80 w-auto object-contain"
              />
            </div>
          )}
        </section>

        <section id="gallery">
          <h3 className="text-2xl font-semibold text-purple-700 mb-4">Gallery</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {galleryImages.map((src, idx) => (
              <motion.figure
                key={`${src}-${idx}`}
                className="relative rounded-xl overflow-hidden bg-white shadow-md ring-2 ring-purple-100"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src={src}
                  alt={`Art ${idx + 2}`}
                  className="w-full h-56 object-cover"
                  onError={(e) => (e.target.style.display = "none")}
                />
                <figcaption className="p-3 text-sm text-purple-600 flex items-center justify-between">
                  <div>
                    <div className="font-medium">Piece {idx + 2}</div>
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
