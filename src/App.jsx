import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const IMAGES = [
  // Replace with your static image filenames after you add them to public/images/
  "/images/01.jpg",
  "/images/02.jpg",
  "/images/03.jpg",
  "/images/04.jpg",
  "/images/05.jpg",
  "/images/06.jpg",
];

export default function App() {
  const [images, setImages] = useState(IMAGES);
  const [highlight, setHighlight] = useState(IMAGES[0]);

  useEffect(() => {
    setImages(IMAGES.filter(Boolean));
    setHighlight(IMAGES[0]);
  }, []);

  return (
    <div className="site-root min-h-screen bg-paper text-gray-900 antialiased">
      <header className="max-w-5xl mx-auto p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h1 className="brand text-4xl md:text-5xl font-bold tracking-tight">MostlyEveryWeekend</h1>
          <p className="mt-1 text-sm text-muted">A tiny archive of sketches, paintings and experiments — curated from @mostlyeveryweekend</p>
        </div>
        <nav className="flex items-center gap-3">
          <a href="https://instagram.com/mostlyeveryweekend" target="_blank" rel="noreferrer" className="btn-outline">Instagram</a>
          <a href="#gallery" className="btn-primary">Explore</a>
        </nav>
      </header>

      <main className="max-w-5xl mx-auto p-6">
        <section className="intro grid grid-cols-1 md:grid-cols-2 gap-6 items-center mb-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Why I made this</h2>
            <p className="text-muted">This is a little corner to let the work breathe. Built as a simple prototype so adding new pieces is as easy as dropping an image into <code className="code">/public/images</code>.</p>
            <p className="text-muted">Expect small studies, color experiments, and things I make on weekends. Art is a practice — not a product.</p>
            <div className="mt-4 flex gap-3">
              <a className="btn-primary" href="#gallery">See gallery</a>
              <a className="btn-ghost" href="#about">About me</a>
            </div>
          </div>

          <div className="highlight-card rounded-2xl overflow-hidden shadow-lg">
            <motion.img
              initial={{ scale: 0.98 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8 }}
              src={highlight}
              alt="Art highlight"
              className="w-full h-64 object-cover"
            />
          </div>
        </section>

        <section id="gallery" className="mb-10">
          <h3 className="section-title">Gallery</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
            {images.length === 0 ? (
              <div className="text-muted p-6">No images yet — add files to <code className="code">/public/images</code></div>
            ) : (
              images.map((src, idx) => (
                <motion.figure
                  key={`${src}-${idx}`}
                  className="relative rounded-xl overflow-hidden bg-white shadow-sm"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img
                    src={src}
                    alt={`Art ${idx + 1}`}
                    className="w-full h-56 object-cover cursor-pointer"
                    onClick={() => setHighlight(src)}
                  />
                  <figcaption className="p-3 text-sm text-muted flex items-center justify-between">
                    <div>
                      <div className="font-medium">Piece {idx + 1}</div>
                      <div className="text-xs muted">{new Date().getFullYear()} • acrylic / mixed</div>
                    </div>
                    <a href={src} download className="download-link">Download</a>
                  </figcaption>
                </motion.figure>
              ))
            )}
          </div>
        </section>

        <section id="about" className="mb-12">
          <h3 className="section-title">About me</h3>
          <div className="about-card mt-4 p-6 rounded-lg shadow-inner bg-card">
            <p className="text-muted">Hi — I’m Ishita. I make small pieces on weekends and document them on Instagram as <a href="https://instagram.com/mostlyeveryweekend" target="_blank" rel="noreferrer" className="link-underline">@mostlyeveryweekend</a>. I enjoy experimenting with color, texture, and simple compositions. This site is a lightweight archive — a place to slow down and look.</p>
            <div className="mt-4 flex gap-3">
              <a href="mailto:ishita@example.com" className="btn-ghost">Say hello</a>
              <a href="#gallery" className="btn-primary">View work</a>
            </div>
          </div>
        </section>

      </main>

      <footer className="mt-12 py-8 border-t bg-footer">
        <div className="max-w-5xl mx-auto p-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-muted">© {new Date().getFullYear()} MostlyEveryWeekend — Made with weekend vibes</div>
          <div className="flex items-center gap-4">
            <a href="https://instagram.com/mostlyeveryweekend" target="_blank" rel="noreferrer" className="text-sm">@mostlyeveryweekend</a>
            <a href="https://github.com/ishitasinha/mostlyeveryweekend-art" target="_blank" rel="noreferrer" className="text-sm">Source</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
