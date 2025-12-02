# GARTEN.ai Homepage

Personal website for Patrik Garten – AI Solution Architect & Software Engineer.

Built with [Astro](https://astro.build), [Vue.js](https://vuejs.org), and [Tailwind CSS](https://tailwindcss.com).

## Development

```bash
pnpm install
pnpm dev
```

Dev server runs at `http://localhost:4321`

## Build

```bash
pnpm build
pnpm preview
```

## Docker Deployment

The site is deployed via Docker on a self-hosted Dokploy instance.

```bash
docker build -t gartenai-homepage .
docker run -p 80:80 gartenai-homepage
```

### Build

The site domain is hardcoded to `https://garten.ai` in `astro.config.mjs`.
No build arguments or environment variables are required.

### Security

The Docker image uses [Caddy](https://caddyserver.com/) and follows security best practices:

- **Non-root by default**: Caddy runs as non-root user (UID 1000)
- **Minimal base image**: Uses `caddy:alpine` for small attack surface
- **Security headers**: X-Frame-Options, X-Content-Type-Options, X-XSS-Protection, Referrer-Policy, Permissions-Policy (configured in `Caddyfile`)
- **No server signature**: Server header is stripped
- **Healthcheck**: Built-in container health monitoring

#### Cookie Security (Traefik/Dokploy)

Since this is a static site behind Traefik (via Dokploy), cookie security (`Secure`, `HttpOnly`, `SameSite`) should be configured in Traefik. Configure via Dokploy's Traefik settings to add security headers globally, or add middleware labels to your service.

## SEO & AI Optimization

The site includes several SEO and AI-crawler optimizations:

- **Structured Data**: JSON-LD schema for Person, ProfessionalService, BreadcrumbList, and FAQPage
- **Open Graph & Twitter Cards**: Full social sharing metadata
- **llms.txt**: AI crawler guidance at `/llms.txt` and `/llms-full.txt`
- **Sitemap**: Auto-generated at `/sitemap-index.xml`
- **Server-Side Rendering**: All content is pre-rendered for optimal crawlability

### Required: OG Image

Add an Open Graph image at `public/og-image.png` (1200×630px recommended) for social sharing previews.

Example tools to create OG images:
- [Figma](https://figma.com)
- [Canva](https://canva.com)
- [OG Image Generator](https://og-image.vercel.app)
