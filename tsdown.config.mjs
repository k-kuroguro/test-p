import { defineConfig } from 'tsdown';

export default defineConfig({
   entry: ['./src/index.ts'],
   format: 'cjs',
   clean: true,
   minify: true,
   outDir: 'dist',
   deps: {
      skipNodeModulesBundle: true,
   }
});
