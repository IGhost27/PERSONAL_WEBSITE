# Personal Portfolio

A responsive React and Vite portfolio designed for engineering, AI, research, leadership, and the FitOut adventure brand. The app uses hash-based routing so direct navigation works reliably on GitHub Pages.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Production build

```bash
npm run build
npm run preview
```

The production output is created in `dist/`.

## Editable content

Update identity and links in `src/data/site.js`, projects in `src/data/projects.js`, career history in `src/data/experience.js`, publications in `src/data/publications.js`, and FitOut stories in `src/data/adventures.js`.

Every example entry is intentionally labeled as placeholder content. Replace it with verified information. Project case-study sections are driven from each project object, so adding a project does not require a new page component.

## Photographs

Place optimized images in `public/images/`. The folder guide at `public/images/README.md` lists recommended paths and dimensions. Add each public path, such as `/images/projects/project-name/cover.webp`, to the corresponding data object.

## Create and push the repository

```bash
git init
git add .
git commit -m "Build personal portfolio"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

This directory already contains Git metadata, so skip `git init` if it is already your intended repository.

## Enable GitHub Pages

1. Push the repository to GitHub.
2. Open **Settings > Pages** in the repository.
3. Set **Source** to **GitHub Actions**.
4. Push to `main`, or run the deployment workflow manually from the Actions tab.

The workflow in `.github/workflows/deploy.yml` installs dependencies, builds the project, and deploys `dist/`. Vite uses a relative base path, so both user sites and project sites work without editing the repository name.

## Custom domain

1. Add your domain in **Settings > Pages > Custom domain**.
2. Configure the DNS records GitHub displays.
3. Add a `public/CNAME` file containing only your domain, for example `portfolio.example.com`.
4. Update the canonical URLs in `public/sitemap.xml`, `public/robots.txt`, and the Open Graph metadata in `index.html`.

## Before launch

- Replace `Your Name`, initials, email, location, and social URLs.
- Replace every placeholder project, role, publication, and adventure.
- Add `public/images/backgrounds/og-image.jpg` and your personal photography.
- Update the sitemap and robots URLs.
- Test the production build and all external links.
