# Dragons Dev — Static Website

Statische Landingpage für die Hobby-Organisation **[Dragons Dev](https://github.com/Dragons-Dev)** (`dragons-dev.de`).

## Features
- **Zero-Build Static Site**: Reines HTML, CSS und Vanilla JavaScript – direkt ohne Build-Pipeline auf **GitHub Pages** hostbar.
- **Live GitHub-Integration**: Lädt öffentliche Repositories automatisch über die GitHub-API (`https://api.github.com/orgs/Dragons-Dev/repos`) inklusive statischem Fallback, falls das Rate-Limit greift.
- **Zweisprachig (DE / EN)**: Umschaltbar zwischen Deutsch und Englisch.
- **Custom Domain Ready**: Enthält bereits die `CNAME`-Datei für `dragons-dev.de`.

## Auf GitHub Pages veröffentlichen

1. Dateien in das Repository [`Dragons-Dev/Dragons-Dev.github.io`](https://github.com/Dragons-Dev/Dragons-Dev.github.io) pushen:
   ```bash
   git init
   git remote add origin https://github.com/Dragons-Dev/Dragons-Dev.github.io.git
   git branch -M main
   git add .
   git commit -m "Initial static website"
   git push -u origin main
   ```
2. In den Repository-Einstellungen unter **Settings → Pages** sicherstellen, dass als Source `Deploy from a branch` (`main` / `/ (root)`) ausgewählt ist.
