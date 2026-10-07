# Aaditya Salwan — Portfolio

Next.js 15 · TypeScript · Tailwind CSS · Framer Motion · Lucide icons.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start   # production check
```

## Deploy (Vercel — recommended)

1. Push this folder to a GitHub repo.
2. Import it at vercel.com → "New Project" → Deploy (no settings needed).
3. Set `siteUrl` in `src/data/profile.ts` to your live URL (used for SEO / Open Graph / sitemap) and redeploy.

## Editing content — everything lives in `src/data/profile.ts`

| What | Where |
|---|---|
| Name, intro, about, interests | `profile` |
| LinkedIn / GitHub / email / phone | `socialLinks` |
| DRDO section | `drdo` |
| Experience list | `experience` |
| Fruit Ninja / HireOS (incl. case-study text) | `featuredProjects` |
| Daily Activity Tracker / Devisons | `otherProjects` |
| Skills | `skillGroups` |
| Certifications | `certifications` |
| LinkedIn posts | `achievements` |
| Timeline, leadership, education | `timeline`, `leadership`, `education` |

### Links you still need to paste

No URLs have been invented. These buttons stay **hidden** until you paste a real link:

- `featuredProjects[].githubUrl`, `featuredProjects[].linkedinPostUrl` (Fruit Ninja, HireOS)
- `otherProjects[].githubUrl / linkedinPostUrl / liveUrl`
- `certifications[].certificateUrl` (currently `"PASTE_REAL_CERTIFICATE_URL_HERE"`) — if a certificate
  has no verification link, fill `linkedinPostUrl` instead and the card shows "View on LinkedIn".
- `achievements[].postUrl` (currently `"POST_URL_REQUIRED"`) and optional `date`

A link counts as real only if it starts with `https://`, `http://`, `mailto:`, `tel:` or `/`.

## Files in `/public`

- `public/resume.pdf` — your résumé. Every Resume button downloads it as `Aaditya_Salwan_Resume.pdf`.
  To update, replace the file with a new one **with the same name**.
- `public/aaditya-salwan.jpg` — profile photo (hero + link-preview image). Replace with the same name to update.

## Notes

- The Fruit Ninja and HireOS visuals are drawn illustrations (labelled "illustration"), not screenshots.
- Animations respect the OS "reduce motion" setting.
- SEO: title, description, Open Graph, favicon (`src/app/icon.svg`), `robots.txt`, `sitemap.xml`, JSON-LD.
