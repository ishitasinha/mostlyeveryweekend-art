# MostlyEveryWeekend — Art (Prototype)

Lightweight Vite + React + Tailwind prototype showcasing art images exported from @mostlyeveryweekend.

## Quick start

1. Clone or unpack the repository.

2. Install dependencies:

```bash
npm install
```

3. Run the dev server:

```bash
npm run dev
```

4. Open http://localhost:5173 (Vite default) and explore.

## Hosting to GitHub Pages (automatic)

This repo contains a GitHub Actions workflow (`.github/workflows/deploy.yml`) that builds and deploys the `dist/` output to GitHub Pages whenever you push to the `main` branch. To publish:

- Create a repository on GitHub (or use the `gh` CLI):

```bash
# using gh (if installed and authenticated):
gh repo create YOUR_USERNAME/mostlyeveryweekend-art --public --source=. --remote=origin --push
```

- Or manually create an empty repo on GitHub and set the remote:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin git@github.com:YOUR_USERNAME/mostlyeveryweekend-art.git
git push -u origin main
```

- Check the Actions tab — the `Deploy to GitHub Pages` workflow will run, build, and publish the site.

## Notes

- Drop images into `public/images/` (01.jpg, 02.jpg, ...). Vite serves these at `/images/<name>`.
- The GitHub Actions workflow deploys the `dist/` folder to `gh-pages` branch using the built-in `GITHUB_TOKEN`.
