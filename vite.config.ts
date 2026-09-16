// vite.config.ts
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { defineConfig } from 'vite'

// Augment Vite's UserConfig with the Vitest `test` option used below.
//
// The "textbook" fix for this (import `defineConfig` from `vitest/config`,
// or `import type { InlineConfig } from 'vitest'`) does not work in this
// repo: `npm ls vite` shows two copies of vite installed side by side --
// root `vite@4.x` (what @vitejs/plugin-react's `Plugin` type resolves
// against here) and a bundled `vite@5.x` inside vitest/vite-node (vitest
// 1.6.1 hard-depends on "vite": "^5.0.0"). Pulling in vitest's own type
// declarations activates an ambient `declare module 'vite'` block bundled
// inside them, which collides with this one and produces spurious errors
// (e.g. Vitest's `test.css` getting typed against Vite's unrelated
// top-level `css: CSSOptions`). Declaring only the fields this config
// actually uses avoids that collision entirely and keeps the fix scoped to
// this file, without bumping the pinned vite dependency version.
declare module 'vite' {
  interface UserConfig {
    test?: {
      globals?: boolean
      environment?: string
      setupFiles?: string[]
      css?: boolean
      include?: string[]
    }
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@components': resolve(__dirname, './src/components'),
      '@pages': resolve(__dirname, './src/pages'),
      '@hooks': resolve(__dirname, './src/hooks'),
      '@context': resolve(__dirname, './src/context'),
      '@data': resolve(__dirname, './src/data'),
      '@types': resolve(__dirname, './src/types'),
      '@utils': resolve(__dirname, './src/utils'),
    },
  },
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ui: ['lucide-react', 'framer-motion'],
        },
      },
    },
  },
  preview: {
    port: 4173,
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./src/test/setup.ts"],
    css: false,
    include: ["src/**/*.{test,spec}.{ts,tsx}"],
  },
})
