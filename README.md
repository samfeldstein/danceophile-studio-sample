<p align="center">
   <a href="https://astro.build">
    <img src="https://img.shields.io/badge/Powered_by-Astro-45158A" alt="Powered by Astro">
  </a>
</p>

# 🕺 Postoley Dance Ensemble

A website for Postoley Dance Ensemble and Danceophile Studio, an independent folk dance studio in Boulder, CO. The live site is at [danceophile.com](https://danceophile.com).

This repository is a portfolio code sample: a snapshot of the production site's source, shared without its commit history. It is meant to be read, not forked or run.

## 🚘 Under the Hood

- **[Astro](https://astro.build)** with static output and `.astro` components
- **Modern CSS**, split into small partials (`src/styles/`), with Sass for component styles
- **Dance events as Markdown** in an Astro content collection (`src/content/events/`), with a generated page for each event
- **[Decap CMS](https://decapcms.org)** at `/admin`, so the studio's owner can add, edit, and delete events and gallery photos without touching code
- **Netlify** hosting, with Netlify Forms for the contact and email-list forms
- **Optimized media:** responsive images through `astro:assets`, WebM and MP4 video sources, and self-hosted web fonts
- **Fast navigation:** Astro prefetching and view transitions

## 📁 Where to Look

```text
├── config.mjs             Site title, description, URL, and developer contact
├── public/
│   ├── admin/config.yml   Decap CMS collections and fields
│   ├── fonts/             Self-hosted web fonts
│   └── videos/            MP4 and WebM sources
└── src/
    ├── components/        Header, footer, forms, upcoming events, and more
    ├── content/events/    One Markdown file per event
    ├── images/            Photos, optimized at build time
    ├── layouts/Base.astro Shared page shell
    ├── pages/             One file per route, plus events/[id].astro
    └── styles/            Reset, base, fonts, utilities, and page styles
```

## 📝 Notes

- The site's content, photos, and videos belong to the studio and are included here only so the code can be read in context. They are not licensed for reuse.
- Contact details in the pages are the studio's public business information.
