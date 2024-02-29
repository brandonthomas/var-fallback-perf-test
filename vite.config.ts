import { resolve } from 'path'
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { ModuleFormat } from 'rollup';
import replace from '@rollup/plugin-replace';
import externalGlobals from "rollup-plugin-external-globals";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    target: 'esnext',
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'src/Test.bench.tsx'),
      name: 'MyLib',
      // the proper extensions will be added
      fileName: (format: ModuleFormat, entryName: string) => `${entryName}.mjs`,
      formats: ['es']
    },
    rollupOptions: {
      plugins: [
        replace({
          'process.env.NODE_ENV': JSON.stringify('production'),
        }),
        externalGlobals({
          'react': 'React',
          'react-dom': 'ReactDOM',
        })
      ]
    },
  }
})
