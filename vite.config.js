// vite.config.js
const { defineConfig } = require('vite');
const react = require('@vitejs/plugin-react');

module.exports = defineConfig({
  base: '/mostlyeveryweekend-art/',
  plugins: [react()],
});
