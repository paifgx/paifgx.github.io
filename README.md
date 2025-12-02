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
