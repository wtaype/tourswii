// @ts-check
import { defineConfig, passthroughImageService } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { linkweb, id } from './src/wii.js';

export default defineConfig({
  // CONFIGURACIÓN BASE (HTML comprimido para máxima velocidad y SEO 2026) _____________
  site: linkweb,
  base: '/',
  compressHTML: true,

  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false
    }
  },

  // NAVEGACIÓN RÁPIDA (Prefetch inteligente al hacer hover para 0ms de retardo) _____________
  prefetch: {
    defaultStrategy: 'hover',
    prefetchAll: false,
  },

  // COMPILACIÓN ESTILOS E IMÁGENES (Inyección de CSS crítico sin peticiones bloqueantes) _____________
  build: {
    inlineStylesheets: 'always',
  },
  image: {
    service: passthroughImageService(),
    domains: ['images.unsplash.com', 'i.ibb.co', 'ibb.co']
  },

  // EXPERIMENTAL (Speculation Rules API para prerenderizar instantáneamente en clic) _____________
  experimental: {
    clientPrerender: true,
  },

  // CONFIGURACIÓN DE VITE Y BUNDLING (Compilación ESNext ultra-minificada con esbuild) _____________
  vite: {
    build: {
      target: 'esnext',
      minify: 'esbuild',
      cssCodeSplit: true,
      esbuild: {
        drop: ['console', 'debugger'],
        legalComments: 'none'
      },
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules/firebase') || id.includes('firebase')) return 'vendor-firebase';
            if (id.includes('node_modules')) return 'vendor';
          }
        }
      }
    }
  },

  // INTEGRACIONES (Sitemap XML automatizado, modulepreload y minificación HTML profunda) _____________
  integrations: [
    sitemap({
      filter: (page) => !['/personal', '/kevin12', '/kevin13', '/kevin14', '/kevin15', '/kevin16', '/kevin17'].some(x => page.includes(x)),
      serialize(item) {
        item.lastmod = new Date().toISOString().split('T')[0];
        const p = new URL(item.url).pathname.replace(/\/$/, '') || '/';
        const [pri, freq] = (p === '/' || p === '/en') ? [1.0, 'daily']
          : p === '/cliente' ? [0.9, 'daily']
          : [0.8, 'weekly'];
        return Object.assign(item, { priority: pri, changefreq: freq });
      }
    }),
    {
      name: 'copy-sitemap',
      hooks: {
        'astro:build:done': async ({ dir }) => {
          const f = new URL('sitemap-0.xml', dir), t = new URL('sitemap.xml', dir);
          if (fs.existsSync(f)) fs.copyFileSync(f, t);
        }
      }
    },
    {
      name: 'modulepreload-critical',
      hooks: {
        'astro:build:done': async ({ dir }) => {
          const distDir = fileURLToPath(dir);
          const astroDir = path.join(distDir, '_astro');
          if (!fs.existsSync(astroDir)) return;

          const criticalChunks = fs.readdirSync(astroDir).filter(f =>
            /^(widev|wii|app|tema|modales|vendor)\.[a-zA-Z0-9_-]+\.js$/.test(f)
          );
          if (!criticalChunks.length) return;

          const linkTags = criticalChunks
            .map(f => `  <link rel="modulepreload" href="/_astro/${f}" />`)
            .join('\n');

          const getHtml = (dirPath) => fs.readdirSync(dirPath, { withFileTypes: true })
            .flatMap(e => e.isDirectory()
              ? getHtml(path.join(dirPath, e.name))
              : e.name.endsWith('.html') ? [path.join(dirPath, e.name)] : []
            );

          for (const file of getHtml(distDir)) {
            const html = fs.readFileSync(file, 'utf-8');
            if (html.includes('modulepreload')) continue;
            const updated = html.replace('</head>', `${linkTags}\n</head>`);
            if (updated !== html) fs.writeFileSync(file, updated, 'utf-8');
          }
        }
      }
    },
    {
      name: 'minify-html-critical',
      hooks: {
        'astro:build:done': async ({ dir }) => {
          const distDir = fileURLToPath(dir);
          const getHtmlFiles = (dirPath) => fs.readdirSync(dirPath, { withFileTypes: true })
            .flatMap(e => e.isDirectory()
              ? getHtmlFiles(path.join(dirPath, e.name))
              : e.name.endsWith('.html') ? [path.join(dirPath, e.name)] : []
            );

          const minijs = (js) => js
            .replace(/\/\*[\s\S]*?\*\//g, '')
            .split('\n')
            .map(l => l.replace(/(?:^|[^:])\/\/.*$/, '').trim())
            .filter(Boolean)
            .join(' ');

          const minihtml = (html) => html
            .replace(/<script([^>]*)>([\s\S]*?)<\/script>/gi, (m, a, c) => a.includes('src=') ? m : `<script${a}>${minijs(c)}</script>`)
            .replace(/\n\s*/g, '')
            .replace(/>\s+</g, '><')
            .replace(/\s{2,}/g, ' ')
            .replace(/<!--.*?-->/g, '')
            .trim();

          for (const file of getHtmlFiles(distDir)) {
            fs.writeFileSync(file, minihtml(fs.readFileSync(file, 'utf-8')), 'utf-8');
          }
        }
      }
    }
  ]
});
