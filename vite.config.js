// vite.config.cjs
const { defineConfig } = require('vite');

module.exports = async () => {
  // dynamic import of the ESM-only plugin (works from CommonJS)
  const reactPlugin = (await import('@vitejs/plugin-react')).default;

  return defineConfig({
    base: '/mostlyeveryweekend-art/',
    plugins: [reactPlugin()],
  });
};
