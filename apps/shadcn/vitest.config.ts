import { fileURLToPath } from 'node:url'
import { resolve } from 'path'
import { configDefaults, defineConfig, mergeConfig } from 'vitest/config'

import viteConfig from './vite.config'

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: 'jsdom',
      exclude: [...configDefaults.exclude, './tests/e2e/*'],
      root: fileURLToPath(new URL('./', import.meta.url)),
      setupFiles: [resolve(__dirname, './tests/unit/setup.ts')]
    }
  })
)
