import { defineConfig } from "tsdown";

export default defineConfig({
  entry: [
    'src/button.ts',
    'src/layout.ts',
    'src/slider.ts',
    'src/types.ts',
  ],
  format: 'esm',
  dts: true,
  sourcemap: true,
  clean: true,
  unbundle: true,
});
