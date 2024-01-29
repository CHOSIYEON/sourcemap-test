import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    sentryVitePlugin({
      org: "fe-error-logging",
      project: "javascript-react2",
      // sourcemaps: {
      //   filesToDeleteAfterUpload: "./dist/**/*.map",
      // },
    }),
  ],

  build: {
    sourcemap: true,
  },
});
