import { defineConfig } from "vite";
import { createHtmlPlugin } from "vite-plugin-html";
import postcssPresetEnv from "postcss-preset-env";

export default defineConfig(({ mode }) => {
  return {
    plugins: [
      createHtmlPlugin({
        minify: true
      })
    ],
    css: {
      postcss: {
        plugins: [
          postcssPresetEnv({ stage: 0 })
        ]
      }
    }
  };
});
