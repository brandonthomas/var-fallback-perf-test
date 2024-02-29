import { resolve } from 'path'
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { ModuleFormat } from 'rollup'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    target: 'esnext',
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: [resolve(__dirname, 'src/index.ts'), resolve(__dirname, 'src/Test.bench.tsx')],
      name: 'MyLib',
      // the proper extensions will be added
      fileName: (format: ModuleFormat, entryName: string) => `${entryName}.mjs`,
      formats: ['es']
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['react'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          react: 'react',
        },
      },
    },
  }
})
