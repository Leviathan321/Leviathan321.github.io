# Lev Sorokin — personal website

Built with [al-folio](https://github.com/alshedivat/al-folio) (Jekyll), based on the setup of [tsigalko18.github.io](https://github.com/tsigalko18/tsigalko18.github.io).

## Where to edit content

| What | File |
|---|---|
| Name, site settings | `_config.yml` |
| Home page description, address | `_pages/about.md` |
| Profile picture | `assets/img/prof_pic.jpg` |
| News | `_news/announcement_*.md` (one file per item) |
| Highlighted tools (home page) | `_data/tools.yml` |
| Publications | `_bibliography/papers.bib` (PDFs in `assets/pdf/`) |
| Teaching / Organization / Talks / Awards | `_pages/teaching.md`, `organization.md`, `talks.md`, `awards.md` |
| Social links (email, GitHub, Scholar, ...) | `_data/socials.yml` |
| Co-author links in publications | `_data/coauthors.yml` |

## Run locally

```bash
docker compose pull && docker compose up
# then open http://localhost:8080
```

## Deploy

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site into the `gh-pages` branch.
In the repo settings → Pages, set the source to the `gh-pages` branch.
