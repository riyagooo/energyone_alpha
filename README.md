# EnergyOne Alpha

A renewable energy investment platform built with Vue.js.

## Features

- Interactive Earth visualization with D3.js
- Responsive design for all devices
- Dark mode interface
- Investment portfolio dashboard
- Global project exploration

## Deployment

This project is deployed using Cloudflare Pages with direct GitHub integration. Changes to the main branch automatically trigger new deployments.

## Development

To run the project locally:

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Tech Stack

- Vue 3
- Vite
- Tailwind CSS
- D3.js for visualizations

```bash
# create a new project in the current directory
npx sv create

# create a new project in my-app
npx sv create my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.
